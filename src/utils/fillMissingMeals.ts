export const fillMissingMeals = (menu: any) => {
  const requiredMeals = ["조식", "중식", "석식"];
  const filledMenu = [...menu];

  requiredMeals.forEach((meal) => {
    // 해당 카테고리가 menu에 포함되어 있는지 확인
    const exists = filledMenu.some((item) => item.category === meal);

    if (!exists) {
      // 카테고리가 없다면, 빈 food 배열을 가진 객체를 추가
      filledMenu.push({
        id: Date.now() + Math.random(),
        category: meal,
        food: [],
      });
    }
  });

  // 카테고리 순서 유지 (조식, 중식, 석식 순서)
  filledMenu.sort(
    (a, b) =>
      requiredMeals.indexOf(a.category) - requiredMeals.indexOf(b.category)
  );

  return filledMenu;
};
