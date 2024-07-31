import HeaderNextButton from "@/components/common/HeaderNextButton";
import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import ScheduleCard from "./components/ScheduleCard";
import { useSchedule } from "@/hooks/api/useSchedule";

function Schedule() {
  const { data } = useSchedule({ year: 2024, month: 7 });

  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <HeaderText text={"학사일정"} />
        <HeaderNextButton title={"2024년 7월"} />
      </ScheduleHeader>
      <ScheduleCardContainer>
        {data.data.schedule.map((schedule) => (
          <ScheduleCard period={schedule.period} contents={schedule.contents} />
        ))}
      </ScheduleCardContainer>
    </ScheduleContainer>
  );
}

export default Schedule;

const ScheduleContainer = styled.div`
  max-width: 480px;
  background-color: #fcfcfc;
  padding: 0 24px;
  padding-top: 100px;
`;
const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ScheduleCardContainer = styled.div`
  margin-top: 12px;
  padding-bottom: 100px;
`;
