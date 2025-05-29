import Image from "next/image";
import { robotoSlab } from "@/vendor/fonts";
import Link from "next/link";
import { MouseEvent, useContext, useEffect } from "react";
import { savedNewsApi } from "@/utils/SavedNewsApi";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { IArticle, ArticleResponse } from "@/types/article";
import { SavedArticlesContext } from "@/contexts/SavedArticlesContext";

export default function NewsItem(props: IArticle) {
  const {
    _id,
    keyword,
    title,
    description,
    publishedAt,
    urlToImage,
    source,
    url,
  } = props;

  const { logged } = useContext(CurrentUserContext);
  const { setNewsLength, savedNews, setSavedNews } =
    useContext(SavedArticlesContext);
  const pathname = usePathname();
  const date = new Date(Date.parse(publishedAt));

  const handleSuccessMessage = (news: IArticle[], res: ArticleResponse) => {
    setSavedNews(news);
    setNewsLength(news.length);
    toast.success(res.message);
  };

  const getImageIcon = (article: IArticle) => {
    if (article._id) return "/trash.svg";
    const saved = savedNews.find((news) => news.url === article.url);
    return !article._id && !saved ? "/bookmark.svg" : "/bookmark_saved.svg";
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (_id) {
      savedNewsApi
        .removeArticle(_id)
        .then((res) => {
          const news = savedNews.filter(
            (article) => article._id != res.data._id
          );
          handleSuccessMessage(news, res);
        })
        .catch((err) => toast.error(err.message));
    } else {
      if (!logged) return;
      savedNewsApi
        .saveArticle(props)
        .then((res) => {
          const news = [res.data, ...savedNews];
          handleSuccessMessage(news, res);
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <Link href={`${url || null}`} target="_blank">
      <div className="news-item flex flex-col rounded-[15px] h-[576px] w-[400px]">
        <div className="news-item__image">
          {pathname === "/saved-news" && (
            <div className="news-item__keyword font-bold">{keyword}</div>
          )}
          <Image
            src={urlToImage ?? "/not-found_icon.png"}
            alt={`Imagen de "${title}"`}
            fill={true}
            className="object-cover"
          />
          <button
            className="news-item__button flex relative group"
            onClick={handleClick}
          >
            <Image
              src={getImageIcon(props)}
              alt="Image icon"
              width={20}
              height={20}
              className="news-item__button-icon"
            />
            {(!logged || _id) && (
              <span className="news-item__tooltip font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {!logged
                  ? "Inicia sesión para guardar artículos"
                  : "Eliminar noticia"}
              </span>
            )}
          </button>
        </div>
        <div className="news-item__info grid p-[24px] h-[304px]">
          <span className="news-item__date">{date.toDateString()}</span>
          <h4 className={`news-item__title ${robotoSlab.className}`}>
            {title}
          </h4>
          <p className="news-item__description">{description}</p>
          <span
            className={`news-item__reporter ${robotoSlab.className} font-bold`}
          >
            {(typeof source == "string"
              ? source
              : source.name
            ).toLocaleUpperCase()}
          </span>
        </div>
      </div>
    </Link>
  );
}
