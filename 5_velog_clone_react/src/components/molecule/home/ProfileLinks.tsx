import styled from "styled-components";
import { LinkIconButton } from "../../atom/Button";

import { ReactComponent as GithubIcon } from "../../../static/icons/github.svg";
import { ReactComponent as HomeIcon } from "../../../static/icons/home.svg";
import { ReactComponent as EmailIcon } from "../../../static/icons/mail.svg";

const links = [
  {
    link: "https://github.com/Tekiter",
    icon: <GithubIcon />,
  },
  {
    link: "https://tekiter.github.io/",
    icon: <HomeIcon />,
  },
  {
    link: "mailto:tekiter8@gmail.com",
    icon: <EmailIcon />,
  },
];

export function ProfileLinks() {
  return (
    <LinksBox>
      {links.map((item) => (
        <LinkIconButton href={item.link} key={item.link}>
          {item.icon}
        </LinkIconButton>
      ))}
    </LinksBox>
  );
}

const LinksBox = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.7em;
  }
`;
