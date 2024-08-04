/** Date객체를 ~년 ~월로 포멧하는 함수 */
export const setDate = (date: Date) => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};
