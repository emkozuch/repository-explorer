import { Star } from "lucide-react";
import styled from "styled-components";
import { flexCenteredY, styleTokens } from "style";

type Props = {
  count: number;
};

export const StarsCount = ({ count }: Props) => {
  return (
    <Container>
      <span>{count}</span>
      <Star size={10} />
    </Container>
  );
};

const Container = styled.div`
  ${flexCenteredY}
  gap: ${styleTokens.spacing.sm};

  span {
    font-size: 13px;
  }
`;
