export interface HotissueProp {
  date: string;
  text: string;
}

export interface HomeNoticeCardProp {
  title: string;
  date: string;
}

export interface MealCardProp {
  category: string;
  time: string;
  mealMenus: string[];
}

export type NoticeType = {
  type: string | null;
};

export interface Notice {
  id: number;
  type: string;
  notice_no: number;
  title: string;
  writer: string;
  noticedAt: string;
  views: number;
  link: string;
}

export interface NoticeResponse {
  success: boolean;
  data: {
    content: Notice[];
  };
}
