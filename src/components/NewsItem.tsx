import Image from "next/image";
import { robotoSlab } from "@/vendor/fonts";
import Link from "next/link";
import { MouseEvent } from "react";
import { savedNewsApi } from "@/utils/SavedNewsApi";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

interface NewsItemProps {
  _id?: string;
  keyword?: string;
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  source: string | { name: string };
  url: string;
}

export default function NewsItem(props: NewsItemProps) {
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

  const pathname = usePathname();
  const date = new Date(Date.parse(publishedAt));

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (_id) {
      savedNewsApi
        .removeArticle(_id)
        .then((res) => toast.success(res.message))
        .catch((err) => toast.error(err.message));
    } else {
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
          <button className="news-item__button flex" onClick={handleClick}>
            <Image
              src={_id ? "/trash.svg" : "/bookmark.svg"}
              alt=""
              width={20}
              height={20}
              className="news-item__button-icon"
            />
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
