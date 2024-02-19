/* eslint react/prop-types: 0 */
export default function MealBox({ mealList, removeFoodFromMeal }) {
  return (
    <div className="flex flex-wrap border-grey border-4 bg-lgrey rounded-xl w-[80%] h-[180px] mt-8 ml-4 columns-4 p-2 overflow-scroll scrollbar-thin scrollbar-thumb-rainbow scrollbar-thumb-rounded-lg">
      {mealList.map((food) => {
        return (
          <span
            className={`hover:line-through ${food.textColor} m-2 h-[30px]`}
            key={food.name}
            onClick={() => removeFoodFromMeal(food)}
          >
            {food.name}
          </span>
        );
      })}
    </div>
  );
}
