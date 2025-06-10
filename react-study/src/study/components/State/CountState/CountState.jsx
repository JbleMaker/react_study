import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

const CountState = () => {
  const [count, setCount] = useState(0);
  console.log("Rendering");

  const handleIncreaseOnClick = (e) => {
    setCount((count) => count + 1);
    console.log(count);
  };

  const handleDecreaseOnClick = (e) => {
    setCount((count) => count - 1);
    console.log(count);
  };

  return (
    <div>
      <CountHeader count={count} />
      <CountButton text={"+1"} value={1} onClick={handleIncreaseOnClick} />
      <CountButton text={"-1"} value={-1} onClick={handleDecreaseOnClick} />
    </div>
  );
};

export default CountState;
