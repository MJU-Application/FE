import api, { mealApi } from "../api";
import { APIMeal, Meal } from "../types/meal";

export async function getMeal({ date, cafeteria }: Meal): Promise<APIMeal[]> {
  return await mealApi.get(`?date=${date}&cafeteria=${cafeteria}`);
}
