import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroImage from './Heroimage';

describe('HeroImage Component', () => {
  test('renders hero image title', () => {
    render(<HeroImage imageUrl="test.jpg" title="Welcome" />);

    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  test('changes appearance when disabled', () => {
    render(<HeroImage imageUrl="test.jpg" title="Welcome" disabled />);

    const hero = screen.getByTestId('hero-image');

    expect(hero).toHaveStyle('opacity: 0.5');
  });
});
