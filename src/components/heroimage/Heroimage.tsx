import styled from "styled-components";
import { HeroImageProps } from "./Heroimage.types";

const HeroContainer = styled.div<{
  imageUrl: string;
  disabled?: boolean;
}>`
  width: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;

  opacity: ${(props) =>
    props.disabled ? 0.5 : 1};

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "default"};

  @media (min-width: 768px) {
    min-height: 500px;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: white;
  margin: 0;
`;

const HeroImage = ({
  imageUrl,
  title,
  subtitle,
  disabled,
}: HeroImageProps) => {
  return (
    <HeroContainer
      imageUrl={imageUrl}
      disabled={disabled}
      data-testid="hero-image"
    >
      <Title>{title}</Title>

      {subtitle && (
        <Subtitle>{subtitle}</Subtitle>
      )}
    </HeroContainer>
  );
};

export default HeroImage;