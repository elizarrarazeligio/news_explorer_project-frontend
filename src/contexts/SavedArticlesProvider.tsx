"use client";

import { useState, useEffect, ReactNode } from "react";
import {
  SavedArticlesContext,
  SavedArticlesContextType,
} from "./SavedArticlesContext";
import { savedNewsApi } from "@/utils/SavedNewsApi";

export default function SavedArticlesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [savedNews, setSavedNews] = useState<
    SavedArticlesContextType["savedNews"]
  >([]);
  const [newsLength, setNewsLength] = useState(savedNews.length);

  useEffect(() => {
    savedNewsApi
      .getArticles()
      .then((res) => setSavedNews(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SavedArticlesContext.Provider
      value={{ savedNews, setSavedNews, newsLength, setNewsLength }}
    >
      {children}
    </SavedArticlesContext.Provider>
  );
}
