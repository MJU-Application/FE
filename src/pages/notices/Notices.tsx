import styled from "styled-components";
import NotcieCard from "@/pages/notices/components/NoticeCard";
import { useNotices } from "@/hooks/api/useNotices";
import Menu from "@/pages/notices/components/Menu";
import Header from "@/pages/notices/components/Header";
import { useSearchParams } from "react-router-dom";

function Notices() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data } = useNotices(category);
  console.log(data);
  console.log(category);
  return (
    <>
      <TopNavigation>
        <Header />
        <Menu />
      </TopNavigation>
      <NoticeWrapper>
        {data?.data?.map((notice) => (
          <NotcieCard
            title={notice.title}
            date={notice.noticedAt}
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
  padding: 11rem 1.2rem;
`;
