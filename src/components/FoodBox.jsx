/* eslint react/prop-types: 0 */
export default function FoodBox({
  text,
  background,
  border,
  highlight,
  foods,
  addFoodToMeal,
  color,
  mealList,
}) {
  return (
    <div
      className={`flex flex-col ${background} ${border}  border-4 w-[15%] mt-8 h-[64vh] rounded-xl`}
    >
      <div
        className={`my-6 text-center text-lg flex flex-col overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg`}
      >
        {foods.map((food) => {
          let foodInList = null;
          console.log(mealList.find((f) => f.name === food));
          mealList.find((f) => f.name === food)
            ? (foodInList = "hover:cursor-not-allowed line-through")
            : (foodInList = `hover:cursor-pointer ${highlight}`);
          return (
            <ul
              className={`px-3 ${foodInList}`}
              key={food}
              onClick={() =>
                addFoodToMeal({ name: food, textColor: text, color: color })
              }
            >
              {food}
            </ul>
          );
        })}
      </div>
    </div>
  );
}
