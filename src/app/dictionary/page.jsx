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
  const [searchLang, setSearchLang] = useState("all");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/dictionary/poliglot.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        if (!Array.isArray(json)) throw new Error("JSON должен быть массивом");

        const validData = json.filter(
          (item) =>
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

  const normalize = (str) => str?.toLocaleLowerCase();


  const highlightText = (text, query, fieldLang) => {
    if (!query?.trim() || !text || typeof text !== "string") return text;

  
    if (searchLang !== "all" && searchLang !== fieldLang) {
      return text;
    }

    const normalizedQuery = normalize(query.trim());
    const escaped = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");

    const normalizedText = normalize(text);

    let result = "";
    let lastIndex = 0;

    normalizedText.replace(regex, (match, offset) => {
      const originalMatch = text.substr(offset, match.length);

      result += text.substring(lastIndex, offset);
      result += `<span class="highlight">${originalMatch}</span>`;
      lastIndex = offset + match.length;
    });

    result += text.substring(lastIndex);

    return result || text;
  };

  function countAllEntries(data) {
    return data.reduce((total, item) => {
      return total + 1 + (Array.isArray(item.arrAdd) ? item.arrAdd.length : 0);
    }, 0);
  }

  function count(data){
    return data + 2000;
  }
  const langOptions = [
    { value: "all", label: "Все языки" },
    { value: "ru", label: "Русский" },
    { value: "gag", label: "Гагаузский" },
    { value: "tr", label: "Турецкий" },
    { value: "ro", label: "Румынский" },
  ];

  const performSearch = () => {
    if (!query?.trim()) {
      setResults([]);
      return;
    }

    const q = normalize(query.trim());
    const matchedEntries = [];

    data.forEach((entry) => {
      let hasMatch = false;
      let matchedAdds = [];

      const checkField = (text) =>
        text && typeof text === "string" && normalize(text).includes(q);

      if (searchLang === "all") {
        hasMatch =
          checkField(entry.ru) ||
          checkField(entry.gag) ||
          checkField(entry.tr) ||
          checkField(entry.ro);
      } else {
        hasMatch = checkField(entry[searchLang]);
      }

      if (includeAdds && Array.isArray(entry.arrAdd)) {
        matchedAdds = entry.arrAdd.filter((add) => {
          if (searchLang === "all") {
            return (
              checkField(add.ru) ||
              checkField(add.gag) ||
              checkField(add.tr) ||
              checkField(add.ro)
            );
          } else {
            return checkField(add[searchLang]);
          }
        });
      }

      if (hasMatch || matchedAdds.length > 0) {
        matchedEntries.push({ ...entry, _matchedAdds: matchedAdds });
      }
    });

    matchedEntries.sort((a, b) => {
      const aStarts = normalize(a.ru || "").startsWith(q);
      const bStarts = normalize(b.ru || "").startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
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
          <div
            className="dictionary-ru"
            dangerouslySetInnerHTML={{
              __html: highlightText(entry.ru, query, "ru"),
            }}
          />

          <div className="dictionary-lang">
            <div>
              <strong>Гагаузский:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightText(entry.gag, query, "gag"),
                }}
              />
            </div>

            <div>
              <strong>Турецкий:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightText(entry.tr, query, "tr"),
                }}
              />
            </div>

            <div>
              <strong>Румынский:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightText(entry.ro, query, "ro"),
                }}
              />
            </div>
          </div>
        </div>

        {hasAdds &&
          entry.arrAdd.map((add, idx) => {
            const isMatchedAdd = entry._matchedAdds?.some((m) => m === add);

            return (
              <div key={idx} className="dictionary-item sub">
                <div className="dictionary-ru">
                  <span className="add-prefix">↳ </span>
                  {isMatchedAdd ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(add.ru, query, "ru"),
                      }}
                    />
                  ) : (
                    add.ru
                  )}
                </div>

                <div className="dictionary-lang">
                  <div>
                    <strong>Гагаузский:</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(add.gag, query, "gag"),
                      }}
                    />
                  </div>

                  <div>
                    <strong>Турецкий:</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(add.tr, query, "tr"),
                      }}
                    />
                  </div>

                  <div>
                    <strong>Румынский:</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightText(add.ro, query, "ro"),
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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
          <h2 className="dictionary-title">
            Всего{" "}
            <i style={{ fontWeight: "normal" }}>{count(countAllEntries(data))}</i>{" "}
            слов
          </h2>

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

              <div className="search-controls">
                <label className="lang-label">
                  Язык поиска:
                  <select
                    value={searchLang}
                    onChange={(e) => setSearchLang(e.target.value)}
                    className="custom-select"
                  >
                    {langOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={includeAdds}
                    onChange={() => setIncludeAdds((prev) => !prev)}
                  />
                  <span className="slider" />
                  <span className="switch-label">
                    Искать в доп. значениях
                  </span>
                </label>
              </div>

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