export interface APINotice {
  category: string;
  link: string;
  notice_id: number;
  notice_no: number;
  noticedAt: string;
  title: string;
  views: number;
  writer: string;
}

export interface Page {
  currentPage: number;
  pageSize: number;
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalPlaces: number; // 전체 항목 수를 나타내는 필드
}

export interface Notices {
  notices: APINotice[];
  pagination: Pagination;
}

export interface NoticeData {
  total_places: any;
  data: Notices;
}

export interface NoticeResponse {
  notices: any;
  nextCursor: any;
  data: NoticeData;
  pagination: Page;
}
