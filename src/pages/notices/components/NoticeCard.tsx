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
        <div className="content">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
      </Notice>
    </Link>
  );
}

const Notice = styled.div`
  height: 90px;
  max-width: 45rem;
  border-radius: 12px;
  background: #fff;
  /* box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05); */
  padding: 1.5rem;
  margin: 1rem 0px;
  cursor: pointer;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .title,
  .date {
    font-weight: 600;
    line-height: normal;
  }

  .title {
    font-size: 1.4rem;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .date {
    font-size: 1.1rem;
    color: #92929a;
    margin-top: 0.5rem;
  }
`;

export default NotcieCard;
