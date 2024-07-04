import styled from "styled-components";
type ArticleProps = {
  title: string;
  date: string;
  link: string;
};

function Article({ title, date, link }: ArticleProps) {
  return (
    <Notice onClick={() => window.open(link)}>
      <div className="title">{title}</div>
      <div className="date">{date}</div>
    </Notice>
  );
}

const Notice = styled.div`
  height: 120px;
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
  }

  .date {
    font-size: 1.1rem;
    color: #92929a;
  }
`;

export default Article;
