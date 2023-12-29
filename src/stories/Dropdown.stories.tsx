import { Meta, StoryObj } from "@storybook/react";
import { CeramicIcon } from "../components/CeramicIcon";

import Dropdown from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
      control: {
        type: "object",
        required: true,
      },
    },
  },
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        headline: "Headline",
        indexs: [
          {
            id: 1,
            icon: <CeramicIcon />,
            title: "Ceramic Docs",
            action: () => {},
          },
          {
            id: 1,
            icon: <CeramicIcon />,
            title: "Ceramic Docs",
            action: () => {},
          },
        ],
      },
    ],
  },
};
