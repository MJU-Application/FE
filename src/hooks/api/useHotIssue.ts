import { getHotIssue } from "@api/Home";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useHotIssue() {
  const QUERY_KEY = "HitIssue";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getHotIssue(),
  });
}
