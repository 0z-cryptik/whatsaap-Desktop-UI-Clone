import { GoMute } from "react-icons/go";
import { DP } from "../displayPic";
import BakingDP from "../../images/bakingClub.jpeg";

export const BakingClub = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={BakingDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Baking Club</p>
        <p>Rebecca: @Chris R?</p>
      </div>

      <div className="w-fit h-fit my-auto flex flex-row mr-5">
        <GoMute className="mt-7" />
        <div className="text-end">
          <p>14:43</p>
          <div className="flex flex-row">
            <p className="text-[#0C836B] mr-2 ml-5">@</p>
            <p className="rounded-full bg-[#0C836B] w-[25px] text-center">
              1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
