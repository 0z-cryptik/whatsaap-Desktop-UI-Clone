import React from "react";
import "./App.scss";
import { ChatSection } from "./components/chatsSection";
import { Conversation } from "./components/conversationPage";

const App = () => {
  return (
    <main className="flex flex-row bg-[#282929]">
      <ChatSection />
      <Conversation />
    </main>
  );
};

export default App;
