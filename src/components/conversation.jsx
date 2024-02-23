import { TimeandCheck } from "./time&check";
import { default as Zip } from "../images/zip-svgrepo-com.svg";
import { Check } from "./time&check";
import Nature from "../images/Nature.jpeg";

export const FirstChat = () => {
  return (
    <div
      id="RChat"
      className="bg-[#075e54] ml-auto mr-[22px] px-2 flex flex-row shadow-lg">
      <p className="pt-1 pb-2">
        Here are all the files, let me know once you've had a look.
      </p>
      <TimeandCheck time={"14:03"} />
    </div>
  );
};

export const FileSent = () => {
  return (
    <div className="bg-[#075e54] w-fit ml-auto h-fit mt-3 mr-[22px] px-3 pt-3 rounded-lg shadow-lg">
      <section className="bg-[#128c7e] w-full h-fit rounded-lg">
        <div className="flex flex-row py-1 border-b pl-2 pr-[50px]">
          <img
            src={Zip}
            width={`35px`}
            className="-mt-2 mr-2"
          />
          <div>
            <p>All-files.zip</p>
            <p className="text-sm">25.3 MB Compressed (zipped) Folder</p>
          </div>
        </div>

        <div className="p-3 w-full">
          <button className="bg-[#075e54] w-[49%] mr-[2%] py-1 rounded-md">
            Open
          </button>
          <button className="bg-[#075e54] w-[49%] py-1 rounded-md">
            Save as...
          </button>
        </div>
      </section>

      <div className="w-full text-end text-[11px] py-1">
        14:04
        <Check />
      </div>
    </div>
  );
};

export const ImageChat = () => {
  return (
    <>
      <div
        id="imgChat"
        className="w-[48%] bg-[#202020] px-2 pt-2 mt-3 ml-[22px] shadow-lg">
        <img
          className="rounded-lg"
          src={Nature}
        />
        <p>So beautiful here</p>
        <p className="text-[11px] text-right">15:06</p>
      </div>

      <p className="w-fit ml-[32px] bg-[#2c2c2c] p-1 rounded-full -mt-[15px] relative shadow-lg">
        ❤️
      </p>
    </>
  );
};

export const LastChat = () => {
  return (
    <div
      id="lastChat"
      className="bg-[#075e54] ml-auto mr-[22px] px-2 flex flex-row mt-[0.375rem]">
      <p className="pt-1 pb-2">Wow! Have a great time. Enjoy.</p>
      <TimeandCheck time={"15:12"} />
    </div>
  );
};
