import mealComponentUrl from "@/assets/svg/mealComponent.svg";
import mealComponentEmptyUrl from "@assets/svg/mealComponentEmpty.svg";
import { MealCardProp } from "@/types/home";
import styled from "styled-components";

const MealCard = ({ category, time, mealMenus }: MealCardProp) => {
  const ishasMeal = mealMenus.length > 0;
  return (
    <MealCardContainer>
      <div className={ishasMeal ? "full" : "empty"} />
      <Container>
        <LeftOption hasMenu={ishasMeal}>
          <MealText>{category}</MealText>
          <TimeText>{time}</TimeText>
        </LeftOption>
        <MenuList>
          {ishasMeal ? (
            mealMenus.map((menu, index) => (
              <MenuItem key={index} hasMenu={ishasMeal}>
                {menu}
              </MenuItem>
            ))
          ) : (
            <MenuItem
              key="no-menu"
              hasMenu={ishasMeal}
            >{`${category}이 존재하지 않습니다.`}</MenuItem>
          )}
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
  .full {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: url(${mealComponentUrl}) no-repeat center center;
    background-size: contain;
  }
  .empty {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: url(${mealComponentEmptyUrl}) no-repeat center center;
    background-size: contain;
  }
`;

const Container = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  left: 20px;
  top: 0;
  bottom: 0;
  gap: 32px;
`;

const LeftOption = styled.div<{ hasMenu: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.hasMenu ? "#4e4337" : "#C9CDD2")};
  gap: 8px;
`;
const MealText = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const TimeText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16.8px;
`;

const MenuList = styled.ul`
  padding: 0;
`;

const MenuItem = styled.li<{ hasMenu: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.hasMenu ? "#4e4337" : "#C9CDD2")};
  font-weight: 600;
  line-height: 19.2px;
`;
