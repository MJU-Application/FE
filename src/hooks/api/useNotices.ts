import { getNotices } from "@/api/Notice";
import {
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { NoticeResponse } from "@/types/notice";

export function useNotices(
  category: string | null
): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notices";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY, category],
    queryFn: () => getNotices(category),
  });
}

// useInfinitequery 로 수정할 예정임
