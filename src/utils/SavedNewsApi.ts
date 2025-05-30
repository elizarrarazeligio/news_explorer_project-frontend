import Api from "./Api";
import { getToken } from "./token";
import { IArticle, ArticleResponse, ArticlesResponse } from "@/types/article";

class SavedNewsApi extends Api {
  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    super({ baseUrl, headers });
  }

  getArticles(): Promise<ArticlesResponse> {
    return super._makeRequest("/articles");
  }

  saveArticle(data: IArticle): Promise<ArticleResponse> {
    return super._makeRequest("/articles", {
      method: "POST",
      body: JSON.stringify({
        keyword: data.keyword,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        source:
          typeof data.source === "string" ? data.source : data.source.name,
        url: data.url,
        urlToImage: data.urlToImage,
      }),
    });
  }

  removeArticle(articleId: string): Promise<ArticleResponse> {
    return super._makeRequest(`/articles/${articleId}`, {
      method: "DELETE",
      body: JSON.stringify({
        _id: articleId,
      }),
    });
  }
}

export const savedNewsApi = new SavedNewsApi({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});
