"use client";

import "@/styles/nav.css";
import NavItem from "./NavItem";
import ModalWithForm from "./ModalWithForm";
import { robotoSlab } from "@/vendor/fonts";
import { FormEvent, KeyboardEventHandler, ReactNode, useState } from "react";
import Login from "./Login";

export default function Navigation() {
  const [popup, setPopup] = useState<{
    title: string;
    children: ReactNode;
  } | null>(null);

  const openPopup = (popup: { title: string; children: ReactNode }) => {
    setPopup(popup);
  };

  const closePopup = () => {
    setPopup(null);
    document.removeEventListener("keydown", handleEscClose);
  };

  const handleEscClose = (e: KeyboardEvent) => {
    if (e.key === "Escape") closePopup();
  };

  const loginPopup = {
    title: "Iniciar sesión",
    children: <Login />,
  };

  return (
    <>
      <div className="navigation flex w-full h-[80px] px-[104px] absolute top-0 border-b-1 border-current/20">
        <span
          className={`navigation__title ${robotoSlab.className} font-bold`}
          onClick={() => (window.location.href = "/")}
        >
          News Explorer
        </span>
        <nav className="navigation__menu hidden md:flex font-medium h-full">
          <ul className="navigation__list flex h-full">
            <NavItem title="Inicio" link="/" />
            <NavItem title="Artículos guardados" link="/saved-news" />
          </ul>
          <button
            className="navigation__button w-[176px] p-[12px] rounded-full hover:bg-current transition-all duration-300 font-medium"
            onClick={() => openPopup(loginPopup)}
          >
            <span className="navigation__button-text">Iniciar sesión</span>
          </button>
        </nav>
      </div>
      {popup && (
        <ModalWithForm
          title={popup.title}
          closePopup={closePopup}
          handleEscClose={handleEscClose}
        >
          {popup.children}
        </ModalWithForm>
      )}
    </>
  );
}
