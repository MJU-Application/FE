export interface APISchedules {
  id: number;
  year: number;
  month: number;
  schedule: Schedule[];
}

export type Schedule = {
  period: string;
  contents: string;
};

export interface SchedulesResponse {
  data: APISchedules;
}

export interface HeaderNextButtonProps {
  date: Date;
  handleChangeMonth: (direction: "next" | "previous") => void;
}
