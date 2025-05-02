"use client";

import "@/styles/news.css";
import Header from "@/components/Header";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import About from "@/components/About";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import { newsApi } from "@/utils/NewsApi";

export default function Main() {
  const [news, setNews] = useState([] as any[]);
  const [search, setSearch] = useState(false);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoader(true);

    newsApi
      .searchNews(query)
      .then((res: any) => {
        setNews(res.articles);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
        setSearch(false);
      });
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} query={query} setQuery={setQuery} />
      <main className="flex flex-col">
        {(search || news.length) &&
          (loader ? (
            <div className="w-full h-[282px]">
              <Preloader />
            </div>
          ) : (
            <>
              {news.length > 0 ? (
                <News title="Resultados de la búsqueda" news={news}>
                  <button className="news-cards__button rounded-full w-[288px] h-[64px] mt-[65px] mb-[15px] font-medium">
                    Ver más
                  </button>
                </News>
              ) : (
                <div className="h-[374px]">
                  <NotFound
                    title="No se encontró nada"
                    description="Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda."
                  />
                </div>
              )}
            </>
          ))}

        <About />
      </main>
    </>
  );
}
