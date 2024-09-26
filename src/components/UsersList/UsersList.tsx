import { UsersListItem } from "./UsersListItem";
import styled from "styled-components";
import { useGetUsersQuery } from "hooks";
import { ApiError, LoadingCard } from "components/common";
import { flexColumn, styleTokens } from "style";

export const UsersList = () => {
  const { data, error, isLoading, query } = useGetUsersQuery();

  if (isLoading)
    return (
      <Container>
        <LoadingCard />
      </Container>
    );

  if (error)
    return (
      <Container>
        <ApiError />
      </Container>
    );

  return (
    <Container>
      {query && <p>Showing users for '{query}':</p>}
      <List>
        {data?.items?.map((user) => {
          return <UsersListItem key={user.id} login={user.login} />;
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding: ${styleTokens.spacing.md};
`;

const List = styled.ul`
  ${flexColumn}
  gap: ${styleTokens.spacing.md};
  list-style: none;
  padding: 0;
`;
