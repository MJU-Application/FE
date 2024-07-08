import { NoticeResponse, searchNotice } from "@/api/Notice";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useSearchNotice(
  keyword: string | null
): UseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notice";
  return useQuery({
    queryKey: [QUERY_KEY, keyword],
    queryFn: () => searchNotice(keyword),
    enabled: !!keyword,
  });
}

// useInfinitequery 로 수정할 예정임
