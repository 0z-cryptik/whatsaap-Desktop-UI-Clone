import { FaRegUserCircle } from "react-icons/fa";
import { DP } from "./displayPic";

export const Chat = ({
  name = "Maya Kasuma",
  message = "Yes! OK",
  noOfMessages = "",
  time = "14:54",
  src
}) => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={src} />
      <div className="flex-grow">
        <p className="text-lg font-bold">{name}</p>
        <p>{message}</p>
      </div>
      <div className="w-fit mr-5">
        <p>{time}</p>
        <p className="text-center rounded-full bg-[#0C836B] w-[25px] ml-auto">
          {noOfMessages}
        </p>
      </div>
    </div>
  );
};
