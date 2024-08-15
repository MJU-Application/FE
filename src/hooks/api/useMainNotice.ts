import { getMainNotice } from "@/api/Home";
import { NoticeResponse, NoticeType } from "@/types/home";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export function useMainNotice({
  type,
}: NoticeType): UseSuspenseQueryResult<NoticeResponse, Error> {
  const QUERY_KEY = "HomeMainNotice";

  return useSuspenseQuery({
    queryKey: [QUERY_KEY, type],
    queryFn: () => getMainNotice({ type }),
  });
}
