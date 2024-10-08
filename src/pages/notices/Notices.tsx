import styled from "styled-components";
import NotcieCard from "../../pages/notices/components/NoticeCard";
import { useNotices } from "../../hooks/api/useNotices";
import Menu from "../../pages/notices/components/Menu";
import Header from "../../components/common/Header";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { APINotice } from "../../types/notice";

function Notices() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { data, isLoading, fetchNextPage, hasNextPage } = useNotices(type, 10);
  console.log(data?.pages[0].data.data.notices);
  const noticeArray = data?.pages[0].data.data.notices;

  useEffect(() => {
    if (!type) {
      searchParams.set("type", decodeURIComponent("일반공지"));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, type]);
  return (
    <>
      <TopNavigation>
        <Header isSearchIcon={true} />
        <Menu type={type} />
      </TopNavigation>
      <NoticeWrapper>
        {noticeArray?.map((notice: APINotice) => (
          <NotcieCard
            title={notice.title}
            date={notice.noticedAt}
            link={notice.link}
            key={notice.notice_id}
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
  background-color: #fcfcfc;
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 11rem 1.2rem;
`;
