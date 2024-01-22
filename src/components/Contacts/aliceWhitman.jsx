import { BiCheckDouble } from "react-icons/bi";
import AliceDP from "../../images/aliceWhitman.jpg";
import { DP } from "../displayPic";

export const AliceWhitman = () => {
  return (
    <div className="flex flex-row mb-4 bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={AliceDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Alice Whitman</p>
        <span className="flex flex-row">
          <BiCheckDouble
            className="mr-2"
            color="#00E1FC"
            size={"1.5rem"}
          />
          Wow! have a great time. Enjoy.
        </span>
      </div>
      <p className="mr-5">15:12</p>
    </div>
  );
};
