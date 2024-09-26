import { useInfiniteQuery } from "@tanstack/react-query";
import GithubClient from "../../api/GithubClient";
import { useMemo } from "react";

export const useGetUserRepositoriesQuery = (
  username: string,
  shouldFetch?: boolean
) => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    data,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [`${username}-repos`],
    queryFn: ({ pageParam }) =>
      GithubClient.getUserRepositories(username, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const isLast = lastPage.length < 5;
      return isLast ? undefined : lastPageParam + 1;
    },
    enabled: shouldFetch,
  });

  const repositories = useMemo(() => data?.pages.flat() ?? [], [data]);

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    repositories,
    isFetching,
  };
};
