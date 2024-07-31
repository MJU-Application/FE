import api from "@/api";
import { APISchedules } from "@/types/schedule";

export async function getSchedule({
  year,
  month,
}: {
  year: number;
  month: number;
}): Promise<APISchedules> {
  return await api.get(`/schedule?year=${year}&month=${month}`);
}
