import { Meta, StoryObj } from "@storybook/react";
import SampleInputBubble from "./SampleInputBubble";
import "./input-bubble.css";

const meta = {
  title: "Components/Input Bubble",
  component: SampleInputBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: {
      control: {
        type: "text",
        required: false,
      },
      defaultValue: "Input text",
    },
    onClick: {
      control: {
        type: "function",
        required: false,
      },
    },
  },
} satisfies Meta<typeof SampleInputBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "What are the best practices for scaling a ComposeDB application?",
  },
};
