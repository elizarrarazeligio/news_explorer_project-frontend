"use client";

import "@/styles/nav.css";
import NavItem from "./NavItem";
import { robotoSlab } from "@/vendor/fonts";

export default function Navigation() {
  return (
    <div className="navigation flex w-full h-[80px] px-[104px] absolute top-0 border-b-1 border-current/20">
      <span className={`navigation__title ${robotoSlab.className}`}>
        News Explorer
      </span>
      <nav className="navigation__menu hidden md:flex font-medium h-full">
        <ul className="navigation__list flex h-full">
          <NavItem title="Inicio" link="/" />
          <NavItem title="Artículos guardados" link="/saved-news" />
        </ul>
        <button className="navigation__button w-[176px] p-[12px] rounded-full">
          Iniciar sesión
        </button>
      </nav>
    </div>
  );
}
