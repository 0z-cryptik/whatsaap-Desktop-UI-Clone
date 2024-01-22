import { Chat } from "../chatComp";
import MarkDP from "../../images/markRogers.jpg";

export const MarkRogers = () => {
  return (
    <Chat
      name="Mark Rogers"
      message="Nope, I can't go unfortunately."
      noOfMessages="1"
      time="11:05"
      src={MarkDP}
    />
  );
};
