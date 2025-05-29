import "@/styles/news.css";
import { robotoSlab } from "@/vendor/fonts";
import Navigation from "./Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";

export default function NewsHeader({ news }: { news: any[] }) {
  const { currentUser } = useContext(CurrentUserContext);
  const keywords = [...new Set(news.map((article) => article.keyword))];

  const keywordsFormat = (keywords: string[]) => {
    const count = keywords.length;

    if (count === 0) return "No se encontraron palabras clave.";
    if (count === 1)
      return (
        <>
          Por palabras clave: <span className="font-bold">{keywords[0]}</span>
        </>
      );
    if (count === 2)
      return (
        <>
          Por palabras clave:{" "}
          <span className="font-bold">
            {keywords[0]} y {keywords[1]}
          </span>
        </>
      );

    const [first, second, ...rest] = keywords;
    return (
      <>
        Por palabras clave:{" "}
        <span className="font-bold">
          {first}, {second} y {rest.length} más.
        </span>
      </>
    );
  };

  return (
    <header className="news flex flex-col pt-[80px] px-[104px]">
      <Navigation />
      <div className="news__main flex flex-col w-[530px]">
        <span className="news__subtitle">Artículos guardados</span>
        <h2 className={`news__title ${robotoSlab.className}`}>
          {currentUser?.name?.split(" ")[0]},{" "}
          {news.length
            ? `tienes ${news.length} artículo(s) guardado(s).`
            : "no tienes ningún artículo guardado."}
        </h2>
        <p className="news__text">{keywordsFormat(keywords)}</p>
      </div>
    </header>
  );
}
