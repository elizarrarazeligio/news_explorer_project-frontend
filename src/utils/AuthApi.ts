import Api from "./Api";

interface ApiResponse {
  status: string;
  message: string;
}

interface LoginResponse extends ApiResponse {
  token: string;
}

interface IUser {
  _id: number;
  name: string;
  email: string;
}

interface UserResponse extends ApiResponse {
  data: IUser;
}

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
  baseUrl: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
