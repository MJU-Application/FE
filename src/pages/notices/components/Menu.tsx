import { NOTICE } from "@/constants/notice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type MenuProps = {
  menu: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
};

function Menu({ menu, setMenu }: MenuProps) {
  const navigate = useNavigate();
  return (
    <MenuBar>
      {NOTICE.map((notice) => (
        <div
          className={`menu ${menu === notice.name ? "activate" : "inactivate"}`}
          key={notice.name}
          onClick={() => {
            setMenu(notice.name);
            navigate(`/notice${notice.query}`);
          }}
        >
          {notice.name}
        </div>
      ))}
    </MenuBar>
  );
}

export default Menu;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  .menu {
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: 600;
    color: #838496;
    padding-bottom: 0.5rem;
    position: relative;
  }

  .activate {
    color: #005eb8;
  }

  .activate::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.2rem;
    background-color: #005eb8;
    animation: borderExpand 0.3s forwards;
  }

  @keyframes borderExpand {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
