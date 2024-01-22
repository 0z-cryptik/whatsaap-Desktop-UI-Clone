import { BiCheckDouble } from "react-icons/bi";
import { BsCardImage } from "react-icons/bs";
import { DP } from "../displayPic";
import FoodDP from "../../images/famFoodies.webp";

export const FamilyFoodies = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <DP src={FoodDP} />
      <div className="flex-grow">
        <p className="text-lg font-bold">Family Foodies</p>
        <span className="flex flex-row">
          <BiCheckDouble
            className="mr-2"
            color="#00E1FC"
            size={"1.5rem"}
          />
          <BsCardImage
            className="mr-2"
            size={"1.5rem"}
          />
          Dinner last night!
        </span>
      </div>
      <p className="mr-5">11:21</p>
    </div>
  );
};
