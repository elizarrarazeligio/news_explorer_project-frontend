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
  menu?: boolean;
}

export default function Menu({ openPopup, menu }: MenuProps) {
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

      <button
        className="navigation__button flex py-[12px] px-[20px] rounded-full hover:bg-current transition-all duration-300 font-medium"
        onClick={() =>
          userContext?.logged ? handleLogout() : openPopup(loginPopup)
        }
      >
        <span className="navigation__button-text flex gap-[10px]">
          {userContext?.logged ? (
            <>
              {getFirstName(userContext?.currentUser.name)}
              <Image
                src="/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className={`${(pathname == "/" || menu) && "invert"}`}
              />
            </>
          ) : (
            "Iniciar sesión"
          )}
        </span>
      </button>
    </>
  );
}
