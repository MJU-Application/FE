import api, { scheduleApi } from "@/api";
import { APISchedules } from "@/types/schedule";

export async function getSchedule({
  year,
  month,
}: {
  year: number;
  month: number;
}): Promise<APISchedules> {
  const response = await scheduleApi.get("/", {
    params: { year: year, month: month },
  });
  return response.data;
}
