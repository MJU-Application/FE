import { EllipseButton } from "@/assets/svg";
import { HOMENOTICE } from "@/constants/homeNotice";
import { getColor } from "@/styles/color";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

function NoticeNav({ type }: { type: string | null }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (newCategory: string) => {
    searchParams.set("type", encodeURIComponent(newCategory));
    setSearchParams(searchParams);
  };
  return (
    <NoticeContainer>
      {HOMENOTICE.map((notice) => (
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
      <EllipseButton />
    </NoticeContainer>
  );
}

const NoticeContainer = styled.div`
  border-top: 1px solid ${getColor()};
  border-bottom: 1px solid ${getColor()};
  display: flex;
  align-items: center;
  padding: 8px 0;
  max-height: 43px;
  margin-top: 20px;
  gap: 16px;

  .menu {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
    color: #838496;
    position: relative;
    padding: 12px 0;
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
    height: 0.4rem;
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

export default NoticeNav;
