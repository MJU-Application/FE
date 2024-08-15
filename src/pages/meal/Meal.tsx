import Header from "@/components/common/Header";
import HeaderText from "@/components/common/HeaderText";
import styled, { keyframes } from "styled-components";
import HeaderNextButton from "./components/HeaderNextButton";
import { useState } from "react";
import { useMeal } from "@/hooks/api/useMeal";
import MealCard from "@/components/common/MealCard";
import { getMealTime } from "@/utils/getMealTime";
import { CAFETERIALIST, INITMEALARRAY } from "@/constants/meal";
import { NextButton } from "@/assets/svg";
import { getColor } from "@/styles/color";
import CafeteriaModal from "./components/CafeteriaModal";
import { setMealDate } from "@/utils/setDate";

// 학생식당, 명진당, 생활관 타입만 적용
type CafeteriaName = (typeof CAFETERIALIST)[number]["name"];

function Meal() {
  const [date, setDate] = useState<Date>(new Date());
  const [cafeteria, setCafeteria] = useState<CafeteriaName>("명진당");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const mealData = useMeal({
    date: setMealDate(date),
    cafeteria: "인문캠퍼스 학생회관 식당",
  });

  // 음식 리스트 포맷
  // * 리스트가 비어있을 시 존재 X 기본 항목으로 초기화
  const mealArray =
    mealData.data.data.data.menu.length > 0
      ? mealData.data.data.data.menu
      : INITMEALARRAY;

  const handleChangeMonth = (direction: "next" | "previous") => {
    const newDate = new Date(date);
    if (direction === "next") newDate.setDate(newDate.getDate() + 1);
    else newDate.setDate(newDate.getDate() - 1);

    setDate(newDate);
  };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleSetCafeteria = (selectedCafeteria: CafeteriaName) => {
    setCafeteria(selectedCafeteria);
    setIsOpenModal(false);
  };

  return (
    <>
      <Header isSearchIcon={true} />
      <MealContainer>
        <div className="header">
          <HeaderText text="오늘의 띵식" />
          <HeaderNextButton date={date} handleChangeMonth={handleChangeMonth} />
        </div>

        <MealCardContainer>
          {mealArray.map((meal) => (
            <MealCard
              key={meal.category}
              category={meal.category}
              time={getMealTime(meal.category)}
              mealMenus={meal.food}
            />
          ))}
        </MealCardContainer>
      </MealContainer>
      {/* 인문캠퍼스밖에 적용 안 되는 것으로 확인 추후 수정 */}
      {/* <SelectCafeteria onClick={handleOpenModal}>
        {cafeteria}
        <NextButton
          stroke={getColor()}
          style={{
            transform: `rotate(${isOpenModal ? 270 : 90}deg) scale(0.7)`,
          }}
        />
      </SelectCafeteria>
      {isOpenModal && (
        <>
          <Overlay onClick={handleOpenModal} />
          <ModalContainer>
            <CafeteriaModal onClick={handleSetCafeteria} />
          </ModalContainer>
        </>
      )} */}
    </>
  );
}

export default Meal;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MealContainer = styled.div`
  max-width: 480px;
  background-color: #fcfcfc;
  padding: 0 24px;
  .header {
    display: flex;
    justify-content: space-between;
  }
`;

const MealCardContainer = styled.div`
  margin-top: 20px;
`;

const SelectCafeteria = styled.div`
  display: flex;
  justify-content: center;
  color: ${getColor()};
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  gap: 9px;
  margin-top: 24px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 101;
  backdrop-filter: blur(5px);
`;
