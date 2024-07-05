import api from "@/api";

export interface Notice {
  id: number;
  link: string;
  title: string;
  createdAt: string;
}

export interface NoticeResponse {
  data: Notice[];
}

export async function getNotices(): Promise<NoticeResponse> {
  return await api.get("/notice");
}
