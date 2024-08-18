import api, { noticeApi, searchNoticeApi } from "../api";
import { NoticeResponse } from "../types/notice";

export async function getNotices(
  page: number,
  size: number,
  category: string | null
): Promise<NoticeResponse> {
  return await noticeApi.get(
    `/?page=${page}&size=${size}&category=${category}`
  );
}

export async function searchNotice(page: number, size: number, title: string) {
  return await searchNoticeApi.get(`?page=${page}&size=${size}&title=${title}`);
  // title을 keyword로 대체할 예정 server-json 사용하기 위해서 title로 임시 변경
}
