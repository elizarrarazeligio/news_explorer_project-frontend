import "@/styles/news.css";
import { robotoSlab } from "@/vendor/fonts";
import Navigation from "./Navigation";
import { useContext } from "react";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";

export default function NewsHeader({ newsCount }: { newsCount: number }) {
  const userContext = useContext(CurrentUserContext);

  return (
    <header className="news flex flex-col pt-[80px] px-[104px]">
      <Navigation />
      <div className="news__main flex flex-col w-[530px]">
        <span className="news__subtitle">Artículos guardados</span>
        <h2 className={`news__title ${robotoSlab.className}`}>
          {userContext?.currentUser.name?.split(" ")[0]},{" "}
          {newsCount
            ? `tienes ${newsCount} artículo(s) guardado(s).`
            : "no tienes ningún artículo guardado."}
        </h2>
        <p className="news__text">
          Por palabras clave:{" "}
          <span className="font-bold">Naturaleza, Yellowstone, y 2 más</span>
        </p>
      </div>
    </header>
  );
}
