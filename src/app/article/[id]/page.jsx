"use client";
import "./article.scss"
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Slider from "@/app/components/Slider/Slider";

const STRAPI_URL = 'https://diligent-triumph-6756087f3a.strapiapp.com/api/articles';

export default function Article() {
  const router = useRouter();
  const params = useParams(); // Извлекаем параметры маршрута
  const [id, setId] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Устанавливаем id из параметров маршрута
  useEffect(() => {
    if (params && params.id) {
      const articleId = decodeURIComponent(params.id);
      console.log('Extracted ID from params:', articleId); // Debug: Логируем извлеченный id
      setId(articleId);
    } else {
      console.log('No id found in params');
      setError('Invalid article ID');
      setLoading(false);
    }
  }, [params]);

  // Загружаем статью по uid
  useEffect(() => {
    if (!id) {
      console.log('No id set, skipping fetch');
      return;
    }

    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching article with uid:', id); // Debug log
        const encodedId = encodeURIComponent(id); // Убедимся, что id закодирован
        const response = await fetch(`${STRAPI_URL}?filters[documentId][$eq]=${encodedId}&populate=*`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        console.log('API Response:', result); // Debug log
        if (!result.data || result.data.length === 0) {
          throw new Error('No article found with the given uid');
        }
        setArticle(result.data[0]); // Берем первую запись (uid должен быть уникальным)
      } catch (error) {
        console.error('Fetch Error:', error.message);
        setError(`Не удалось загрузить статью: ${error.message}`);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="p-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!article) {
    return <div className="p-4">Статья не найдена</div>;
  }

  const contentToRender = article.bodyText || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div style={{"display": "flex"}}>
        <Sidebar />
        <div className="article">
          <h2 className="text-2xl font-bold mb-4">{article.title || 'Без названия'}</h2>
          {contentToRender.length > 0 ? (
            <BlocksRenderer content={contentToRender} />
          ) : (
            <p>Контент отсутствует</p>
          )}
          
          <Slider slides={article.images}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}