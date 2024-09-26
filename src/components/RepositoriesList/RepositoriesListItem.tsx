import { GetUserRepositoriesResponse } from "../../types/apiTypes";
import styled from "styled-components";
import { StarsCount } from "./StarsCount";
import { flexCenteredY, flexColumn, styleTokens } from "style";

type Props = Omit<GetUserRepositoriesResponse, "id">;

export const RepositoriesListItem = ({
  name,
  description,
  stargazers_count,
}: Props) => {
  return (
    <Container>
      <Header>
        <span>{name}</span>

        <StarsCount count={stargazers_count} />
      </Header>
      <p>{description}</p>
    </Container>
  );
};

const Container = styled.li`
  ${flexColumn}
  background-color: ${styleTokens.colors.darkGray};
  border-radius: ${styleTokens.border.borderRadius.sm};
  padding: ${styleTokens.spacing.lg};
`;

const Header = styled.div`
  ${flexCenteredY};
  font-weight: bold;
  gap: ${styleTokens.spacing.lg};
  span {
    flex: 1;
    word-break: break-all;
  }
  svg {
    fill: black;
  }
`;
