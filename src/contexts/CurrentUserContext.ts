import { createContext } from "react";

type User = {
  _id: number;
  name: string;
  email: string;
};

export type CurrentUserContextType = {
  currentUser: User | {};
  setCurrentUser: (currentUser: User | {}) => void;
};

export const CurrentUserContext = createContext<CurrentUserContextType | null>(
  null
);
