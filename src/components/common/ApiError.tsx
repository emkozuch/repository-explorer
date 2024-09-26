import styled from "styled-components";
import { styleTokens } from "style";

export const ApiError = () => {
  return (
    <Container>
      <p>Couldn't fetch data. Please try again later</p>
    </Container>
  );
};

const Container = styled.div`
  padding: ${styleTokens.spacing.lg};
  border: ${styleTokens.border.sizes.thin} solid red;
  background-color: ${styleTokens.colors.error};
`;
