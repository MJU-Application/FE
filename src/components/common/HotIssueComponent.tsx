import { HotissueProp } from "@/types/home";
import { styled } from "styled-components";

const HotIssueComponent = ({ date, text }: HotissueProp) => {
  return (
    <HotIssueContainer>
      <Date>{date}</Date>
      <Text>{text}</Text>
    </HotIssueContainer>
  );
};

const HotIssueContainer = styled.div`
  min-width: 224px;
  height: 80px;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: #d0c1ba85;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;

const Date = styled.div`
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
`;
const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

export default HotIssueComponent;
