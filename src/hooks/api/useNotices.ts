import { getNotices, NoticeResponse } from "@/api/Notice";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useNotices(): UseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notices";
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getNotices(),
  });
}

// useInfinitequery 로 수정할 예정임
