import { useState, Fragment } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";
import title from "./assets/title.png";

function App() {
  const [mealList, setMealList] = useState([]);

  const addFoodToMeal = (food) => {
    if (mealList.includes(food)) {
      <p>{`Uh oh you added ${food} already!`}</p>;
    } else {
      setMealList([...mealList, food]);
    }
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex w-100">
        <div className="w-[60%]">
          <img src={title} className="w-[70%] mx-8 mt-4" />
          <p className="pl-20 text-xl">
            Click on the foods you ate today below
          </p>
        </div>
        <div className="w-[40%] h-100">
          <div className="border-grey border-4 bg-lgrey  rounded-xl w-[80%] h-[80%] mt-8 ml-4">
            {mealList.map((food) => {
              return <p key={food}>{food}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row place-content-center gap-x-2">
        {foodList.map((food) => {
          return (
            <Fragment key={food.color}>
              <FoodBox {...food} addFoodToMeal={addFoodToMeal} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
