import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{
  color?: string;
  disabled?: boolean;
}>`
  display: inline-block;

  color: ${(props) =>
    props.disabled
      ? "#999999"
      : props.color || "#000000"};

  font-size: 1rem;
  font-weight: 500;

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Label = ({
  text,
  color,
  disabled,
}: LabelProps) => {
  return (
    <StyledLabel
      color={color}
      disabled={disabled}
      data-testid="label-component"
    >
      {text}
    </StyledLabel>
  );
};

export default Label;