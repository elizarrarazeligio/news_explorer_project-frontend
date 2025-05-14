import "@/styles/modal.css";
import { MouseEventHandler, ReactNode } from "react";
import { inter } from "@/vendor/fonts";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";

interface ModalWithFormProps {
  title: string;
  children: ReactNode;
  openPopup: (popup: { title: string; children: ReactNode }) => void;
  closePopup: MouseEventHandler;
  handleEscClose: (e: KeyboardEvent) => void;
}

export default function ModalWithForm(props: ModalWithFormProps) {
  const { title, children, openPopup, closePopup, handleEscClose } = props;
  document.addEventListener("keydown", handleEscClose);

  const loginPopup = {
    title: "Iniciar sesión",
    children: <Login />,
  };

  const registerPopup = {
    title: "Inscribirse",
    children: <Register openPopup={openPopup} loginPopup={loginPopup} />,
  };

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
        <p className={`modal__text ${inter.className}`}>
          {title === "Iniciar sesión" ? (
            <>
              ¿No tienes cuenta?{" "}
              <span
                className="modal__link"
                onClick={() => openPopup(registerPopup)}
              >
                Regístrate
              </span>
            </>
          ) : (
            <>
              ¿Ya tienes cuenta?{" "}
              <span
                className="modal__link"
                onClick={() => openPopup(loginPopup)}
              >
                Inicia sesión
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
