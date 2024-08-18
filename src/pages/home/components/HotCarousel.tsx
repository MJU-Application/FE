import Slider from "react-slick";
import HotIssueComponent from "../../../components/common/HotIssueComponent";
import styled from "styled-components";
import { HOTISSUE } from "../../../constants/homeNotice";
import { getColor } from "../../../styles/color";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1.2,
  centerMode: true,
  centerPadding: "15%",
};

type ThotIssues = {
  date: string;
  text: string;
};

function HotCarousel({ hotIssues }: { hotIssues: ThotIssues[] }) {
  return (
    <HotIssueContainer>
      <HotIssue>{HOTISSUE}</HotIssue>
      <Slider {...settings}>
        {hotIssues.map((issue, index) => (
          <HotIssueComponent key={index} date={issue.date} text={issue.text} />
        ))}
      </Slider>
    </HotIssueContainer>
  );
}

export default HotCarousel;

const HotIssueContainer = styled.div`
  margin-top: 30px;
`;
const HotIssue = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${getColor()};
  margin-bottom: 10px;
`;
