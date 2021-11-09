import { createContext, ReactNode, useContext, useState } from "react";
import ProfileImg from "../static/profile.png";

export interface UserInfo {
  name: string;
  profileImg: string;
}

const UserInfoContext = createContext<UserInfo>({
  name: "",
  profileImg: "",
});

export function useUserInfo(): UserInfo {
  const userInfo = useContext(UserInfoContext);

  return userInfo;
}

export function UserInfoProvider(props: { children: ReactNode }) {
  const [userInfo] = useState<UserInfo>({
    name: "Tekiter",
    profileImg: ProfileImg,
  });

  return (
    <UserInfoContext.Provider value={userInfo}>
      {props.children}
    </UserInfoContext.Provider>
  );
}
