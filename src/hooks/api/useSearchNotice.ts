import { NoticeResponse, searchNotice } from "@/api/Notice";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export function useSearchNotice(
  keyword: string | null
): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notice";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY, keyword],
    queryFn: () => (keyword ? searchNotice(keyword) : null),
  });
}

// useInfinitequery 로 수정할 예정임
