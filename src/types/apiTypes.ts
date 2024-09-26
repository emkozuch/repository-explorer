export type GithubUser = {
  login: string;
  id: number;
};

export type GetUsersByLoginResponse = {
  items: GithubUser[];
};

export type GetUserRepositoriesResponse = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};
