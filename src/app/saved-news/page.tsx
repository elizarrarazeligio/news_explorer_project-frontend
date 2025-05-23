"use client";

import NewsHeader from "@/components/NewsHeader";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import { useContext, useEffect } from "react";
import { savedNewsApi } from "@/utils/SavedNewsApi";
import { SavedArticlesContext } from "@/contexts/SavedArticlesContext";

export default function SavedNews() {
  const { savedNews, setSavedNews, newsLength } =
    useContext(SavedArticlesContext);

  useEffect(() => {
    savedNewsApi
      .getArticles()
      .then((res) => setSavedNews(res.data))
      .catch((err) => console.log(err));
  }, [newsLength]);

  return (
    <>
      <NewsHeader news={savedNews} />
      <main className="flex flex-col">
        {savedNews.length > 0 ? (
          <News news={savedNews} />
        ) : (
          <div className="h-[374px]">
            <NotFound
              title="Sin artículos"
              description="No tienes artículos guardados por el momento."
            />
          </div>
        )}
      </main>
    </>
  );
}
