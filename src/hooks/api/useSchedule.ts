import { getSchedule } from "@/api/Schedule";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { SchedulesResponse } from "@/types/schedule";

export function useSchedule({
  year,
  month,
}: {
  year: number;
  month: number;
}): UseSuspenseQueryResult<SchedulesResponse, Error> {
  const QUERY_KEY = "Schedule";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getSchedule({ year, month }),
  });
}
