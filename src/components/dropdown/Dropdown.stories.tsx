import type { Meta, StoryObj } from "@storybook/react-webpack5" with { "resolution-mode": "import" };
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,

  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const sampleOptions = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
  },
};