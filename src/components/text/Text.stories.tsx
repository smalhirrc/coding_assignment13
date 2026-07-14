import type { Meta, StoryObj } from '@storybook/react-webpack5' with {
  'resolution-mode': 'import',
};
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,

  argTypes: {
    text: {
      control: 'text',
    },

    color: {
      control: 'color',
    },

    fontSize: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'This is a text component.',
    color: '#b50e0e',
    fontSize: '1rem',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled text component.',
    disabled: true,
  },
};
