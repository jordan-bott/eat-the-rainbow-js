import { useState, Fragment } from "react";
import foodList from "./data/foods";
import FoodBox from "./components/FoodBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p> Hi</p>
      {foodList.map((food) => {
        return (
          <Fragment key={food.color}>
            <p>{food.color}</p>
            <FoodBox {...food} />
          </Fragment>
        );
      })}
    </>
  );
}

export default App;
