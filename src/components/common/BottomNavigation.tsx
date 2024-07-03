import { NavLink } from "react-router-dom";
import styled from "styled-components";

function BottomNavigation() {
  const NAV_MENU = [
    { title: "홈", link: "/", icon: "" },
    { title: "공지", link: "/notice", icon: "" },
    { title: "일정", link: "/schedule", icon: "" },
    { title: "식단", link: "/meal", icon: "" },
    { title: "설정", link: "/setting", icon: "" },
  ];
  return (
    <nav>
      <Navigation>
        {NAV_MENU.map((nav) => (
          <NavStyle to={nav.link}>{nav.title}</NavStyle>
        ))}
      </Navigation>
    </nav>
  );
}
const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 480px;
  height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

const NavStyle = styled(NavLink)`
  font: 600 10px;
  color: #a2a2a2;
  &.active {
    color: #005eb8;
  }
`;

export default BottomNavigation;
