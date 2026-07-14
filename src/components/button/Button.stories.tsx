import type { Meta, StoryObj } from '@storybook/react-webpack5' with {
  'resolution-mode': 'import',
};

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    backgroundColor: {
      control: 'color',
    },

    label: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    backgroundColor: '#007bff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
