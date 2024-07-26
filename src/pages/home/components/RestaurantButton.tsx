import { SelectButton } from "@/assets/svg";
import styled from "styled-components";

const RestaurantButton = () => {
  return (
    <>
      <RestaurantButtonContainer>
        <RestaurantButtonText>학생 식당</RestaurantButtonText>
        <SelectButton width={16} height={10} />
      </RestaurantButtonContainer>
    </>
  );
};

const RestaurantButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RestaurantButtonText = styled.p`
  font-size: 17px;
  line-height: 22px;
  font-weight: 590;
`;

export default RestaurantButton;
