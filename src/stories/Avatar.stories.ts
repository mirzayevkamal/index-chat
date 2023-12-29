import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const chatAvatarBlob =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgBtVJLaBNRFD0vk2nSmOkEYz4ktChaNy5K3QgqlGYpbREh3bhzIS4EBXWnEHe6cCEFEdGFqOBCXCgoLlyImm4UrUXB0pRgjNGaxM7kM9NJXp53pkmM7caFvfAG5r57zj33vAtsYjA6rlQq5RJCsH9G2QCuLZxvpU+9EOkTXMyeFvz9pbeWZR1rk27o0o1qtRr1ZW88Ybkro1CbgN/TvrAAIwix5/ocixwcZ4z96mBcvWTepVtXWe7iKOLSH7Ad/j4gVAGbPzrC888f9jbuEhiGMS59vTaNuIovP2Q8euXv4m8/VVGpU2kEkBYuj1FtYgOBnL17GN4iUKpg7iPDwJaWk7eBJU1CRReAXgeab1ifWZhaT8Bg6bvhcQNBBZMJC0GVOxeKr4WJ/VXEokQw4KNOEsTyy1BnDLf9oWcC/zSzjBWDNK5xzjyIYjXvRpkzjB2o4uy2GsBJVbmG1pBidBQ4BKZp7vCuFiahmzYdFQqkknnEZkOoyPS/7xtQIAKvDFgcbu3dEU3TzqmqWnbacc53YulmAGG/QJ/bdl3EoAHTJShTRSgg4gDJ7ye2iAJWfBaQZTnRVSBJ0hC4To4o5B49n0diCJAH3zVBgpgNcvwxGgz1Bjn7GS6XK95rYhbDJ4G6JZw5SSbKNGZdZjC9gEYKGpRr0Tg1WqpdZ+ylS6NnIVgmkxke7P95ga18GJGqi4N86955I3zoDqlze3P3jjN9cbvwxfVGbOKx3lTuh8Ph12uG/R0smUxK9lq0x2Ptsz73/+I3mPngz5BT8vAAAAAASUVORK5CYII=";
const userAvatarBlob =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKaSURBVDiNdZNLSFRxFMZ/994xbEbT0jSFpAwse04TRSYRQVqYK2lR0jJoWRQVBEUtahOlkz0WQYsCFxWKjUha0kMZK5kZpSwNMkRScxwddbx3ypk5La6NpvXBWfwP5zuP7/yPIiL8hU4ljyjlqGxD2AaAgocYHjSq2SJf5oYrswkUBS8nULgKLObfMBDO48AJJnEmgaLgox4o+Q9xPhrYSimIqAB4OQGUfOrP4vrTYj7/sMOKi5Bbh5HXx6+cOnx9+Zy9txFvTypAyQwHpIM88aKLFzl3ulwam9slFJqUP5jQIzKhR2Q89FMe176Qo2WFIi8R8aJLB3kWopSjmDMXbghQuHM9Nqt1Qc+KqlFUtBu93YDvACwmlSOK+HAhlAKMpzjp8u+hr3+Aor0FpKelMmlEGQmM0tj0mtWrclif9p2VH8pAATLxqfFVASOR7TQ2u3nX7qPtfWe8urvNQ0trK8+aXjGZkG86BRjGbpnbpsVio2DHZgYG/Ti25GOEw4yNhXBs3YTfP0p2diaJVtssQSOG+HCJFxEv8rzJJXNx+coNKS49FBdyQo9IQ2OzyENMq6VfJYYHYDqqUeNqQdeNeIHTJ49z51ZV/B2LRam8eRt9OsF0JOJR0agGjOFgMiOBIFV37jM1pQNgs1rJyFhujiwxKioqCYyO8mE4zRQxAad26a4EGLw81TOw4oC7ew2DQz940/IWIxzGCIfRNI1PXV2cOnMWX4cpbM6yGI58/yP2yzVTRAfOXnf6MWADwFhwnCc19QD0fvvrdgD4FkoOcZDDAOrMTqQ7kGTftfara5ElsoAQ/0yKgj1XetNtasa8Y5pFddWOfYOB1AvBKeu6oeCS9I89A2pKkvJraXJsKDfLuHCl0v1gbvxvjQFLfXzT0hEAAAAASUVORK5CYII=";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    img: { type: "string" },
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
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChatAvatar: Story = {
  args: {
    avatarDimensions: {
      width: 24,
      height: 24,
    },
    img: chatAvatarBlob,
    avatarWrapperClassName: "user-image",
  },
};

export const UserAvatar: Story = {
  args: {
    avatarDimensions: {
      width: 24,
      height: 24,
    },
    img: userAvatarBlob,
    avatarWrapperClassName: "user-image",
  },
};
