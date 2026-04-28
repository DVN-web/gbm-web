"use client";

import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Pagination } from "@mui/material";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const articlesPerPage = 4;

  useEffect(() => {
    const controller = new AbortController();

    const fetchArticles = async () => {
      try {
        setLoading(true);

        const url = `/api/articles?page=${currentPage}&pageSize=${articlesPerPage}`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Ошибка загрузки");
        }

        const result = await response.json();

        setArticles(result.data || []);
        setTotalPages(result.meta?.pagination?.pageCount || 1);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Ошибка:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "40px" }}>Загрузка...</div>;
  }

  if (!articles || articles.length === 0) {
    return <div style={{ textAlign: "center", padding: "40px" }}>Статьи не найдены.</div>;
  }

  return (
    <div className="ArticleList">
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <h1>Новости</h1>
      </div>

      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          color="primary"
        />
      </div>
    </div>
  );
};

export default ArticleList;