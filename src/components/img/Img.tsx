import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImage = styled.img<{
  width?: string;
  height?: string;
  disabled?: boolean;
}>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};

  display: block;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Img = ({ src, alt, width, height, disabled }: ImgProps) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      data-testid="img-component"
    />
  );
};

export default Img;
