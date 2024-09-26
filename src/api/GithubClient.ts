import {
  GetUserRepositoriesResponse,
  GetUsersByLoginResponse,
} from "types/apiTypes";
import { axiosInstance } from "./axiosInstance";

class GithubClient {
  async getUsers(login: string): Promise<GetUsersByLoginResponse> {
    const { data } = await axiosInstance.get<GetUsersByLoginResponse>(
      "/search/users",
      {
        params: {
          q: login,
          per_page: 5,
        },
      }
    );
    return data;
  }
  async getUserRepositories(
    login: string,
    page: number
  ): Promise<GetUserRepositoriesResponse[]> {
    const { data } = await axiosInstance.get<GetUserRepositoriesResponse[]>(
      `/users/${login}/repos`,
      {
        params: {
          per_page: 5,
          page,
          type: "owner",
        },
      }
    );

    return data;
  }
}

export default new GithubClient();
