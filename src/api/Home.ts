import { mainNoticeApi } from "@/api";
import { NoticeResponse, NoticeType } from "@/types/home";

export async function getMainNotice({
  type,
}: NoticeType): Promise<NoticeResponse> {
  return await mainNoticeApi.get(`?type=${type}`);
}
