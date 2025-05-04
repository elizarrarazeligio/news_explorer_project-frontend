"use client";

import NewsHeader from "@/components/NewsHeader";
import News from "@/components/News";
import NotFound from "@/components/NotFound";
import { useEffect, useState } from "react";

export default function SavedNews() {
  const [savedNews, setSavedNews] = useState([] as any[]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setSavedNews([
      {
        id: 1,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        publishedAt: "19 de febrero de 2019",
        urlToImage: "/news_01.png",
        source: { name: "national geographic" },
      },
      {
        id: 2,
        title: "Todo el mundo necesita un lugar de reflexión en la naturaleza",
        description:
          'Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mi se me ha quedado grabada. Este consejo, que...',
        publishedAt: "4 de noviembre de 2020",
        urlToImage: "/news_02.jpg",
        source: { name: "treehugger" },
      },
      {
        id: 3,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        publishedAt: "19 de febrero de 2019",
        urlToImage: "/news_01.png",
        source: { name: "national geographic" },
      },
      {
        id: 4,
        title: "La naturaleza te hace mejor",
        description:
          "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
        publishedAt: "19 de febrero de 2019",
        urlToImage: "/news_01.png",
        source: { name: "national geographic" },
      },
    ]);
  }, []);

  return (
    <>
      <NewsHeader newsCount={savedNews.length} />
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
