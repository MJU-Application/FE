import { Notice } from "@/api/Notice";
import NotcieCard from "@/pages/notices/components/NoticeCard";
import styled from "styled-components";
import { useSearchNotice } from "@/hooks/api/useSearchNotice";

function SearchResult({ keyword }: { keyword: string | null }) {
  const { data } = useSearchNotice(keyword);

  return (
    <Result>
      {data?.data.map((notice: Notice) => (
        <NotcieCard
          key={notice.id}
          title={notice.title}
          link={notice.link}
          date={notice.noticedAt}
        />
      ))}
    </Result>
  );
}

export default SearchResult;

const Result = styled.div`
  padding: 0 1.3rem;
`;
