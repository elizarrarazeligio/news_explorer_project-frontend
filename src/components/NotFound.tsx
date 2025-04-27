import "@/styles/notfound.css";
import Image from "next/image";
import { ReactNode } from "react";

interface NotFoundProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function NotFound(props: NotFoundProps) {
  const { title, description, children } = props;
  return (
    <div className="not-found flex flex-col text-center h-full w-full">
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
      {children}
    </div>
  );
}
