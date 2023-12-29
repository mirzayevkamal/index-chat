import { Meta, StoryObj } from "@storybook/react";
import ChatComponent from "./ChatComponent";

const meta = {
  title: "Page/Chat Component",
  component: ChatComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    width: "100%",
  },
} satisfies Meta<typeof ChatComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
