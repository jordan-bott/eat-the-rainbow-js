import { useState } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p> Hi</p>
      {foodList.map((food) => {
        return (
          <>
            <p key={food.color}>{food.color}</p>
            <FoodBox food={food} />
          </>
        );
      })}
    </>
  );
}

export default App;
