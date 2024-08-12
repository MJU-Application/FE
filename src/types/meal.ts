import { CAFETERIALIST } from "@/constants/meal";

export type Menu = {
  category: string;
  food: string[];
};

export interface APIMeal {
  id: number;
  date: string;
  day: string;
  cafeteria: string;
  menu: Menu[];
}

export type Meal = {
  date: string;
  campus: string;
  cafeteria: string;
};

export interface MealResponse {
  data: APIMeal[];
}

export interface CafeteriaModalProps {
  onClick: (selectedCafeteria: (typeof CAFETERIALIST)[number]["name"]) => void;
}
