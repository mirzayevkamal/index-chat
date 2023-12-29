import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface IChatScreenProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const ChatScreen = ({ className, children }: IChatScreenProps) => {
  return <div className={className}>{children}</div>;
};

export default ChatScreen;
