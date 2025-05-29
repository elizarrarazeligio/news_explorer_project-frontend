import { ApiResponse } from "./api";

export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface LoginResponse extends ApiResponse {
  token: string;
  data: IUser;
}

export interface UserResponse extends ApiResponse {
  data: IUser;
}
