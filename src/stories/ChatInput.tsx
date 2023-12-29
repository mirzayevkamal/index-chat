import React, { InputHTMLAttributes } from "react";
import SendButtonIcon from "../components/SendButtonIcon";

interface IChatInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  sendButtonIcon?: React.ReactNode;
  onButtonClick?: () => void;
}

const ChatInput = ({
  value,
  onChange,
  placeholder,
  sendButtonIcon,
  onButtonClick,
  ...props
}: IChatInputProps) => {
  return (
    <div style={{ position: "relative" }}>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
        type="text"
      />
      <button onClick={onButtonClick} className="send-button">
        {sendButtonIcon ? sendButtonIcon : <SendButtonIcon fill={value ? "#1E293B" : ""}  />}
      </button>
    </div>
  );
};

export default ChatInput;
