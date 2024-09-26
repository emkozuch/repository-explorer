import { useQuery } from "@tanstack/react-query";
import { useSearchUserParams } from "../useSearchUserParams";
import GithubClient from "../../api/GithubClient";

export const useGetUsersQuery = () => {
  const { query } = useSearchUserParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["users", query],
    queryFn: () => GithubClient.getUsers(query),
    enabled: !!query,
  });

  return { data, error, isLoading, query };
};
