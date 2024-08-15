export interface APINotice {
  id: number;
  type: string;
  notice_no: number;
  title: string;
  writer: string;
  noticedAt: string;
  views: number;
  link: string;
}

export interface Page {
  currentPage: number;
  pageSize: number;
}

export interface NoticeResponse {
  data: APINotice[];
  pagination: Page;
}
