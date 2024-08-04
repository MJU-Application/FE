import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";
import ScheduleCard from "./components/ScheduleCard";
import { useSchedule } from "@/hooks/api/useSchedule";
import HeaderNextButton from "./components/HeaderNextButton";
import { setDate } from "@/utils/setDate";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Schedule() {
  const [date, setDate] = useState<Date>(new Date());
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("year", date.getFullYear().toString());
    newSearchParams.set("month", (date.getMonth() + 1).toString());

    setSearchParams(newSearchParams);
  }, [date, setSearchParams]);
  const { data } = useSchedule({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  });

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
