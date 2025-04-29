import Image from "next/image";
import { robotoSlab } from "@/vendor/fonts";

interface NewsItemProps {
  title: string;
  description: string;
  date: string;
  image: string;
  reporter: string;
}

export default function NewsItem(props: NewsItemProps) {
  const { title, description, date, image, reporter } = props;

  return (
    <div className="news-item flex flex-col rounded-[15px] h-[576px] w-[400px]">
      <Image
        src={image}
        alt={`Imagen de "${title}"`}
        width={400}
        height={272}
        className="news-item__image rounded-[15px]"
      />
      <div className="news-item__info grid p-[24px] h-[304px]">
        <span className="news-item__date">{date}</span>
        <h4 className={`news-item__title ${robotoSlab.className}`}>{title}</h4>
        <p className="news-item__description">{description}</p>
        <span
          className={`news-item__reporter ${robotoSlab.className} font-bold`}
        >
          {reporter.toLocaleUpperCase()}
        </span>
      </div>
    </div>
  );
}
