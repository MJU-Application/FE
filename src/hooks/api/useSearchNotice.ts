import { searchNotice } from "@/api/Notice";
import { NoticeResponse } from "@/types/notice";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export function useSearchNotice({
  page,
  size,
  category,
  title,
}: {
  page: number;
  size: number;
  category: string;
  title: string | null;
}): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "Notice";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY, title],
    queryFn: () => (title ? searchNotice(page, size, category, title) : null),
  });
}

// useInfinitequery 로 수정할 예정임
