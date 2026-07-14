import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Text from './Text';

describe('Text Component', () => {
  test('renders text content', () => {
    render(<Text text="Hello World" />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('changes color when disabled', () => {
    render(<Text text="Hello World" disabled />);

    const text = screen.getByTestId('text-component');

    expect(text).toHaveStyle('color: #999999');
  });
});
