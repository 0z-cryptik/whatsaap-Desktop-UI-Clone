import { BsCameraVideo } from "react-icons/bs";
import { DP } from "../displayPic";
import JasonDP from "../../images/jasonBallmer.jpg";

export const JasonBallmer = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={JasonDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Jason Ballmer</p>
        <span className="flex flex-row">
          <BsCameraVideo className="mt-1 mr-2" />
          Video
        </span>
      </div>
      <div className="w-fit mr-5">
        <p className="text-[#0C836B]">15:26</p>
        <p className="text-center bg-[#0C836B] rounded-full w-[25px] ml-auto">
          3
        </p>
      </div>
    </div>
  );
};
