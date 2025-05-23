import Image from "next/image";
import { robotoSlab } from "@/vendor/fonts";
import Link from "next/link";
import { MouseEvent, useContext } from "react";
import { savedNewsApi } from "@/utils/SavedNewsApi";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { IArticle } from "@/types/article";
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

  const userContext = useContext(CurrentUserContext);
  const { setNewsLength, savedNews, setSavedNews } =
    useContext(SavedArticlesContext);
  const pathname = usePathname();
  const date = new Date(Date.parse(publishedAt));

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
          setSavedNews(news);
          setNewsLength(news.length);
          toast.success(res.message);
        })
        .catch((err) => toast.error(err.message));
    } else {
      if (!userContext?.logged) return;
      savedNewsApi
        .saveArticle(props)
        .then((res) => toast.success(res.message))
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
              src={_id ? "/trash.svg" : "/bookmark.svg"}
              alt=""
              width={20}
              height={20}
              className="news-item__button-icon"
            />
            {(!userContext?.logged || _id) && (
              <span className="news-item__tooltip font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {!userContext?.logged
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
