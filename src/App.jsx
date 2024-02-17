import { useState, Fragment } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";
import title from "./assets/title.png";
import ColorCheck from "./components/ColorCheck";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [mealList, setMealList] = useState([]);
  const [colorList, setColorList] = useState([
    {
      color: "red",
      on: "false",
      onColor: "bg-red",
      offColor: "bg-tred",
      borderColor: "border-red",
    },
    {
      color: "orange",
      on: "false",
      onColor: "bg-orange",
      offColor: "bg-torange",
      borderColor: "border-orange",
    },
    {
      color: "yellow",
      on: "false",
      onColor: "bg-yellow",
      offColor: "bg-tyellow",
      borderColor: "border-yellow",
    },
    {
      color: "green",
      on: "false",
      onColor: "bg-green",
      offColor: "bg-tgreen",
      borderColor: "border-green",
    },
    {
      color: "blue",
      on: "false",
      onColor: "bg-blue",
      offColor: "bg-tblue",
      borderColor: "border-blue",
    },
    {
      color: "white",
      on: "false",
      onColor: "bg-grey",
      offColor: "bg-tgrey",
      borderColor: "border-grey",
    },
  ]);

  const updateColorList = (color) => {
    if (mealList.some((c) => c === color) && !colorList.includes(color)) {
      setColorList([...colorList, color]);
    } else if (!mealList.some((c) => c.color === color)) {
      const updatedColorList = colorList.filter((c) => c !== color);
      setColorList(updatedColorList);
    } else {
      /* pass */
    }
  };

  const addFoodToMeal = (food) => {
    if (mealList.find((f) => f.name === food.name)) {
      toast(`Uh oh, you already added ${food.name} to your list!`, {
        position: "bottom-right",
      });
    } else {
      setMealList([...mealList, food]);
      updateColorList(food.color);
    }
  };

  const removeFoodFromMeal = (food) => {
    const updatedList = mealList.filter((item) => item !== food);
    setMealList(updatedList);
    updateColorList(food.color);
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
                  className={`hover:line-through ${food.textColor} m-2 h-[30px]`}
                  key={food.name}
                  onClick={() => removeFoodFromMeal(food)}
                >
                  {food.name}
                </span>
              );
            })}
          </div>
          <button onClick={() => setMealList([])}>Clear All</button>
          <div className="flex flex-row flex-wrap w-[80%] justify-around ml-4">
            {colorList.map((color) => {
              console.log(color.on);
              return <ColorCheck {...color} key={color.color} />;
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
