import { createContext } from "react";

interface User {
  _id?: number;
  name?: string;
  email?: string;
}

export interface CurrentUserContextType {
  currentUser: User;
  setCurrentUser: (currentUser: User) => void;
  logged: boolean;
  setLogged: (logged: boolean) => void;
}

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);
