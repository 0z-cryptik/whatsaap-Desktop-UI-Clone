import { BiCheckDouble } from "react-icons/bi";

export const TimeandCheck = ({ time }) => {
  return (
    <p className="text-[11px] ml-4 h-fit mt-auto mb-1">
      {time}
      <Check />
    </p>
  );
};

export const Check = () => {
  return (
    <BiCheckDouble
      size={"1.2rem"}
      className="inline -mt-1"
      color="#00E1FC"
    />
  );
};
