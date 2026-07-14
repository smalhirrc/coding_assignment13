import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Container = styled.label<{
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  color: ${props => (props.disabled ? '#999999' : '#000000')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StyledRadio = styled.input`
  cursor: inherit;
`;

const RadioButton = ({
  label,
  checked = false,
  disabled = false,
  name,
  value,
}: RadioButtonProps) => {
  return (
    <Container disabled={disabled} data-testid="radio-container">
      <StyledRadio
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        readOnly
      />

      <span>{label}</span>
    </Container>
  );
};

export default RadioButton;
