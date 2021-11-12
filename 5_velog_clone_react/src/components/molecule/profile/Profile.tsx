import { ProfileLinks } from "../home/ProfileLinks";
import { ProfileNav } from "./ProfileNav";
import { ProfileSection } from "./ProfileSection";

export function Profile() {
  return (
    <>
      <ProfileSection />
      <ProfileLinks />
      <ProfileNav />
    </>
  );
}
