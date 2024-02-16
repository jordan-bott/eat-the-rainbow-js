/* eslint react/prop-types: 0 */
export default function FoodBox({ background, border, highlight }) {
  return (
    <div
      className={`flex flex-col ${background} ${border} border-4 w-[15%] my-8 h-[70vh] rounded-xl`}
    >
      <p>{highlight}</p>
    </div>
  );
}
