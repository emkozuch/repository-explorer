import styled from "styled-components";
import { GithubUser } from "types/apiTypes";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RepositoriesList } from "components/RepositoriesList";
import { flexCenteredY, styleTokens } from "style";

type Props = Pick<GithubUser, "login">;

export const UsersListItem = ({ login }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded((prev) => !prev);
  };

  const Icon = expanded ? ChevronUp : ChevronDown;

  return (
    <li>
      <Header onClick={toggleContent}>
        <span>{login}</span>
        <Icon />
      </Header>
      <Content $expanded={expanded}>
        <RepositoriesList shouldFetch={expanded} username={login} />
      </Content>
    </li>
  );
};

const Header = styled.div`
  ${flexCenteredY}
  background-color: ${styleTokens.colors.lightGray};
  padding: ${styleTokens.spacing.md};

  span {
    flex: 1;
  }
`;
const Content = styled.div<{ $expanded: boolean }>`
  overflow: hidden;
  height: ${({ $expanded }) => ($expanded ? "auto" : "0")};
`;
