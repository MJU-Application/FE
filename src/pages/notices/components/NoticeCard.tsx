import { Link } from "react-router-dom";
import styled from "styled-components";
type NotcieCardProps = {
  title: string;
  date: string;
  link: string;
};

function NotcieCard({ title, date, link }: NotcieCardProps) {
  return (
    <Link to={link}>
      <Notice>
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </Notice>
    </Link>
  );
}

const Notice = styled.div`
  height: 120px;
  max-width: 45rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding: 3rem;
  margin: 1rem 0px;
  cursor: pointer;

  .title,
  .date {
    font-weight: 600;
    line-height: normal;
  }

  .title {
    font-size: 1.4rem;
    padding-bottom: 2rem;
  }

  .date {
    font-size: 1.1rem;
    color: #92929a;
  }
`;

export default NotcieCard;
