import { DP } from "../displayPic";
import HenryDP from "../../images/henryStachan.jpg";

export const HenryStrachan = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={HenryDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Henry Strachan</p>
        <p className="text-[#0C836B]">typing...</p>
      </div>
      <p className="w-fit mr-5">10:56</p>
    </div>
  );
};
