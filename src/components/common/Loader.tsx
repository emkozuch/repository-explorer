import { LoaderCircle } from "lucide-react";
import styled, { keyframes } from "styled-components";

export const Loader = () => {
  return <StyledIcon />;
};

const spin = keyframes`
     0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledIcon = styled(LoaderCircle)`
  animation: ${spin} 1s linear infinite;
`;
