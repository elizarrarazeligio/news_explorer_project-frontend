"use client";

import NewsHeader from "@/components/NewsHeader";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import { useEffect, useState } from "react";
import { savedNewsApi } from "@/utils/SavedNewsApi";

export default function SavedNews() {
  const [savedNews, setSavedNews] = useState([] as any[]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    savedNewsApi
      .getArticles()
      .then((res) => setSavedNews(res.data))
      .catch((err) => console.log(err));
  }, []);

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
