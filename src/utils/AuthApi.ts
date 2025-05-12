import Api from "./Api";

class AuthApi extends Api {
  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    super({ baseUrl, headers });
  }

  login(email: string, password: string): Promise<Object> {
    return super._makeRequest("/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  register(name: string, email: string, password: string): Promise<Object> {
    return super._makeRequest("/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }

  getUserInfo(token: string): Promise<Object> {
    return super._makeRequest("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const authApi = new AuthApi({
  baseUrl: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
