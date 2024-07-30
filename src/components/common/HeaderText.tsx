import { getColor } from "@/styles/color";
import styled from "styled-components";

function HeaderText({ text }: { text: string }) {
  return <Header>{text}</Header>;
}

const Header = styled.div`
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  color: ${getColor()};
`;
export default HeaderText;
