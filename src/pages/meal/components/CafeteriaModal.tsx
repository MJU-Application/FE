import { CAFETERIALIST } from "@/constants/meal";
import { getColor } from "@/styles/color";
import { CafeteriaModalProps } from "@/types/meal";
import styled from "styled-components";

const CafeteriaModal: React.FC<CafeteriaModalProps> = ({ onClick }) => {
  return (
    <CafeteriaModalContainer>
      {CAFETERIALIST.map((cafeteria, index) => (
        <div key={index}>
          <Cafeteria onClick={() => onClick(cafeteria.name)}>
            {cafeteria.name}
          </Cafeteria>
          {index < CAFETERIALIST.length - 1 && <Divider />}
        </div>
      ))}
    </CafeteriaModalContainer>
  );
};

export default CafeteriaModal;

const CafeteriaModalContainer = styled.div`
  width: 361px;
  height: 168px;
  background-color: rgba(229, 229, 229, 0.55);
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${getColor()};
  gap: 20px;
`;

const Cafeteria = styled.div`
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 100% */
`;
const Divider = styled.div`
  margin-top: 14px;
  height: 0.33px;
  background: #b3b3b3;
  width: 361px;
`;
