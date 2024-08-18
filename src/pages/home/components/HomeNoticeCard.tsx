import { Dash } from "../../../assets/svg";
import { HomeNoticeCardProp } from "../../../types/home";
import { styled } from "styled-components";

const HomeNoticeCard = ({ title, date }: HomeNoticeCardProp) => {
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-");
    return `${month}.${day}`;
  };

  const truncatedText = truncateText(title, 20);
  const formattedDate = formatDate(date);
  return (
    <HomeNoticeCardContainer>
      <Title>
        <Dash className="dash" />
        {truncatedText}
      </Title>
      <DateAt>{formattedDate}</DateAt>
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

const DateAt = styled.div`
  width: 42px;

  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default HomeNoticeCard;
