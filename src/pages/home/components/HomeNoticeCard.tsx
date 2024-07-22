import { Dash } from "@/assets/svg";
import { HomeNoticeCardProp } from "@/types/home";
import { styled } from "styled-components";

const HomeNoticeCard = ({ title, date }: HomeNoticeCardProp) => {
  return (
    <HomeNoticeCardContainer>
      <Title>
        <Dash className="dash" />
        {title}
      </Title>
      {date}
    </HomeNoticeCardContainer>
  );
};

const HomeNoticeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 43px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
`;

const Title = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;

  .dash {
    margin-top: 7px;
  }
`;

export default HomeNoticeCard;
