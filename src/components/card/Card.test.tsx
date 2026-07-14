import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

describe('Card Component', () => {
  test('renders card content', () => {
    render(<Card title="Profile" description="User information" />);

    expect(screen.getByText('Profile')).toBeInTheDocument();

    expect(screen.getByText('User information')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Card title="Profile" description="User information" disabled />);

    const card = screen.getByTestId('card');

    expect(card).toHaveStyle('background-color: #cccccc');
  });
});
