import { SelectButton } from "../../../assets/svg";
import { MEALOPTIONS } from "../../../constants/homeNotice";
import { getColor } from "../../../styles/color";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface RestaurantButtonProps {
  cafeteria: string;
  setCafeteria: (cafeteria: string) => void;
}

const RestaurantButton: React.FC<RestaurantButtonProps> = ({
  cafeteria,
  setCafeteria,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleOpenModal(): void {
    setModalOpen((prev) => !prev);
  }

  const handleSelect = (option: string) => {
    setModalOpen(false);
    setCafeteria(option);
  };

  return (
    <>
      <RestaurantButtonContainer onClick={() => handleOpenModal()}>
        <RestaurantButtonText>{cafeteria}</RestaurantButtonText>
        <SelectButton width={16} height={10} stroke={getColor()} />
      </RestaurantButtonContainer>

      {isModalOpen && (
        <>
          <Overlay onClick={handleOpenModal} />
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
        </>
      )}
    </>
  );
};

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
  gap: 10px;
  background-color: #ffffff3b;
  padding: 10px 5px;
  border-radius: 8px;
  z-index: 2;
  left: 280px;
  margin-top: 30px;

  z-index: 101;
  backdrop-filter: blur(5px);
`;

const ModalOption = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${getColor()};
  text-align: center;
`;

const Divider = styled.div`
  margin-top: 10px;
  height: 2px;
  background: #0c0c0c12;
  width: 100px;
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

export default RestaurantButton;
