import { Chat } from "../chatComp";
import DawnDP from '../../images/dawnJones.jpg'

export const DawnJones = () => {
  return (
    <Chat
      name="Dawn Jones"
      message="That was stupid"
      noOfMessages="1"
      time="8:32"
      src={DawnDP}
    />
  );
};
