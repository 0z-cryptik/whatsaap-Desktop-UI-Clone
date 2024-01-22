import { ChatsHeader } from "./headers";
import { SearchBar } from "./searchbar";
import { Chats } from "./chats";
import { Archive } from "./archive";

export const ChatSection = () => {
  return (
    <div
      id="chatSection"
      className="w-2/5 h-[100svh] overflow-y-scroll bg-[#1E2019] text-white fixed">
      <ChatsHeader />

      <SearchBar />

      <Archive />

      <Chats />
    </div>
  );
};
