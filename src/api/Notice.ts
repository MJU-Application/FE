import api from "@/api";

export interface Notice {
  id: number;
  category: string;
  notice_no: number;
  title: string;
  writer: string;
  noticedAt: string;
  views: number;
  link: string;
}

export interface NoticeResponse {
  data: Notice[];
}

export async function getNotices(
  category: string | null
): Promise<NoticeResponse> {
  return await api.get(`/notice?category=${category}`);
}
export async function searchNotice(keyword: string | null) {
  return await api.get(`notice?title=${keyword}`);
  // title을 keyword로 대체할 예정 server-json 사용하기 위해서 title로 임시 변경
}
