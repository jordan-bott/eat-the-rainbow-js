/* eslint react/prop-types: 0 */
export default function FoodBox({
  text,
  background,
  border,
  highlight,
  foods,
  addFoodToMeal,
  color,
}) {
  return (
    <div
      className={`flex flex-col ${background} ${border}  border-4 w-[15%] mt-8 h-[64vh] rounded-xl`}
    >
      <div
        className={`my-6 text-center text-lg flex flex-col overflow-scroll scrollbar-thin scrollbar-thumb-rounded-lg`}
      >
        {foods.map((food) => {
          return (
            <ul
              className={`px-3 ${highlight}`}
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
