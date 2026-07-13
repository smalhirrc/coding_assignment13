import type { Meta, StoryObj } from "@storybook/react-webpack5" with { "resolution-mode": "import" };
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,

  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: [
      "Name",
      "Age",
      "City",
    ],

    data: [
      ["John", "25", "Toronto"],
      ["Bob", "30", "Calgary"],
      ["Mike", "22", "Vancouver"],
    ],

    footer: [
      "Total",
      "3",
      "Users",
    ],

    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: [
      "Name",
      "Age",
      "City",
    ],

    data: [
      ["Bob", "30", "Calgary"],
    ],

    footer: [
      "Total",
      "1",
      "User",
    ],

    disabled: true,
  },
};