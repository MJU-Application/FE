import HeaderText from "@/components/common/HeaderText";
import styled from "styled-components";

function Schedule() {
  return (
    <ScheduleContainer>
      <HeaderText text={"학사일정"} />
    </ScheduleContainer>
  );
}

export default Schedule;

const ScheduleContainer = styled.div`
  max-width: 480px;
  background-color: #fff;
  padding: 0 24px;
  padding-top: 100px;
`;
