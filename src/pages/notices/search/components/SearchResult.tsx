import { APINotice } from "@/types/notice";
import NotcieCard from "@/pages/notices/components/NoticeCard";
import styled from "styled-components";
import { useSearchNotice } from "@/hooks/api/useSearchNotice";

function SearchResult({ title }: { title: string | null }) {
  // const { data } = useSearchNotice({
  //   page: 0,
  //   size: 10,
  //   category: "학사공지",
  //   title: title,
  // });

  return (
    <Result>
      {/* {data?.data.map((notice: APINotice) => (
        <NotcieCard
          key={notice.id}
          title={notice.title}
          link={notice.link}
          date={notice.noticedAt}
        />
      ))} */}
    </Result>
  );
}

export default SearchResult;

const Result = styled.div`
  padding: 0 1.3rem;
`;
