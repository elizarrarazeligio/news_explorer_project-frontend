"use client";

import "@/styles/news.css";
import Header from "@/components/Header";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import About from "@/components/About";
import { useState } from "react";

export default function Main() {
  const [news, setNews] = useState(["Hola"]);

  return (
    <>
      <Header />
      <main className="flex flex-col">
        {news.length > 0 ? (
          <News title="Resultados de la búsqueda">
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
        <About />
      </main>
    </>
  );
}
