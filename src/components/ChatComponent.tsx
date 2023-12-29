import React, { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import ChatInput from "./ChatInput";
import ChatScreen from "./ChatScreen";
import { Loader } from "./Loader";
import { MainScreenIcon } from "./MainScreenIcon";
import MessageText from "./MessageText";
import SampleInputBubble from "./SampleInputBubble";
import { PoweredByIcon } from "./PoweredByIcon";
import Header from "./Header";
import clsx from "clsx";
import { useChat } from "../providers/ChatProvider";

const chatAvatarBlob =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJJSURBVHgBtVJLaBNRFD0vk2nSmOkEYz4ktChaNy5K3QgqlGYpbREh3bhzIS4EBXWnEHe6cCEFEdGFqOBCXCgoLlyImm4UrUXB0pRgjNGaxM7kM9NJXp53pkmM7caFvfAG5r57zj33vAtsYjA6rlQq5RJCsH9G2QCuLZxvpU+9EOkTXMyeFvz9pbeWZR1rk27o0o1qtRr1ZW88Ybkro1CbgN/TvrAAIwix5/ocixwcZ4z96mBcvWTepVtXWe7iKOLSH7Ad/j4gVAGbPzrC888f9jbuEhiGMS59vTaNuIovP2Q8euXv4m8/VVGpU2kEkBYuj1FtYgOBnL17GN4iUKpg7iPDwJaWk7eBJU1CRReAXgeab1ifWZhaT8Bg6bvhcQNBBZMJC0GVOxeKr4WJ/VXEokQw4KNOEsTyy1BnDLf9oWcC/zSzjBWDNK5xzjyIYjXvRpkzjB2o4uy2GsBJVbmG1pBidBQ4BKZp7vCuFiahmzYdFQqkknnEZkOoyPS/7xtQIAKvDFgcbu3dEU3TzqmqWnbacc53YulmAGG/QJ/bdl3EoAHTJShTRSgg4gDJ7ye2iAJWfBaQZTnRVSBJ0hC4To4o5B49n0diCJAH3zVBgpgNcvwxGgz1Bjn7GS6XK95rYhbDJ4G6JZw5SSbKNGZdZjC9gEYKGpRr0Tg1WqpdZ+ylS6NnIVgmkxke7P95ga18GJGqi4N86955I3zoDqlze3P3jjN9cbvwxfVGbOKx3lTuh8Ph12uG/R0smUxK9lq0x2Ptsz73/+I3mPngz5BT8vAAAAAASUVORK5CYII=";

const userAvatarBlob =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKaSURBVDiNdZNLSFRxFMZ/994xbEbT0jSFpAwse04TRSYRQVqYK2lR0jJoWRQVBEUtahOlkz0WQYsCFxWKjUha0kMZK5kZpSwNMkRScxwddbx3ypk5La6NpvXBWfwP5zuP7/yPIiL8hU4ljyjlqGxD2AaAgocYHjSq2SJf5oYrswkUBS8nULgKLObfMBDO48AJJnEmgaLgox4o+Q9xPhrYSimIqAB4OQGUfOrP4vrTYj7/sMOKi5Bbh5HXx6+cOnx9+Zy9txFvTypAyQwHpIM88aKLFzl3ulwam9slFJqUP5jQIzKhR2Q89FMe176Qo2WFIi8R8aJLB3kWopSjmDMXbghQuHM9Nqt1Qc+KqlFUtBu93YDvACwmlSOK+HAhlAKMpzjp8u+hr3+Aor0FpKelMmlEGQmM0tj0mtWrclif9p2VH8pAATLxqfFVASOR7TQ2u3nX7qPtfWe8urvNQ0trK8+aXjGZkG86BRjGbpnbpsVio2DHZgYG/Ti25GOEw4yNhXBs3YTfP0p2diaJVtssQSOG+HCJFxEv8rzJJXNx+coNKS49FBdyQo9IQ2OzyENMq6VfJYYHYDqqUeNqQdeNeIHTJ49z51ZV/B2LRam8eRt9OsF0JOJR0agGjOFgMiOBIFV37jM1pQNgs1rJyFhujiwxKioqCYyO8mE4zRQxAad26a4EGLw81TOw4oC7ew2DQz940/IWIxzGCIfRNI1PXV2cOnMWX4cpbM6yGI58/yP2yzVTRAfOXnf6MWADwFhwnCc19QD0fvvrdgD4FkoOcZDDAOrMTqQ7kGTftfara5ElsoAQ/0yKgj1XetNtasa8Y5pFddWOfYOB1AvBKeu6oeCS9I89A2pKkvJraXJsKDfLuHCl0v1gbvxvjQFLfXzT0hEAAAAASUVORK5CYII=";

const bubbleOneText =
  "What are the best practices for scaling a ComposeDB application?";
const bubbleTwoText = "How can I integrate Ceramic Network with Lit Protocol?";

const ChatComponent = () => {
  const { chatHistory, addMessage, triggerAbort, setTriggerAbort } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [abortController, setAbortController] = useState(new AbortController());

  const handleSendMessage = async (messages: any) => {
    try {
      const signal = abortController.signal;

      setLoading(true);
      const response = await fetch("https://index.network/api/chat_stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "random-b56998d5",
          indexes: [
            "kjzl6kcym7w8y9obp8tq6cqa5rgkkcyyohtxj83p8m1zr0m7fyjrwfiav4xi333",
          ],
          messages: messages,
        }),
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const aiRes = await response.text();

      addMessage({ role: "assistant", content: aiRes });
      setLoading(false);
    } catch (err) {
      const newAbortController = new AbortController();
      setAbortController(newAbortController);
      setLoading(false);
      console.error(err);
    }
  };

  const abortRequest = () => {
    abortController.abort();
    setTriggerAbort(false);
  };

  useEffect(() => {
    if (triggerAbort && loading) {
      abortRequest();
    } else {
      setTriggerAbort(false);
    }
  }, [triggerAbort, loading]);

  const handleSubmit = async () => {
    addMessage({ role: "user", content: inputValue });
    setInputValue("");
    await handleSendMessage([{ role: "user", content: inputValue }]);
  };

  return (
    <div
      className={clsx("main-screen", chatHistory.length && "main-screen-chat")}
    >
      <div className="powered-by">
        <PoweredByIcon />
      </div>
      <Header />
      <ChatScreen className="bg-body">
        {!chatHistory.length && (
          <div className="main-screen-wrapper">
            <MainScreenIcon />
            <h1 className="main-title">Chat with Ceramic Network</h1>
            <p className="main-description">
              You can include your indexes by connecting your wallet
            </p>
            <div className="bubbles-wrapper">
              <SampleInputBubble
                onClick={() => {
                  addMessage({ role: "user", content: bubbleOneText });
                  handleSendMessage([{ role: "user", content: bubbleOneText }]);
                }}
                text={bubbleOneText}
              />
              <SampleInputBubble
                onClick={() => {
                  addMessage({ role: "user", content: bubbleTwoText });
                  handleSendMessage([{ role: "user", content: bubbleTwoText }]);
                }}
                text={bubbleTwoText}
              />
            </div>
          </div>
        )}
        {chatHistory.map((message, index) => (
          <MessageText
            key={index}
            img={message.role === "user" ? userAvatarBlob : chatAvatarBlob}
            avatarDimensions={{ width: 16, height: 16 }}
            className="user-message"
            avatarWrapperClassName="user-image"
            value={message.content}
          />
        ))}
        {loading && (
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <Avatar
              avatarWrapperClassName="user-image"
              img={chatAvatarBlob}
              avatarDimensions={{ width: 16, height: 16 }}
            />
            <Loader />
          </div>
        )}
      </ChatScreen>
      <ChatInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input-style"
        placeholder="Ask to all indexes of Ceramic Network"
        onButtonClick={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
    </div>
  );
};

export default ChatComponent;
