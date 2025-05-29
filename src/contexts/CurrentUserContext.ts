import { createContext } from "react";
import { IUser } from "@/types/user";

export interface CurrentUserContextType {
  currentUser: IUser | null;
  setCurrentUser: (currentUser: IUser) => void;
  logged: boolean;
  setLogged: (logged: boolean) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  logged: false,
  setLogged: () => {},
});
