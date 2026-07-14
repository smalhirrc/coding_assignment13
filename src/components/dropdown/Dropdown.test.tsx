import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
];

describe('Dropdown Component', () => {
  test('renders dropdown', () => {
    render(<Dropdown options={options} />);

    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={options} disabled />);

    const dropdown = screen.getByTestId('dropdown');

    expect(dropdown).toHaveStyle('background-color: #cccccc');
  });
});
