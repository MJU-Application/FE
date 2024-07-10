import api from "@/api";
import { APINotice } from "@/types/notice";

export async function getNotices(type: string | null): Promise<APINotice[]> {
  return await api.get(`/notice?type=${type}`);
}
export async function searchNotice(keyword: string | null) {
  return await api.get(`notice?title=${keyword}`);
  // title을 keyword로 대체할 예정 server-json 사용하기 위해서 title로 임시 변경
}
