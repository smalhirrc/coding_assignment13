import type { Meta, StoryObj } from '@storybook/react-webpack5' with {
  'resolution-mode': 'import',
};
import HeroImage from './Heroimage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,

  argTypes: {
    title: {
      control: 'text',
    },

    subtitle: {
      control: 'text',
    },

    imageUrl: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    title: 'Welcome',
    subtitle: 'Build amazing UI libraries',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Hero',
    subtitle: 'Component disabled',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    disabled: true,
  },
};
