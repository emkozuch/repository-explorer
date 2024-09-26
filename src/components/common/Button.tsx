import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Loader } from "./Loader";
import { styleTokens } from "style";

type Props = {
  text: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, isLoading, ...props }: Props) => {
  return (
    <StyledButton {...props}>{isLoading ? <Loader /> : text}</StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${styleTokens.colors.primary};
  border: none;
  height: 32px;
  border-radius: ${styleTokens.border.borderRadius.sm};
  color: ${styleTokens.colors.invertedText};
  &:disabled {
    cursor: not-allowed;
    background-color: ${styleTokens.colors.disabled};
    color: ${styleTokens.colors.disabledText};
  }
`;
