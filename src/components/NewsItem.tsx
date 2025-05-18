import Image from "next/image";
import { robotoSlab } from "@/vendor/fonts";
import Link from "next/link";

interface NewsItemProps {
  keyword?: string;
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  source: string | { name: string };
  url?: string;
}

export default function NewsItem(props: NewsItemProps) {
  const { keyword, title, description, publishedAt, urlToImage, source, url } =
    props;
  const date = new Date(Date.parse(publishedAt));

  return (
    <Link href={`${url || null}`} target="_blank">
      <div className="news-item flex flex-col rounded-[15px] h-[576px] w-[400px]">
        <div className="news-item__image">
          <Image
            src={urlToImage ?? "/not-found_icon.png"}
            alt={`Imagen de "${title}"`}
            fill={true}
            className="object-cover"
          />
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
