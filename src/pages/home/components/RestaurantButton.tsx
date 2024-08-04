import { SelectButton } from "@/assets/svg";
import { MEALOPTIONS } from "@/constants/homeNotice";
import { getColor } from "@/styles/color";
import { useState } from "react";
import styled from "styled-components";

interface RestaurantButtonProps {
  setCafeteria: (cafeteria: string) => void;
}

const RestaurantButton: React.FC<RestaurantButtonProps> = ({
  setCafeteria,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("학생 식당");

  function handleOpenModal(): void {
    setModalOpen((prev) => !prev);
  }

  const handleSelect = (option: string) => {
    setButtonText(option);
    setModalOpen(false);
    setCafeteria(option);
  };

  return (
    <>
      <RestaurantButtonContainer onClick={() => handleOpenModal()}>
        <RestaurantButtonText>{buttonText}</RestaurantButtonText>
        <SelectButton width={16} height={10} stroke={getColor()} />
      </RestaurantButtonContainer>

      {isModalOpen && (
        <ModalContainer>
          {MEALOPTIONS.map((option, index) => (
            <div key={index}>
              <ModalOption onClick={() => handleSelect(option)}>
                {option}
              </ModalOption>
              {index < MEALOPTIONS.length - 1 && <Divider />}
            </div>
          ))}
        </ModalContainer>
      )}
    </>
  );
};

const RestaurantButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${getColor()};
`;

const RestaurantButtonText = styled.p`
  font-size: 17px;
  line-height: 22px;
  font-weight: 590;
`;

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: #ffffff33;
  width: 98px;
  height: 150px;
  border-radius: 8px;
  z-index: 2;
  left: 280px;
  margin-top: 30px;
`;

const ModalOption = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${getColor()};
  text-align: center;
`;

const Divider = styled.div`
  margin-top: 14px;
  height: 2px;
  background: #f0f0f0;
  width: 70px;
`;

export default RestaurantButton;
