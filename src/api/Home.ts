import { mainNoticeApi, hotIssueApi } from "../api";
import { NoticeResponse, NoticeType } from "../types/home";

export async function getMainNotice({
  type,
}: NoticeType): Promise<NoticeResponse> {
  const response = await mainNoticeApi.get(`?category=${type}`);
  return response?.data;
}

export async function getHotIssue(): Promise<NoticeResponse> {
  const response = await hotIssueApi.get("/");
  return response?.data;
}
