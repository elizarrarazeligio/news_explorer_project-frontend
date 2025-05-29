import Cookie from "js-cookie";

// ===== Crea cookie para almacenar token enviado desde API =========
export const setToken = (token: string): string | undefined =>
  Cookie.set(process.env.NEXT_PUBLIC_TOKEN_KEY as string, token, {
    secure: true,
    expires: 1,
    sameSite: "Strict",
  });

// ===== Obtiene cookie con token enviado desde API =================
export const getToken = (): string | undefined =>
  Cookie.get(process.env.NEXT_PUBLIC_TOKEN_KEY as string);

// ===== Borra cookie con token enviado desde API ===================
export const removeToken = (): void =>
  Cookie.remove(process.env.NEXT_PUBLIC_TOKEN_KEY as string);
