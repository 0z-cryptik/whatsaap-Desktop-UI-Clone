import { LiaSearchSolid } from "react-icons/lia";

export const SearchBar = () => {
  return (
    <div className="flex flex-row w-[90%] mx-auto border border-b-[3px] border-b-[#0C836B] rounded-md h-[40px]">
      <input
        type="text"
        placeholder="Search or start new chat"
        className="outline-none w-[88%] ml-[2%] bg-transparent"
      />
      <button className="w-[10%]">
        <LiaSearchSolid className="mx-auto" />
      </button>
    </div>
  );
};
