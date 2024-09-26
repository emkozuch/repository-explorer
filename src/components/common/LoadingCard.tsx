import styled from "styled-components";
import { Loader } from "./Loader";
import { flexCentered } from "style";

export const LoadingCard = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

const Container = styled.div`
  ${flexCentered}
`;
