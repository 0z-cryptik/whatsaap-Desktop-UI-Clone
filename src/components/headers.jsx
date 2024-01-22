import { FiEdit } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";
import UserDP from "../images/mainUser.jpg";
import AliceDP from "../images/aliceWhitman.jpg";

export const ChatsHeader = () => {
  return (
    <section className="flex flex-row my-5">
      <img
        src={UserDP}
        className="mx-7 h-[3rem] w-[3rem] rounded-full"
      />
      <p className="text-2xl font-semibold w-[55%] p-0 h-fit my-auto">
        Chats
      </p>
      <FiEdit
        className="mx-4 my-auto"
        size={"1.3rem"}
      />
      <SlOptions
        className="my-auto"
        size={"1.3rem"}
      />
    </section>
  );
};

export const ConversationHeader = () => {
  return (
    <section className="h-[15vh] w-[60%] flex flex-row bg-[#292A2A] text-white fixed z-30">
      <img
        src={AliceDP}
        className="my-auto ml-4 mr-3 h-[3rem] w-[3rem] rounded-full"
      />
      <div className="my-auto flex-grow">
        <p className="text-lg font-semibold">Alice Whitman</p>
        <p className="text-sm font-thin">online</p>
      </div>
      <div className="flex flex-row h-fit my-auto">
        <IoCallOutline
          size={"1.5rem"}
          className="mr-5"
        />
        <div className="border-r pr-5 mr-5">
          <CiVideoOn
            size={"1.5rem"}
            className=""
          />
        </div>
        <LiaSearchSolid
          size={"1.5rem"}
          className="mr-3"
        />
      </div>
    </section>
  );
};
