import { NextButton } from "@/assets/svg";
import { getColor } from "@/styles/color";
import { HeaderNextButtonProps } from "@/types/schedule";
import { setMealHeaderDate } from "@/utils/setDate";
import styled from "styled-components";

const HeaderNextButton = ({
  date,
  handleChangeMonth,
}: HeaderNextButtonProps) => {
  const title = setMealHeaderDate(date);

  return (
    <Container>
      <NextButton
        stroke={getColor()}
        onClick={() => handleChangeMonth("previous")}
      />
      <Title>{title}</Title>
      <NextButton
        stroke={getColor()}
        style={{ transform: "rotate(180deg)" }}
        onClick={() => handleChangeMonth("next")}
      />
    </Container>
  );
};

export default HeaderNextButton;

const Container = styled.div`
  display: flex;
  gap: 9px;
  padding: 4px 0;
`;

const Title = styled.p`
  color: ${getColor()};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 55px;
`;
