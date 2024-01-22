import { ConversationHeader } from "./headers";
import { Footer } from "./footer";
import { FileSent, FirstChat, ImageChat, LastChat } from "./conversation";

export const Conversation = () => {
  return (
    <section className="w-[60%] ml-[40%]">
      <ConversationHeader />
      <section
        id="bg"
        className="bg-[#202020] text-white mt-[15vh] pt-[12px] pb-[50px]">
        <FirstChat />

        <FileSent />

        <p className="w-fit mx-auto rounded-lg mt-4 bg-[#202020] px-3 py-1 text-sm shadow-lg">
          Today
        </p>

        <ImageChat />

        <LastChat />

        <Footer />
      </section>
    </section>
  );
};
