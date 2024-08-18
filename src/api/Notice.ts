import api, { noticeApi, searchNoticeApi } from "../api";
import { APINotice, NoticeResponse } from "../types/notice";

// export async function getNotices(
//   page: number,
//   size: number,
//   category: string | null
// ): Promise<APINotice[]> {
//   return await noticeApi.get(
//     `/?page=${page}&size=${size}&category=${category}`
//   );
// }

export const getNotices = async (
  page: number,
  size: number,
  category: string | null
) => {
  const response = await fetch(
    `/api/notices?page=${page}&size=${size}&category=${category}`
  );
  const data: NoticeResponse = await response.json();
  return data;
};

export async function searchNotice(page: number, size: number, title: string) {
  return await searchNoticeApi.get(`?page=${page}&size=${size}&title=${title}`);
  // title을 keyword로 대체할 예정 server-json 사용하기 위해서 title로 임시 변경
}
