import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 12px 19px;
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  background-color: ${props =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};

  color: white;

  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Button = ({ label, backgroundColor, disabled, onClick }: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
