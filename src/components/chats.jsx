import { MayaKasuma } from "./Contacts/mayaKasuma";
import { JasonBallmer } from "./Contacts/jasonBallmer";
import { AliceWhitman } from "./Contacts/aliceWhitman";
import { BakingClub } from "./Groups/bakingClub";
import { FamilyFoodies } from "./Groups/familyFoodies";
import { HenryStrachan } from "./Contacts/henryStrachan";
import { StasaBenko } from "./Contacts/stasaBenko";
import { MarkRogers } from "./Contacts/markRogers";
import { DawnJones } from "./Contacts/dawnJones";

export const Chats = () => {
  return (
    <section className="mt-5">
      <MayaKasuma />

      <JasonBallmer />

      <AliceWhitman />

      <BakingClub />

      <StasaBenko />

      <FamilyFoodies />

      <MarkRogers />

      <HenryStrachan />

      <DawnJones />
    </section>
  );
};
