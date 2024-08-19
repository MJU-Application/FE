import HeaderText from "../../components/common/HeaderText";
import styled from "styled-components";
import RestaurantButton from "./components/RestaurantButton";
import NoticeNav from "./components/NoticeNav";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeNoticeCard from "./components/HomeNoticeCard";
import { useMeal } from "../../hooks/api/useMeal";
import { getColor } from "../../styles/color";
import { HOMENOTICE, HOTISSUE } from "../../constants/homeNotice";
import { setMealDate } from "../../utils/setDate";
import { CAFETERIALIST, INITMEALARRAY } from "../../constants/meal";
import { useMainNotice } from "../../hooks/api/useMainNotice";
import Header from "../../components/common/Header";
import MealCarousel from "../../pages/home/components/MealCarousel";
import HotCarousel from "../../pages/home/components/HotCarousel";
import { useHotIssue } from "../../hooks/api/useHotIssue";
import { fillMissingMeals } from "../../utils/fillMissingMeals";

type CafeteriaName = (typeof CAFETERIALIST)[number];

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("category");
  const [cafeteria, setCafeteria] = useState<CafeteriaName>("인문학생회관");

  //쿼리를 바꿀까 생각
  useEffect(() => {
    if (!type) {
      searchParams.set("category", decodeURIComponent("일반공지"));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, type]);

  const { data, refetch } = useMeal({
    date: setMealDate(new Date()),
    cafeteria: cafeteria,
  });

  useEffect(() => {
    refetch();
  }, [cafeteria]);

  const mealMenu =
    data.data.data.menu.length > 0 ? data.data.data.menu : INITMEALARRAY;

  const updatedMenu = fillMissingMeals(mealMenu);

  const hotIssueData = useHotIssue();

  const noticeData = useMainNotice(type);
  const handleChangeCafeteria = (cafeteria: string) => {
    setCafeteria(cafeteria);
  };

  return (
    <>
      <Header isSearchIcon={false} />
      <HomeContainer>
        <HomeHeader>
          <HeaderText text={"오늘의 식단"} />
          <RestaurantButton
            cafeteria={cafeteria}
            setCafeteria={handleChangeCafeteria}
          />
        </HomeHeader>
        <MealCarousel mealMenu={updatedMenu} />
        <HotCarousel hotIssues={hotIssueData.data.data.content} />
        <NoticeNav type={type === null ? HOMENOTICE[0].query : type} />
        <NoticeWrapper>
          {noticeData.data.data.content.map((notice, index) => (
            <HomeNoticeCard
              key={index}
              title={notice.title}
              date={notice.noticedAt}
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
