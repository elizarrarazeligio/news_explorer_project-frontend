import "@/styles/nav.css";
import { ReactNode, useContext } from "react";
import NavItem from "./NavItem";
import Login from "./Login";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { removeToken } from "@/utils/token";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface MenuProps {
  openPopup: (popup: { title: string; children: ReactNode }) => void;
}

export default function Menu({ openPopup }: MenuProps) {
  const userContext = useContext(CurrentUserContext);
  const pathname = usePathname();

  const loginPopup = {
    title: "Iniciar sesión",
    children: <Login />,
  };

  const handleLogout = () => {
    removeToken();
    window.location.reload();
  };

  const getFirstName = (username: string | undefined) => {
    if (!username) return;
    return username.split(" ")[0];
  };

  return (
    <>
      <ul className="navigation__list flex h-full">
        <NavItem title="Inicio" link="/" />
        {userContext?.logged && (
          <NavItem title="Artículos guardados" link="/saved-news" />
        )}
      </ul>

      {userContext?.logged ? (
        <button
          className="navigation__button py-[12px] px-[20px] rounded-full hover:bg-current transition-all duration-300 font-medium"
          onClick={handleLogout}
        >
          <span className="navigation__button-text flex gap-[10px]">
            {getFirstName(userContext?.currentUser.name)}
            <Image
              src="/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className={`${pathname == "/" && "invert"}`}
            />
          </span>
        </button>
      ) : (
        <button
          className="navigation__button w-[176px] p-[12px] rounded-full hover:bg-current transition-all duration-300 font-medium"
          onClick={() => openPopup(loginPopup)}
        >
          <span className="navigation__button-text">Iniciar sesión</span>
        </button>
      )}
    </>
  );
}
