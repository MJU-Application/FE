import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import RestaurantButton from "./components/RestaurantButton";
import HotIssueComponent from "@/components/common/HotIssueComponent";
import NoticeNav from "./components/NoticeNav";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNotices } from "@/hooks/api/useNotices";
import HomeNoticeCard from "./components/HomeNoticeCard";

function Home() {
  const hotIssues = [
    { date: "2024.07.07", text: "공지사항 제목을 입력해주세요." },
    { date: "2024.07.08", text: "2024년도 신입생 오리엔테이션 안내" },
    { date: "2024.07.09", text: "여름 방학 학습 자료 배포" },
    { date: "2024.07.10", text: "캠퍼스 안전 교육 세미나" },
    { date: "2024.07.11", text: "장학금 신청 마감 안내" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (!type) {
      searchParams.set("type", encodeURIComponent("DAHACK"));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, type]);

  return (
    <HomeContainer>
      <Header>
        <HeaderText text="오늘의 식단" />
        <RestaurantButton />
      </Header>
      <HotIssue>MJU hot issue</HotIssue>
      <HotIssueContainer>
        {hotIssues.map((issue, index) => (
          <HotIssueComponent key={index} date={issue.date} text={issue.text} />
        ))}
      </HotIssueContainer>
      <NoticeNav type={type} />
      <NoticeWrapper>
        {hotIssues.map((notice, index) => (
          <HomeNoticeCard title={notice.text} date={notice.date} />
        ))}
      </NoticeWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  max-width: 480px;
  background-color: #fff;
  padding: 72px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HotIssue = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

// 오른쪽 부분도 그냥 패딩 주면 어떨까 생각
const HotIssueContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-right: 24;
  margin-right: -24px;
`;

const NoticeWrapper = styled.div`
  min-height: 231px;
  border-bottom: 1px solid #d0c1ba;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Home;
