import { createContext } from "react";
import { IUser } from "@/types/user";

export interface CurrentUserContextType {
  currentUser: IUser;
  setCurrentUser: (currentUser: IUser) => void;
  logged: boolean;
  setLogged: (logged: boolean) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);
