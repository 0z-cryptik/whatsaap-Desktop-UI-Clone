import MayaDP from "../../images/mayaKasuma.jpg";
import { DP } from "../displayPic";
import { TiPinOutline } from "react-icons/ti";

export const MayaKasuma = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={MayaDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Maya Kasuma</p>
        <p>Yes! OK</p>
      </div>
      <div className="w-fit mr-5">
        <p>14:54</p>
        <TiPinOutline className="mx-auto mt-2" />
      </div>
    </div>
  );
};
