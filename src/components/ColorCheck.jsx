/* eslint react/prop-types: 0 */
export default function ColorCheck({ on, onColor, offColor, borderColor }) {
  return on ? (
    <div
      className={`rounded-full border-4 ${onColor} ${borderColor} h-[50px] w-[50px]`}
    ></div>
  ) : (
    <div
      className={`rounded-full border-4 ${offColor} ${borderColor} h-[50px] w-[50px]`}
    ></div>
  );
}
