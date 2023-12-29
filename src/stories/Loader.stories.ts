import { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fill: {
      control: {
        type: "color",
        required: false,
      },
      defaultValue: "#1E293B",
    },
    width: {
      control: {
        type: "number",
        required: false,
      },
      defaultValue: "50",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
