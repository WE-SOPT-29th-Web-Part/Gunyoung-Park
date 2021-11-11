import { Outlet } from "react-router";
import { ProfileSection } from "../components/molecule/profile/ProfileSection";
import { TopBar } from "../components/molecule/common/TopBar";
import { ProfileNav } from "../components/molecule/profile/ProfileNav";
import { ProfileLinks } from "../components/molecule/home/ProfileLinks";

export function Home() {
  return (
    <div>
      <TopBar />
      <ProfileSection />
      <ProfileLinks />
      <ProfileNav />
      <Outlet />
    </div>
  );
}
