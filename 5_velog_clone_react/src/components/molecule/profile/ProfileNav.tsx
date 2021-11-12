import { Nav } from "../../atom/Nav";

const profileNavItems = [
  { label: "글", to: "/" },
  { label: "시리즈", to: "/series" },
  { label: "소개", to: "/about" },
];

interface ProfileNavProps {}

export function ProfileNav(props: ProfileNavProps) {
  return <Nav items={profileNavItems} />;
}
