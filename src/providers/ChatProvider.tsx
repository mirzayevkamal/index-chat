import React, { createContext, useState, useContext, ReactNode } from "react";
import { IChat } from "../types/index.type";

interface ChatContextProps {
  chatHistory: IChat[];
  addMessage: (message: IChat) => void;
  resetChatHistory: () => void;
  triggerAbort: boolean;
  setTriggerAbort: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chatHistory, setChatHistory] = useState<IChat[]>([]);
  const [triggerAbort, setTriggerAbort] = useState(false);

  const addMessage = (message: IChat) => {
    setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
  };

  const resetChatHistory = () => {
    setTriggerAbort(true);
    setChatHistory([]);
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        addMessage,
        resetChatHistory,
        triggerAbort,
        setTriggerAbort,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextProps => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
