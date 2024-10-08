import { Link } from "react-router-dom";
import { getColor } from "../../styles/color";
import { HotissueProp } from "../../types/home";
import { mixColors } from "../../utils/mixColors";
import { styled } from "styled-components";

const HotIssueComponent = ({ date, text, link }: HotissueProp) => {
  return (
    <Link to={link}>
      <HotIssueContainer>
        <Date>{date}</Date>
        <Text>{text}</Text>
      </HotIssueContainer>
    </Link>
  );
};

const HotIssueContainer = styled.div`
  width: 90%;
  max-width: 224px;
  height: auto; /* 높이를 자동으로 조정 */
  border-radius: 8px;
  padding: 12px 16px;
  background-color: ${mixColors(getColor(), "#FFFFFF", 0.8)};
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;

const Date = styled.div`
  font-size: 12px;
  color: #000;
  line-height: 14.4px;
  font-weight: 400;
`;

const Text = styled.div`
  color: #000;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* 줄 수 설정 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default HotIssueComponent;
