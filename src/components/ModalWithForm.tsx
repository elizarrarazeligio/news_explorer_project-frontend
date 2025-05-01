import "@/styles/modal.css";
import { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface ModalWithFormProps {
  title: string;
  children: ReactNode;
  closePopup: MouseEventHandler;
  handleEscClose: (e: KeyboardEvent) => void;
}

export default function ModalWithForm(props: ModalWithFormProps) {
  const { title, children, closePopup, handleEscClose } = props;
  document.addEventListener("keydown", handleEscClose);

  return (
    <section className="modal flex">
      <div className="modal__container flex flex-col px-[36px] py-[32px] rounded-[16px]">
        <Image
          src="/close.svg"
          alt="Close icon"
          width={40}
          height={40}
          className="modal__close"
          onClick={closePopup}
        />
        <h3 className="modal__title font-black">{title}</h3>
        {children}
      </div>
    </section>
  );
}
