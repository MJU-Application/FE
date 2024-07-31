import { NextButton } from "@/assets/svg";
import { getColor } from "@/styles/color";
import styled from "styled-components";

const HeaderNextButton = ({ title }: { title: string }) => {
  return (
    <Container>
      <NextButton stroke={getColor()} />
      <Title>{title}</Title>
      <NextButton stroke={getColor()} style={{ transform: "rotate(180deg)" }} />
    </Container>
  );
};

export default HeaderNextButton;

const Container = styled.div`
  display: flex;
  gap: 9px;
  padding: 4px 0;
`;

const Title = styled.p`
  color: ${getColor()};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
