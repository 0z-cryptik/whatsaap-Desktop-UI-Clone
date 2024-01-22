import StasaDP from "../../images/stasaBenko2.jpg";
import { IoTimer } from "react-icons/io5";

export const StasaBenko = () => {
  return (
    <div className="flex flex-row mb-4 hover:bg-[#2D2D2D] w-[95%] mx-auto py-2 rounded-lg">
      <div>
        <img
          src={StasaDP}
          className="mr-4 ml-2 my-auto h-[3rem] w-[3rem] rounded-full"
        />
        <IoTimer
          size={"1rem"}
          color="black"
          className="ml-[2.4rem] -mt-[1rem]"
        />
      </div>
      <div className="flex-grow">
        <p className="text-lg font-bold">Stasa Benko</p>
        <p>aww no problem.</p>
      </div>
      <div className="w-fit mr-5">
        <p>13:56</p>
        <p className="text-center rounded-full bg-[#0C836B] w-[25px] ml-auto">
          2
        </p>
      </div>
    </div>
  );
};
