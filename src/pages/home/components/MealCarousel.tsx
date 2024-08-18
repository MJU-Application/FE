import { Menu } from "../../../types/meal";
import Slider from "react-slick";
import MealCard from "../../../components/common/MealCard";
import { getMealTime } from "../../../utils/getMealTime";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function MealCarousel({ mealMenu }: { mealMenu: Menu[] }) {
  return (
    <Slider {...settings}>
      {mealMenu.map((meal: Menu) => (
        <MealCard
          category={meal.category}
          time={getMealTime(meal.category)}
          mealMenus={meal.food}
        />
      ))}
    </Slider>
  );
}

export default MealCarousel;
