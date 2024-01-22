import { FiArchive } from "react-icons/fi";

export const Archive = () => {
  return (
    <section className="flex flex-row mt-5">
      <FiArchive className="w-[15.6%] mt-1" />
      <p className="w-4/6">Archived</p>
      <p className="text-[#0C836B] text-end flex-grow mr-6">2</p>
    </section>
  );
};
