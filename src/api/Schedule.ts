import { scheduleApi } from "../api";
import { APISchedules } from "../types/schedule";

export async function getSchedule({
  year,
  month,
}: {
  year: number;
  month: number;
}): Promise<APISchedules> {
  return await scheduleApi.get(`/?year=${year}&month=${month}`);
}
