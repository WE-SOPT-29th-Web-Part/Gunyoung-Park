import { Outlet } from "react-router";
import { ProfileNav } from "../components/molecule/common/ProfileNav";
import { ProfileSection } from "../components/molecule/common/ProfileSection";
import { TopBar } from "../components/molecule/common/TopBar";

export function Home() {
  return (
    <div>
      <TopBar />
      <ProfileSection />
      <ProfileNav />
      <Outlet />
    </div>
  );
}
