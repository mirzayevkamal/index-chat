import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: {
        type: "function",
        required: false,
      },
    },
    children: {
      control: {
        type: "text",
        required: false,
      },
      defaultValue: "Button",
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onClick: () => console.log("clicked"),
    children: "Click me",
  },
};
