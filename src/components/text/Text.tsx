import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{
  color?: string;
  fontSize?: string;
  disabled?: boolean;
}>`
  margin: 0;

  color: ${(props) =>
    props.disabled
      ? "#999999"
      : props.color || "#000000"};

  font-size: ${(props) =>
    props.fontSize || "1rem"};

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Text = ({
  text,
  color,
  fontSize,
  disabled,
}: TextProps) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      disabled={disabled}
      data-testid="text-component"
    >
      {text}
    </StyledText>
  );
};

export default Text;