import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import RestaurantButton from "./components/RestaurantButton";
import HotIssueComponent from "@/components/common/HotIssueComponent";
import NoticeNav from "./components/NoticeNav";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import HomeNoticeCard from "./components/HomeNoticeCard";
import MealCard from "../../components/common/MealCard";
import { useMeal } from "@/hooks/api/useMeal";
import { getColor } from "@/styles/color";
import { HOMENOTICE, HOTISSUE } from "@/constants/homeNotice";

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
  const [cafeteria, setCafeteria] = useState("학생식당");

  const mealData = useMeal({
    date: "2024-06-30",
    cafeteria: "인문캠퍼스 학생회관 식당",
  });

  return (
    <HomeContainer>
      <Header>
        <HeaderText text="오늘의 식단" />
        <RestaurantButton cafeteria={cafeteria} setCafeteria={setCafeteria} />
      </Header>
      <MealCard
        time="17:00~18:30"
        category={"조식"}
        mealMenus={[
          "돼지고기김치찌개",
          "쌀밥",
          "너비아니구이*데리아끼소스",
          "어묵볶음",
          "건파래볶음",
          "깍두기",
        ]}
      />
      <HotIssue>{HOTISSUE}</HotIssue>
      <HotIssueContainer>
        {hotIssues.map((issue, index) => (
          <HotIssueComponent key={index} date={issue.date} text={issue.text} />
        ))}
      </HotIssueContainer>
      <NoticeNav type={type === null ? HOMENOTICE[0].query : type} />
      <NoticeWrapper>
        {hotIssues.map((notice, index) => (
          <HomeNoticeCard key={index} title={notice.text} date={notice.date} />
        ))}
      </NoticeWrapper>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  max-width: 480px;
  background-color: #fcfcfc;
  padding: 0 24px;
  padding-top: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HotIssue = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${getColor()};
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
  border-bottom: 1px solid ${getColor()};
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Home;
