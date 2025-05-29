"use client";

import { useState, useEffect, ReactNode } from "react";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "./CurrentUserContext";
import { getToken } from "@/utils/token";
import { authApi } from "@/utils/AuthApi";

export default function CurrentUserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUser, setCurrentUser] =
    useState<CurrentUserContextType["currentUser"]>(null);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) return;

    authApi
      .getUserInfo(jwt)
      .then(({ data }) => {
        setCurrentUser(data);
        setLogged(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, logged, setLogged }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
