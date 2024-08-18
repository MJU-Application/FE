import { getNotices } from "../../api/Notice";
import {
  UseSuspenseQueryResult,
  useInfiniteQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { NoticeResponse } from "../../types/notice";

// export function useNotices(
//   category: string | null,
//   page: number,
//   size: number
// ): UseSuspenseQueryResult<NoticeResponse, Error> {
//   const QUERY_KEY = "Notices";
//   return useSuspenseQuery({
//     queryKey: [QUERY_KEY, category],
//     queryFn: () => getNotices(page, size, category),
//   });
// }

// useInfinitequery 로 수정할 예정임

export const useNotices = (category: string | null, size: number) => {
  const { data, isLoading, fetchNextPage, hasNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: ["getNotices", category],
      queryFn: ({ pageParam = 1 }) => getNotices(pageParam, size, category),
      initialPageParam: 1, // 첫 페이지를 요청하기 위한 초기 페이지 파라미터
      getNextPageParam: (lastPage, allPages) => {
        // 다음 페이지를 가져오기 위한 커서 반환
        return lastPage.nextCursor || undefined;
      },
      retry: 0,
    });

  return { data, isLoading, fetchNextPage, hasNextPage, ...rest };
};
