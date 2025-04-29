"use client";

import "@/styles/news.css";
import Header from "@/components/Header";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import About from "@/components/About";
import { useEffect, useState } from "react";

export default function Main() {
  const [news, setNews] = useState([] as any[]);
  const [search, setSearch] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setNews([
      {
        id: 1,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        date: "19 de febrero de 2019",
        image: "/news_01.png",
        reporter: "national geographic",
      },
      {
        id: 2,
        title: "Todo el mundo necesita un lugar de reflexión en la naturaleza",
        description:
          'Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...',
        date: "4 de noviembre de 2020",
        image: "/news_02.jpg",
        reporter: "treehugger",
      },
      {
        id: 3,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        date: "19 de febrero de 2019",
        image: "/news_01.png",
        reporter: "national geographic",
      },
      {
        id: 4,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        date: "19 de febrero de 2019",
        image: "/news_01.png",
        reporter: "national geographic",
      },
    ]);
    setLoader(false);
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} />
      <main className="flex flex-col">
        {search && (
          <>
            {news.length > 0 ? (
              <News
                title="Resultados de la búsqueda"
                news={news}
                loader={loader}
              >
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
        )}
        <About />
      </main>
    </>
  );
}
