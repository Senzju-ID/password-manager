import "server-only";
import { cache } from "react";
import axios from "axios";
import ApiServer from "@/lib/axios.server";

interface User {
  id: number;
  username: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

interface UserResult {
  user: User;
}

export const getUserData = cache(async (): Promise<UserResult | null> => {
  try {
    const API = await ApiServer();

    const res = await API.get<User>("/api/user");

    return {
      user: res.data,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        return null;
      }
      return null;
    }
    return null;
  }
});
