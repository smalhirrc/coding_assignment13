import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;

  background-color: ${props =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Dropdown = ({ options, backgroundColor, disabled }: DropdownProps) => {
  return (
    <StyledSelect
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="dropdown"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
