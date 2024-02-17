import { useState, Fragment } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";
import title from "./assets/title.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mealList, setMealList] = useState([]);

  const addFoodToMeal = (food) => {
    if (mealList.find((f) => f.name === food.name)) {
      toast(`Uh oh, you already added ${food.name} to your list!`, {
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
          <div className="flex flex-wrap border-grey border-4 bg-lgrey rounded-xl w-[80%] h-[200px] mt-8 ml-4 columns-4 p-2 overflow-scroll scrollbar-thin scrollbar-thumb-rainbow scrollbar-thumb-rounded-lg">
            {mealList.map((food) => {
              return (
                <span
                  className={`hover:line-through ${food.textColor} m-2`}
                  key={food.name}
                  onClick={() => removeFoodFromMeal(food)}
                >
                  {food.name}
                </span>
              );
            })}
          </div>
          <button onClick={() => setMealList([])}>Clear All</button>
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
