import Api from "./Api";
import { LoginResponse, UserResponse } from "@/types/user";
import { ApiResponse } from "@/types/api";

class AuthApi extends Api {
  constructor({ baseUrl, headers }: { baseUrl: string; headers: {} }) {
    super({ baseUrl, headers });
  }

  login(email: string, password: string): Promise<LoginResponse> {
    return super._makeRequest("/signin", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  register(
    name: string,
    email: string,
    password: string
  ): Promise<ApiResponse> {
    return super._makeRequest("/signup", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }

  getUserInfo(token: string | undefined): Promise<UserResponse> {
    return super._makeRequest("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const authApi = new AuthApi({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
