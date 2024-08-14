/** Date객체를 ~년 ~월로 포멧하는 함수 */
export const setDate = (date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};

/**
 * Date 객체를 받아서 08.11 또는 10.11과 같은 형식의 문자열로 반환하는 함수.
 * 월이 10 미만일 때는 앞에 0을 붙이고, 일이 10 미만일 때도 앞에 0을 붙임.
 *
 * @param date - 형식화할 Date 객체
 * @returns 월과 일을 두 자리로 포맷한 문자열
 */
export const setMealHeaderDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${formattedMonth}.${formattedDay}`;
};

/**
 * Date 객체를 받아서 2024-08-05 와 같은 형식의 문자열로 반환하는 함수.
 *
 * @param date - 형식화할 Date 객체
 * @returns 월과 일, 년도를 포맷한 문자열
 */
export const setMealDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
};
