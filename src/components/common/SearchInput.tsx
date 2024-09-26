import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { flexCenteredY, flexColumn, styleTokens } from "style";

type Props = {
  placeholder?: string;
  reset: () => void;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({ placeholder, reset, error, ...props }: Props) => {
  return (
    <Container>
      <InputContainer>
        <Input placeholder={placeholder} {...props} />
        {props.value && <StyledIcon onClick={reset} />}
      </InputContainer>
      {!!error && <ValidationError>{error}</ValidationError>}
    </Container>
  );
};

const StyledIcon = styled(X)`
  cursor: pointer;
`;

const ValidationError = styled.p`
  margin: 0;
  margin-left: ${styleTokens.spacing.sm};
  color: ${styleTokens.colors.error};
`;

const Container = styled.div`
  ${flexColumn}
  gap: ${styleTokens.spacing.sm};
`;

const InputContainer = styled.div`
  ${flexCenteredY}
  border: ${styleTokens.border.sizes.thin} solid ${styleTokens.colors.darkGray};
  padding: 0 ${styleTokens.spacing.sm};
  height: 32px;
  border-radius: ${styleTokens.border.borderRadius.sm};
  background-color: ${styleTokens.colors.lightGray};
`;

const Input = styled.input`
  all: unset;
  flex: 1;
  height: 100%;
`;
