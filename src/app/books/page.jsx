// app/books/page.jsx
import Link from 'next/link';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Book3D from '@/app/components/Book3D/Book3D'
import './books.scss';

// Серверный поиск + пагинация через Strapi
async function fetchBooks(search = '', page = 1, limit = 9) {
  const baseUrl = 'https://diligent-triumph-6756087f3a.strapiapp.com';
  let url = `${baseUrl}/api/books?populate=*`;
  url += `&pagination[page]=${page}&pagination[pageSize]=${limit}`;
  
  if (search) {
    url += `&filters[title][$containsi]=${encodeURIComponent(search)}`;
  }

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Ошибка ${res.status}`);

  const json = await res.json();
  return {
    books: json.data || [],
    total: json.meta?.pagination?.total || 0,
  };
}

export default async function BooksPage({ searchParams }) {
  const params = await searchParams;
  const search = params?.search || '';
  const page = Math.max(1, parseInt(params?.page || '1', 10));
  const limit = 9;

  let books = [];
  let total = 0;
  let error = null;

  try {
    const data = await fetchBooks(search, page, limit);
    books = data.books;
    total = data.total;
  } catch (err) {
    error = err.message;
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Книги</h1>

          {/* Поиск */}
          <form className="search-form mb-8" method="GET" action="/books">
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Поиск по названию..."
              className="px-4 py-3 border rounded-l-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
            >
              Найти
            </button>
          </form>
          {/* Ошибка */}
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded mb-6">
              <p className="font-bold">Ошибка:</p>
              <p>{error}</p>
            </div>
          )}

          {/* Книги */}
          {books.length > 0 ? (
            <div className="book-grid">
              {books.map((book) => {
                const a = book;
                const img = a.image.url;
                const imageUrl = img
                  ? `${img}`
                  : '/placeholder.jpg';

                const downloadLink = a.link?.[0]?.children?.[1]?.url || '#';

                return (
                  <div key={book.id} className="book-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                    <Book3D/>
                    
                      <h2 className="text-xl font-bold text-gray-800 mb-3">
                        {a.title || 'Без названия'}
                      </h2>
                      <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition mt-4"
                      >
                        Скачать
                      </a>
                    
                  </div>
                );
              })}
            </div>
          ) : (
            !error && <p className="text-center text-gray-500 text-lg">Книги не найдены.</p>
          )}

          {/* Пагинация */}
          {totalPages > 1 && (
            <div className="pagination mt-10 flex justify-center items-center gap-4 text-lg">
              {page > 1 && (
                <Link
                  href={`/books?search=${encodeURIComponent(search)}&page=${page - 1}`}
                  className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  ← Назад
                </Link>
              )}

              <span className="font-medium">
                {page} / {totalPages}
              </span>

              {page < totalPages && (
                <Link
                  href={`/books?search=${encodeURIComponent(search)}&page=${page + 1}`}
                  className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Вперед →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const dynamic = 'force-dynamic';