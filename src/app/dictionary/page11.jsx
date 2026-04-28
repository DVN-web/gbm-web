"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import "./style.scss";

export default function Dictionary() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [includeAdds, setIncludeAdds] = useState(false); 

  
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/dictionary/poliglot.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        if (!Array.isArray(json)) throw new Error("JSON должен быть массивом");

        const validData = json.filter(item =>
          item && typeof item === "object" && item.ru && typeof item.ru === "string"
        );

        setData(validData);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // === ПОДСВЕТКА ===
  const highlightText = (text, query) => {
    if (!query?.trim() || !text) return text;

    const q = query.trim().toLowerCase();
    const lower = text.toLowerCase();
    const index = lower.indexOf(q);

    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <span className="highlight">
          {text.slice(index, index + q.length)}
        </span>
        {text.slice(index + q.length)}
      </>
    );
  };
function countAllEntries(data) {
    return data.reduce((total, item) => {
        return total + 1 + (Array.isArray(item.arrAdd) ? item.arrAdd.length : 0);
    }, 0);
}

  const performSearch = () => {
    if (!query?.trim()) {
      setResults([]);
      return;
    }

    const q = query.trim().toLowerCase();
    const matchedEntries = [];

    data.forEach((entry) => {
      const hasMainMatch = (entry.ru || "").toLowerCase().includes(q);

      const addMatches = includeAdds
        ? (entry.arrAdd || [])
            .map((add) => ({
              ...add,
              _match: (add.ru || "").toLowerCase().includes(q)
            }))
            .filter(add => add._match)
        : [];

      if (hasMainMatch || addMatches.length > 0) {
        matchedEntries.push({
          ...entry,
          _matchedInMain: hasMainMatch,
          _matchedAdds: addMatches
        });
      }
    });

    matchedEntries.sort((a, b) => {
      const aStarts = a.ru.toLowerCase().startsWith(q);
      const bStarts = b.ru.toLowerCase().startsWith(q);

      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      if (a._matchedInMain && !b._matchedInMain) return -1;
      if (!a._matchedInMain && b._matchedInMain) return 1;
      return 0;
    });

    setResults(matchedEntries);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") performSearch();
  };


  const renderEntry = (entry) => {
    const hasAdds = Array.isArray(entry.arrAdd) && entry.arrAdd.length > 0;

    return (
      <div className="dictionary-entry">
        <div className="dictionary-item main">
          <div className="dictionary-ru">
            {highlightText(entry.ru, query)}
          </div>
          <div className="dictionary-lang">
            <div><strong>Гагаузский:</strong> {entry.gag || "-"}</div>
            <div><strong>Турецкий:</strong> {entry.tr || "-"}</div>
            <div><strong>Румынский:</strong> {entry.ro || "-"}</div>
          </div>
        </div>

        {hasAdds && entry.arrAdd.map((add, idx) => (
  <div key={idx} className="dictionary-item sub">
    <div className="dictionary-ru">
      <span className="add-prefix">↳ </span>

      {includeAdds
        ? highlightText(add.ru, query)
        : add.ru}

    </div>
    <div className="dictionary-lang">
      <div><strong>Гагаузский:</strong> {add.gag || "-"}</div>
      <div><strong>Турецкий:</strong> {add.tr || "-"}</div>
      <div><strong>Румынский:</strong> {add.ro || "-"}</div>
    </div>
  </div>
))}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className="Dictionary">
          <h1 className="dictionary-title">Словарный поиск</h1>
          {/* <h2 className="dictionary-title" >Всего <i style={{"fontWeight": "normal"}}>{countAllEntries(data)}</i> слов</h2>  */}
          {!loading && !error && (
            <>
              <div className="search-bar">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Введите слово"
                  className="dictionary-input"
                />

                <button onClick={performSearch} className="search-button">
                  Поиск
                </button>

            
              </div>
              <label className="switch">
                  <input
                    type="checkbox"
                    checked={includeAdds}
                    onChange={() => setIncludeAdds(prev => !prev)}
                  />
                  <span className="slider" />
                  <span className="switch-label">
                    Искать в доп. значениях
                  </span>
                </label>

              <div className="dictionary-results">
  {results.length > 0 ? (
    results.map((entry, idx) => (
      <div key={idx} className="dictionary-entry-wrapper">
        {renderEntry(entry)}
      </div>
    ))
  ) : (
    query.trim() && (
      <div className="dictionary-empty">
        Ничего не найдено
      </div>
    )
  )}
</div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}