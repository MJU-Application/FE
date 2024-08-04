import { NOTICE } from "@/constants/notice";
import { getColor } from "@/styles/color";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function Menu({ type }: { type: string | null }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (newCategory: string) => {
    searchParams.set("type", encodeURIComponent(newCategory));
    setSearchParams(searchParams);
  };
  return (
    <MenuBar>
      {NOTICE.map((notice) => (
        <div
          className={`menu ${
            type === notice.query ? "activate" : "inactivate"
          }`}
          key={notice.name}
          onClick={() => handleCategoryChange(notice.query)}
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
    color: ${getColor()};
  }

  .activate::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.2rem;
    background-color: ${getColor()};
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
