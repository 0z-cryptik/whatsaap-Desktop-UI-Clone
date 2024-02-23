import { TiAttachment } from "react-icons/ti";
import { VscSend } from "react-icons/vsc";
import { GrEmoji } from "react-icons/gr";

export const Footer = () => {
  return (
    <div className="bg-[#292A2A] flex flex-row py-2 fixed bottom-[0%] w-[60%]">
      <button>
        <GrEmoji
          size={"1.3rem"}
          className="ml-[22px] my-auto"
        />
      </button>
      <button>
        <TiAttachment
          size={"1.5rem"}
          className="ml-[20px] my-auto"
        />
      </button>
      <input
        className="ml-[32px] my-auto text-sm flex-grow font-thin bg-transparent outline-none"
        placeholder="Type a message"
      />
      <button>
        <VscSend
          size={"1.3rem"}
          className="mr-[30px] my-auto"
        />
      </button>
    </div>
  );
};
