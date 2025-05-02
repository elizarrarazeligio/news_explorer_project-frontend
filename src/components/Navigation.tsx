import "@/styles/nav.css";
import ModalWithForm from "./ModalWithForm";
import Menu from "./Menu";
import { robotoSlab } from "@/vendor/fonts";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false as boolean);
  const [popup, setPopup] = useState<{
    title: string;
    children: ReactNode;
  } | null>(null);

  useEffect(() => {
    document.addEventListener("keydown", () => setMenu(false));
  }, []);

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

  return (
    <>
      <div
        className={`navigation flex w-full h-[80px] px-[104px] absolute top-0 border-b-1 border-current/20 ${
          menu && "border-white/20"
        }`}
      >
        <span
          className={`navigation__title ${robotoSlab.className} font-bold ${
            menu && "text-white"
          }`}
          onClick={() => (window.location.href = "/")}
        >
          News Explorer
        </span>
        <nav className="navigation__menu hidden md:flex font-medium h-full">
          <Menu openPopup={openPopup} />
        </nav>

        <Image
          src={`${menu ? "/close.svg" : "/menu.svg"}`}
          alt="Menu/Close icon"
          width={24}
          height={24}
          className={`md:hidden ${pathname != "/" && !menu && "invert"}`}
          onClick={() => setMenu(!menu)}
        />
      </div>

      {menu && (
        <nav className="navigation__menu-mobile flex flex-col w-full md:hidden font-medium">
          <Menu openPopup={openPopup} />
        </nav>
      )}

      {popup && (
        <ModalWithForm
          title={popup.title}
          openPopup={openPopup}
          closePopup={closePopup}
          handleEscClose={handleEscClose}
        >
          {popup.children}
        </ModalWithForm>
      )}
    </>
  );
}
