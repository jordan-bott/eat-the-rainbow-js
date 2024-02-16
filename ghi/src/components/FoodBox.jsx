/* eslint react/prop-types: 0 */
import { ReactPropTypes } from "react";

export default function FoodBox(props) {
  let foodDict = props.food;
  return (
    <div
      className={`flex flex-col border-${foodDict.darkColor} border-4 bg-${foodDict.lightColor} w-[15%] my-8 h-[70vh] rounded-xl`}
    >
      <p>{foodDict.color}</p>
    </div>
  );
}
