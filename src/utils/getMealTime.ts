/**
 * 식단 Category에 맞는 시간대를 리턴해주는 함수
 * @param category - 시간대를 원하는 카테고리 (ex: 조식)
 * @return 시간대 (ex: 8:00~9:00)
 */
export const getMealTime = (category: string): string => {
  const mealTimes: { [key: string]: string } = {
    조식: "8:00~9:00",
    중식: "11:30~14:00",
    석식: "17:00~18:30",
  };

  return mealTimes[category] || "error"; // 객체에서 찾지 못하면 기본 값 반환
};
