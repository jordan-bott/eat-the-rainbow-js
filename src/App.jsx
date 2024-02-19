import { useState, Fragment } from "react";
import foodList from "./data/foods";
import colors from "./data/colors";
import FoodBox from "./components/FoodBox";
import title from "./assets/title.png";
import ColorCheck from "./components/ColorCheck";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MealBox from "./components/MealBox";

function App() {
  const [mealList, setMealList] = useState([]);
  const [colorList, setColorList] = useState(colors);
  const [allColorToast, setAllColorToast] = useState(false);

  const updateColorList = (color, newMealList) => {
    const colorDict = colorList.reduce(
      (acc, { color, ...colorData }) => ({ ...acc, [color]: colorData }),
      {}
    );
    if (newMealList.some((food) => food.color === color)) {
      colorDict[color].on = true;
    } else {
      colorDict[color].on = false;
    }
    let allColors = true;
    for (let property in colorDict) {
      if (colorDict[property].on === false) {
        allColors = false;
        setAllColorToast(false);
        break;
      }
    }
    if (allColors === true && allColorToast === false) {
      toast("You did it! You ate every color today, great job!");
      setAllColorToast(true);
    }
    const colorArray = Object.entries(colorDict).map(([color, colorData]) => ({
      color,
      ...colorData,
    }));
    setColorList(colorArray);
  };

  const addFoodToMeal = (food) => {
    if (mealList.find((f) => f.name === food.name)) {
      toast(`Uh oh, you already added ${food.name} to your list!`);
    } else {
      const newMealList = [...mealList, food];
      updateColorList(food.color, newMealList);
      setMealList(newMealList);
    }
  };

  const removeFoodFromMeal = (food) => {
    const updatedList = mealList.filter((item) => item !== food);
    updateColorList(food.color, updatedList);
    setMealList(updatedList);
  };

  const clearMealList = () => {
    setColorList(colors);
    setMealList([]);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex w-100">
        <div className="w-[60%]">
          <img src={title} className="w-[70%] mx-8 mt-4" />
          <p className="pl-20 text-xl">
            Click on the foods you ate today below.{" "}
          </p>
          <p className="pl-20 text-xl pt-2">
            Every color has different phytonutrients! Aim to eat at least one
            food from each color every day.
          </p>
        </div>
        <div className="w-[40%] h-100">
          <MealBox
            mealList={mealList}
            removeFoodFromMeal={removeFoodFromMeal}
          />
          <button onClick={() => clearMealList()}>Clear All</button>
          <div className="flex flex-row flex-wrap w-[80%] justify-around ml-4">
            {colorList.map((color) => {
              return <ColorCheck {...color} key={color.color} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row place-content-center gap-x-4">
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
