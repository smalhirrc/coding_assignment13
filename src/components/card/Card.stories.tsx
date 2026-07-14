import type { Meta, StoryObj } from '@storybook/react-webpack5' with {
  'resolution-mode': 'import',
};
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,

  argTypes: {
    backgroundColor: {
      control: 'color',
    },

    title: {
      control: 'text',
    },

    description: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a sample card description.',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is disabled.',
    disabled: true,
  },
};
