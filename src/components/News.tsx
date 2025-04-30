"use client";

import "@/styles/news.css";
import { robotoSlab } from "@/vendor/fonts";
import { ReactNode } from "react";
import NewsItem from "./NewsItem";
import Preloader from "@/components/Preloader";

interface NewsProps {
  title?: string;
  news?: any[];
  children?: ReactNode;
  loader: boolean;
}

export default function News(props: NewsProps) {
  const { title, children, news, loader } = props;

  return (
    <>
      {loader ? (
        <Preloader />
      ) : (
        <section className="news-cards flex flex-col px-[104px] py-[65px]">
          <h3
            className={`news-cards__title ${
              robotoSlab.className
            } mt-[15px] mb-[65px] ${title ? "" : "hidden"}`}
          >
            {title}
          </h3>
          <div className="news-cards__container grid">
            {/* Se pasan los props de cada item con el operador spread (...) */}
            {news && news.map((item) => <NewsItem key={item.id} {...item} />)}
          </div>

          {children}
        </section>
      )}
    </>
  );
}
