import "@/styles/notfound.css";
import Image from "next/image";

interface NotFoundProps {
  title: string;
  description: string;
}

export default function NotFound(props: NotFoundProps) {
  const { title, description } = props;
  return (
    <div className="not-found flex flex-col text-center h-[374px]">
      <Image
        src="/not-found_icon.png"
        width={82.5}
        height={82.5}
        alt="Not found icon"
        className="not-found__icon mb-[31.5px]"
      />
      <h2 className="not-found__title mb-[16px] font-normal">{title}</h2>
      <p className="not-found__description font-normal w-[356px]">
        {description}
      </p>
    </div>
  );
}
