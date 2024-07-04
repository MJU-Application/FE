import styled from "styled-components";

type MenuProps = {
  menu: string;
  setMenu: React.Dispatch<React.SetStateAction<string>>;
};

function Menu({ menu, setMenu }: MenuProps) {
  const MENU = ["일반", "학사", "장학/학자금", "취창업"];

  return (
    <MenuBar>
      {MENU.map((item) => (
        <div
          className={`menu ${menu === item ? "activate" : "inactivate"}`}
          key={item}
          onClick={() => setMenu(item)}
        >
          {item}
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
    font-size: 2rem;
    font-weight: 600;
    color: #838496;
    padding-bottom: 0.5rem;
  }
  .activate {
    color: #005eb8;
    border-bottom: 0.2rem solid #005eb8;
  }
`;
