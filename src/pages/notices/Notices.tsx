import styled from "styled-components";
import Article from "./components/Article";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import { useState } from "react";

function Notices() {
  const [menu, setMenu] = useState<string>("일반");
  const NOTICES = [
    {
      title:
        "[자연진로취업지원팀] 2024-1학기 온라인 모의 면접프로그램 참여 학생 모집",
      link: "https://www.mju.ac.kr/bbs/mjukr/141/213267/artclView.do",
      date: "07.04",
      id: 1,
    },
    {
      title:
        "[자연진로취업지원팀] 2024-1학기 온라인 모의 면접프로그램 참여 학생 모집",
      link: "https://www.mju.ac.kr/bbs/mjukr/141/213267/artclView.do",
      date: "07.04",
      id: 2,
    },
    {
      title:
        "[자연진로취업지원팀] 2024-1학기 온라인 모의 면접프로그램 참여 학생 모집",
      link: "https://www.mju.ac.kr/bbs/mjukr/141/213267/artclView.do",
      date: "07.04",
      id: 3,
    },
    {
      title:
        "[자연진로취업지원팀] 2024-1학기 온라인 모의 면접프로그램 참여 학생 모집",
      link: "https://www.mju.ac.kr/bbs/mjukr/141/213267/artclView.do",
      date: "07.04",
      id: 4,
    },
    {
      title:
        "[자연진로취업지원팀] 2024-1학기 온라인 모의 면접프로그램 참여 학생 모집",
      link: "https://www.mju.ac.kr/bbs/mjukr/141/213267/artclView.do",
      date: "07.04",
      id: 5,
    },
  ];

  return (
    <>
      <SearchBar />
      <Menu menu={menu} setMenu={setMenu} />
      <NoticeWrapper>
        {NOTICES.map((notice) => (
          <Article
            title={notice.title}
            date={notice.date}
            link={notice.link}
            key={notice.id}
          />
        ))}
      </NoticeWrapper>
    </>
  );
}

export default Notices;
const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;
