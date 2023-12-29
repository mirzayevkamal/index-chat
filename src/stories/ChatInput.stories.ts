import type { Meta, StoryObj } from "@storybook/react";
import "./chat-input.css";

import ChatInput from "./ChatInput";

const meta = {
  title: "Components/Chat Input",
  component: ChatInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {
        type: "text",
        required: false,
      },
      defaultValue: "Input value",
    },
    onChange: {
      control: {
        type: "function",
        required: false,
      },
    },
    placeholder: {
      control: {
        type: "text",
        required: false,
      },
      defaultValue: "Input placeholder",
    },
    sendButtonIcon: {
      control: {
        type: "text",
        required: false,
      },
    },
    className: {
      control: {
        type: "text",
        required: false,
      },
    },
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "placeholder",
    onChange: () => {},
    className: "input-style",
  },
};
