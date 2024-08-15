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
import { setMealDate } from "@/utils/setDate";
import { getMealTime } from "@/utils/getMealTime";
import { INITMEALARRAY } from "@/constants/meal";
import { useMainNotice } from "@/hooks/api/useMainNotice";

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
    date: setMealDate(new Date()),
    cafeteria: "인문캠퍼스 학생회관 식당",
  });

  // const homeNoticeData = useMainNotice({ type: "일반공지" });
  // console.log(homeNoticeData);

  const mealMenu =
    mealData.data.data.data.menu.length > 0
      ? mealData.data.data.data.menu
      : INITMEALARRAY;

  return (
    <HomeContainer>
      <Header>
        <HeaderText text="오늘의 식단" />
        <RestaurantButton cafeteria={cafeteria} setCafeteria={setCafeteria} />
      </Header>
      <MealCardContainer>
        {mealMenu.map((meal) => (
          <MealCardWrapper key={meal.category}>
            <MealCard
              category={meal.category}
              time={getMealTime(meal.category)}
              mealMenus={meal.food}
            />
          </MealCardWrapper>
        ))}
      </MealCardContainer>

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

const MealCardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const MealCardWrapper = styled.div`
  scroll-snap-align: start;
  flex: 0 0 auto;
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
