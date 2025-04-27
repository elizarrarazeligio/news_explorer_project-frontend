"use client";

import NewsHeader from "@/components/NewsHeader";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import { useState } from "react";

export default function SavedNews() {
  const [savedNews, setSavedNews] = useState([]);

  return (
    <>
      <NewsHeader />
      <main className="flex flex-col">
        {savedNews.length > 0 ? (
          <News />
        ) : (
          <div className="h-[374px]">
            <NotFound
              title="Ningún artículo guardado"
              description="No tienes artículos guardados por el momento."
            />
          </div>
        )}
      </main>
    </>
  );
}
