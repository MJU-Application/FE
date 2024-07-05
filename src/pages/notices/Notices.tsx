import styled from "styled-components";
import Article from "@/pages/notices/components/Article";
import { useState } from "react";
import { useNotices } from "@/hooks/api/useNotices";
import Menu from "@/pages/notices/components/Menu";
import Header from "@/pages/notices/components/Header";

function Notices() {
  const [menu, setMenu] = useState<string>("일반");
  const { data } = useNotices();
  console.log(data);

  return (
    <>
      <TopNavigation>
        <Header />
        <Menu menu={menu} setMenu={setMenu}></Menu>
      </TopNavigation>
      <NoticeWrapper>
        {data?.data?.map((notice) => (
          <Article
            title={notice.title}
            date={notice.createdAt}
            link={notice.link}
            key={notice.id}
          />
        ))}
      </NoticeWrapper>
    </>
  );
}

export default Notices;

const TopNavigation = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  background-color: #fff;
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11rem 16px;
`;
