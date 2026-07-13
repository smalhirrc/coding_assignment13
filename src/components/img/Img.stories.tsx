import type { Meta, StoryObj } from "@storybook/react-webpack5" with { "resolution-mode": "import" };
import Img from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,

  argTypes: {
    src: {
      control: "text",
    },

    alt: {
      control: "text",
    },

    width: {
      control: "text",
    },

    height: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/600/400",
    alt: "Sample Image",
    width: "600px",
    height: "400px",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://picsum.photos/600/400",
    alt: "Disabled Image",
    width: "600px",
    height: "400px",
    disabled: true,
  },
};