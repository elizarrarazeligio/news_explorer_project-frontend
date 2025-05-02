import "@/styles/nav.css";
import { ReactNode } from "react";
import NavItem from "./NavItem";
import Login from "./Login";

interface MenuProps {
  openPopup: (popup: { title: string; children: ReactNode }) => void;
}

export default function Menu({ openPopup }: MenuProps) {
  const loginPopup = {
    title: "Iniciar sesión",
    children: <Login />,
  };

  return (
    <>
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
    </>
  );
}
