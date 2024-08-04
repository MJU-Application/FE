import { MealComponent } from "@/assets/svg";
import { MealCardProp } from "@/types/home";
import styled from "styled-components";

const MealCard = ({ meal, time, mealMenus }: MealCardProp) => {
  return (
    <MealCardContainer>
      <StyledMealComponent />
      <Container>
        <LeftOption>
          <MealText>{meal}</MealText>
          <TimeText>{time}</TimeText>
        </LeftOption>
        <MenuList>
          {mealMenus.map((menu, index) => (
            <MenuItem key={index}>{menu}</MenuItem>
          ))}
        </MenuList>
      </Container>
    </MealCardContainer>
  );
};

export default MealCard;

const MealCardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 180px;
`;

const StyledMealComponent = styled(MealComponent)`
  position: absolute;
  top: 0;
  z-index: 0;
`;

const Container = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  left: 11px;
  top: 0;
  bottom: 0;
  gap: 36px;
`;

const LeftOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const MealText = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: #4e4337;
`;

const TimeText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
  color: #4e4337;
`;

const MenuList = styled.ul`
  padding: 0;
`;

const MenuItem = styled.li`
  font-size: 16px;
  color: #4e4337;
  font-weight: 600;
  line-height: 19.2px;
`;
