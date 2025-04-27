import "@/styles/news.css";
import { robotoSlab } from "@/vendor/fonts";
import Navigation from "./Navigation";

export default function NewsHeader() {
  return (
    <header className="news flex flex-col h-[374px] pt-[80px] px-[104px]">
      <Navigation />
      <div className="news__main flex flex-col w-[530px]">
        <span className="news__subtitle">Artículos guardados</span>
        <h2 className={`news__title ${robotoSlab.className}`}>
          Eligio, tienes 5 artículos guardados
        </h2>
        <p className="news__text">
          Por palabras clave:{" "}
          <span className="font-bold">Naturaleza, Yellowstone, y 2 más</span>
        </p>
      </div>
    </header>
  );
}
