import React, { useState } from "react";
import "./App.css";
import ChatComponent from "./components/ChatComponent";
import Button from "./components/Button";

function App() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="center-things">
      <Button onClick={() => setOpenChat(!openChat)}>Open chat</Button>
      {openChat && (
        <div className="main-screen-bg">
          <ChatComponent />
        </div>
      )}
    </div>
  );
}

export default App;
