import type { Meta, StoryObj } from "@storybook/react-webpack5" with { "resolution-mode": "import" };
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,

  argTypes: {
    text: {
      control: "text",
    },

    color: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
    color: "#000000",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled Label",
    disabled: true,
  },
};