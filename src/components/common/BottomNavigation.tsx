import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NAV_MENU } from "../../constants/navigation";
import { getColor } from "../../styles/color";
function BottomNavigation() {
  const location = useLocation();
  if (location.pathname === "/notice/search") {
    return null;
  }
  return (
    <nav>
      <Navigation>
        {NAV_MENU.map((nav) => (
          <NavStyle to={nav.link} key={nav.title}>
            {nav.title}
          </NavStyle>
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
    color: ${getColor()};
  }
`;

export default BottomNavigation;
