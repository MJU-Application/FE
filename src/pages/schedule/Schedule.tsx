import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import ScheduleCard from "./components/ScheduleCard";
import { useSchedule } from "@/hooks/api/useSchedule";
import HeaderNextButton from "./components/HeaderNextButton";
import { useState, useEffect } from "react";

function Schedule() {
  const [date, setDate] = useState<Date>(new Date());

  const { data, refetch } = useSchedule({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

  useEffect(() => {
    refetch();
  }, [date]);

  const scheduleArray = data?.data?.data?.schedule || [];

  const handleChangeMonth = (direction: "next" | "previous") => {
    const newDate = new Date(date);
    if (direction === "next") newDate.setMonth(newDate.getMonth() + 1);
    else newDate.setMonth(newDate.getMonth() - 1);

    setDate(newDate);
  };

  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <HeaderText text={"학사일정"} />
        <HeaderNextButton date={date} handleChangeMonth={handleChangeMonth} />
      </ScheduleHeader>
      <ScheduleCardContainer>
        {scheduleArray.map((schedule) => (
          <ScheduleCard
            key={schedule.period}
            period={schedule.period}
            contents={schedule.contents}
          />
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
