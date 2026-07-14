import type { Meta, StoryObj } from '@storybook/react-webpack5' with {
  'resolution-mode': 'import',
};
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,

  argTypes: {
    label: {
      control: 'text',
    },

    checked: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Option 1',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Option',
    disabled: true,
  },
};
