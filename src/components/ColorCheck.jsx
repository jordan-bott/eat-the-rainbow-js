export default function ColorCheck({ color, on, onColor, offColor }) {
  //   console.log(on);
  //   if (on === "true") {
  //     return <div className={`rounded-full ${onColor} h-[50px] w-[50px]`}></div>;
  //   } else {
  //     return <div className={`rounded-full ${offColor} h-[50px] w-[50px]`}></div>;
  //   }
  return on ? (
    <div className={`rounded-full ${onColor} h-[50px] w-[50px]`}></div>
  ) : (
    <div className={`rounded-full ${offColor} h-[50px] w-[50px]`}></div>
  );
}
