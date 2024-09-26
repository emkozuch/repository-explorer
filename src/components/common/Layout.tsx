import { PropsWithChildren } from "react";
import styled from "styled-components";
import { styleTokens } from "style";
import { flexColumn } from "style";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

const Container = styled.div`
  ${flexColumn}
  @media screen and (min-width: ${styleTokens.breakpoints.md}) {
    align-items: center;
  }
`;

const ChildrenContainer = styled.div`
  @media screen and (min-width: ${styleTokens.breakpoints.md}) {
    width: 80vw;
    max-width: 800px;
  }
`;
