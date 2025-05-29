import { ApiResponse } from "./api";

export interface IArticle {
  _id: string;
  keyword?: string;
  title: string;
  description: string;
  publishedAt: string;
  source: string | { name: string };
  url: string;
  urlToImage: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ArticlesResponse extends ApiResponse {
  data: IArticle[];
}

export interface ArticleResponse extends ApiResponse {
  data: IArticle;
}
