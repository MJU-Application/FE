import api from "@/api";
import { APIMeal, Meal } from "@/types/meal";

export async function getMeal({
  date,
  campus,
  cafeteria,
}: Meal): Promise<APIMeal[]> {
  return await api.get(
    `menu?date=${date}&campus=${campus}&cafeteria=${cafeteria}`
  );
}
