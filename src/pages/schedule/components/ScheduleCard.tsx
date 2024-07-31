import { ScheduleEllipse } from "@/assets/svg";
import { getColor } from "@/styles/color";
import { Schedule } from "@/types/schedule";
import styled from "styled-components";

const ScheduleCard = ({ period, contents }: Schedule) => {
  const [start, end] = period.split(" ~ ");
  return (
    <Container>
      <Period>
        <span>{start}</span>
        <span>~</span>
        <span>{end}</span>
      </Period>
      <ScheduleEllipse fill={getColor()} />
      <Content>{contents}</Content>
    </Container>
  );
};

export default ScheduleCard;

const Container = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 9.4px 0px #0000000f;
  margin-bottom: 20px;
`;

const Period = styled.p`
  display: flex;
  min-width: 40px;
  flex-direction: column;
  align-items: center;

  span {
    color: ${getColor()};
    font-weight: 590;
    font-size: 13px;
    line-height: 18px;
  }
`;

const Content = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  max-width: 233px;
`;
