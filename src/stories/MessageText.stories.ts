import { Meta, StoryObj } from "@storybook/react";
import "./message-text.css";

import MessageText from "./MessageText";
const userAvatarBlob =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKaSURBVDiNdZNLSFRxFMZ/994xbEbT0jSFpAwse04TRSYRQVqYK2lR0jJoWRQVBEUtahOlkz0WQYsCFxWKjUha0kMZK5kZpSwNMkRScxwddbx3ypk5La6NpvXBWfwP5zuP7/yPIiL8hU4ljyjlqGxD2AaAgocYHjSq2SJf5oYrswkUBS8nULgKLObfMBDO48AJJnEmgaLgox4o+Q9xPhrYSimIqAB4OQGUfOrP4vrTYj7/sMOKi5Bbh5HXx6+cOnx9+Zy9txFvTypAyQwHpIM88aKLFzl3ulwam9slFJqUP5jQIzKhR2Q89FMe176Qo2WFIi8R8aJLB3kWopSjmDMXbghQuHM9Nqt1Qc+KqlFUtBu93YDvACwmlSOK+HAhlAKMpzjp8u+hr3+Aor0FpKelMmlEGQmM0tj0mtWrclif9p2VH8pAATLxqfFVASOR7TQ2u3nX7qPtfWe8urvNQ0trK8+aXjGZkG86BRjGbpnbpsVio2DHZgYG/Ti25GOEw4yNhXBs3YTfP0p2diaJVtssQSOG+HCJFxEv8rzJJXNx+coNKS49FBdyQo9IQ2OzyENMq6VfJYYHYDqqUeNqQdeNeIHTJ49z51ZV/B2LRam8eRt9OsF0JOJR0agGjOFgMiOBIFV37jM1pQNgs1rJyFhujiwxKioqCYyO8mE4zRQxAad26a4EGLw81TOw4oC7ew2DQz940/IWIxzGCIfRNI1PXV2cOnMWX4cpbM6yGI58/yP2yzVTRAfOXnf6MWADwFhwnCc19QD0fvvrdgD4FkoOcZDDAOrMTqQ7kGTftfara5ElsoAQ/0yKgj1XetNtasa8Y5pFddWOfYOB1AvBKeu6oeCS9I89A2pKkvJraXJsKDfLuHCl0v1gbvxvjQFLfXzT0hEAAAAASUVORK5CYII=";

const meta = {
  title: "Components/MessageText",
  component: MessageText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    avatarDimensions: {
      control: {
        type: "object",
        required: false,
      },
      defaultValue: {
        width: 20,
        height: 20,
      },
    },
    avatarWrapperClassName: { type: "string" },
    className: { type: "string" },
    img: { type: "string" },
    value: { type: "string" },
  },
} satisfies Meta<typeof MessageText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    value: "Hello, how are you?",
    img: userAvatarBlob,
    className: "user-message",
    avatarWrapperClassName: "user-image",
  },
};
