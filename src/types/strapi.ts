// src/types/strapi.ts

/**
 * Интерфейс для атрибутов статьи, определенных в Strapi.
 * @property {string} title - Заголовок статьи.
 * @property {string} content - Содержимое статьи.
 * @property {string} publishedAt - Дата публикации.
 * @property {any} image - Опциональное поле для изображения. Тип `any` используется для простоты, но вы можете типизировать его более детально.
 */
export interface ArticleAttributes {
  title: string;
  content: string;
  publishedAt: string;
  image: string;
}

/**
 * Интерфейс для отдельной статьи, возвращаемой Strapi API.
 * @property {number} id - Уникальный идентификатор статьи.
 * @property {ArticleAttributes} attributes - Объект, содержащий атрибуты статьи.
 */
export interface Article {
  id: number;
  attributes: ArticleAttributes;
}

/**
 * Интерфейс для корневого объекта ответа Strapi API.
 * @property {Article[]} data - Массив статей.
 */
export interface StrapiResponse {
  data: Article[];
}