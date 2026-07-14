import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  background-color: ${props =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};

  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;

  width: 100%;
  box-sizing: border-box;

  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};

  transition: 0.3s ease;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 0;
`;

const Card = ({ title, description, backgroundColor, disabled }: CardProps) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
      data-testid="card"
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCard>
  );
};

export default Card;
