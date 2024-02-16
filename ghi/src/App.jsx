import { useState, Fragment } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";
import title from "./assets/title.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mealList, setMealList] = useState([]);

  const addFoodToMeal = (food) => {
    if (mealList.includes(food)) {
      toast(`Uh oh, you already added ${food} to your list!`, {
        position: "bottom-right",
      });
    } else {
      setMealList([...mealList, food]);
    }
  };

  const removeFoodFromMeal = (food) => {
    const updatedList = mealList.filter((item) => item !== food);
    setMealList(updatedList);
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
          <div className="border-grey border-4 bg-lgrey rounded-xl w-[80%] h-[80%] mt-8 ml-4 columns-4 p-2 content-around">
            {mealList.map((food) => {
              return (
                <p
                  className="hover:line-through"
                  key={food}
                  onClick={() => removeFoodFromMeal(food)}
                >
                  {food}
                </p>
              );
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
      <ToastContainer />
    </div>
  );
}

export default App;
