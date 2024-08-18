import { getMeal } from "../../api/Meal";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { MealResponse, Meal } from "../../types/meal";

export function useMeal({
  date,
  cafeteria,
}: Meal): UseSuspenseQueryResult<MealResponse, Error> {
  const QUERY_KEY = "Meal";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY, date],
    queryFn: () => getMeal({ date, cafeteria }),
  });
}
