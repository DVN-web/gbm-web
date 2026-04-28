export interface Media {
  id: number;
  attributes: {
    url: string;
    name: string;
    alternativeText?: string;
    caption?: string;
  };
}

export interface Article {
  id: number;
  attributes: {
    uid: string;
    title: string;
    date: string; // ISO-строка
    preImage?: {
      data: Media | null;
    };
    bodyText: string;
    images?: {
      data: Media[];
    };
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
