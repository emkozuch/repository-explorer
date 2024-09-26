import styled from "styled-components";
import { RepositoriesListItem } from "./RepositoriesListItem";
import { flexCentered, flexColumn, styleTokens } from "style";
import { useGetUserRepositoriesQuery } from "hooks";
import { ApiError, Button, Loader } from "components/common";

type Props = {
  username: string;
  shouldFetch: boolean;
};

export const RepositoriesList = ({ username, shouldFetch }: Props) => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    repositories,
    isFetching,
  } = useGetUserRepositoriesQuery(username, shouldFetch);

  if (isFetching && !isFetchingNextPage)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  return (
    <Container>
      <ListContainer>
        {repositories.map((repo) => {
          return (
            <RepositoriesListItem
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
            />
          );
        })}
      </ListContainer>
      {hasNextPage && (
        <Button
          text="Load more..."
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={isFetchingNextPage}
        />
      )}
      {error && <ApiError />}
    </Container>
  );
};

const ListContainer = styled.ul`
  ${flexColumn}
  gap: ${styleTokens.spacing.lg};
  list-style: none;
  padding: 0;

  @media screen and (min-width: ${styleTokens.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const LoaderContainer = styled.div`
  ${flexCentered}
  padding: ${styleTokens.spacing.lg};
`;

const Container = styled.div`
  ${flexColumn}
  gap: ${styleTokens.spacing.lg};
  padding: ${styleTokens.spacing.md};
`;
