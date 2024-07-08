import { getNotices, NoticeResponse } from "@/api/Notice";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useNotices(
  category: string | null
): UseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notices";
  return useQuery({
    queryKey: [QUERY_KEY, category],
    queryFn: () => getNotices(category),
  });
}

// useInfinitequery 로 수정할 예정임
