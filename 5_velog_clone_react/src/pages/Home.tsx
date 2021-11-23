import { Outlet } from "react-router";
import { TopBar } from "../components/molecule/common/TopBar";
import { HomeLayout } from "../components/layout/HomeLayout";
import { Profile } from "../components/molecule/profile/Profile";

export function Home() {
  return (
    <HomeLayout
      topBar={<TopBar />}
      profileArea={<Profile />}
      contents={<Outlet />}
    />
  );
}
