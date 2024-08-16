import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import RestaurantButton from "./components/RestaurantButton";
import NoticeNav from "./components/NoticeNav";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import HomeNoticeCard from "./components/HomeNoticeCard";
import { useMeal } from "@/hooks/api/useMeal";
import { getColor } from "@/styles/color";
import { HOMENOTICE, HOTISSUE } from "@/constants/homeNotice";
import { setMealDate } from "@/utils/setDate";
import { INITMEALARRAY } from "@/constants/meal";
import { useMainNotice } from "@/hooks/api/useMainNotice";
import Header from "@/components/common/Header";
import MealCarousel from "@/pages/home/components/MealCarousel";
import HotCarousel from "@/pages/home/components/HotCarousel";

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
    <>
      <Header isSearchIcon={true} />
      <HomeContainer>
        <HomeHeader>
          <HeaderText text="오늘의 식단" />
          <RestaurantButton cafeteria={cafeteria} setCafeteria={setCafeteria} />
        </HomeHeader>
        <MealCarousel mealMenu={mealMenu} />
        <HotCarousel hotIssues={hotIssues} />
        <NoticeNav type={type === null ? HOMENOTICE[0].query : type} />
        <NoticeWrapper>
          {hotIssues.map((notice, index) => (
            <HomeNoticeCard
              key={index}
              title={notice.text}
              date={notice.date}
            />
          ))}
        </NoticeWrapper>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  max-width: 480px;
  background-color: #fcfcfc;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
