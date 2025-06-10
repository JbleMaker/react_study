import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("0");

  // const getResult = () => {
  //   let inputText = input;
  //   let plusNums = [];
  //   let minusNums = [];
  //   let lastCalc = "";

  //   const plusIndex = inputText.indexOf("+");
  //   const minusIndex = inputText.indexOf("-");

  //   if (plusIndex === -1 && minusIndex === -1) {
  //     return;
  //   }
  //   if (plusIndex < 0) {
  //     const numText = inputText.substring(0, minusIndex);
  //     const restNumText = inputText.substring(minusIndex + 1);
  //     console.log(numText);
  //     console.log(restNumText);
  //   }

  //   if (minusIndex < 0) {
  //     const numText = inputText.substring(0, plusIndex);
  //     const restNumText = inputText.substring(plusIndex + 1);
  //     console.log(numText);
  //     console.log(restNumText);
  //   }

  //   if (plusIndex < minusIndex) {
  //     const numText = inputText.substring(0, plusIndex);
  //     const restNumText = inputText.substring(plusIndex + 1);
  //   } else {
  //     const numText = inputText.substring(0, minusIndex);
  //     const restNumText = inputText.substring(minusIndex + 1);
  //   }
  // };

  const handleInputOnClick = (e) => {
    if (e.target.innerText === "=") {
      setResult(eval(input));
      setInput("0");
      return;
    }

    if (input === "0") {
      setInput(e.target.innerText);
    } else {
      setInput(input + e.target.innerText);
    }
  };

  const handelClearOnClick = () => {
    setInput("0");
  };

  return (
    <div>
      <h1>입력: {input}</h1>
      <h1>출력: {result}</h1>
      <div>
        <button onClick={handleInputOnClick}>0</button>
        <button onClick={handelClearOnClick}>C</button>
      </div>
      <div>
        <button onClick={handleInputOnClick}>1</button>
        <button onClick={handleInputOnClick}>2</button>
        <button onClick={handleInputOnClick}>3</button>
      </div>
      <div>
        <button onClick={handleInputOnClick}>4</button>
        <button onClick={handleInputOnClick}>5</button>
        <button onClick={handleInputOnClick}>6</button>
      </div>
      <div>
        <button onClick={handleInputOnClick}>7</button>
        <button onClick={handleInputOnClick}>8</button>
        <button onClick={handleInputOnClick}>9</button>
      </div>
      <div>
        <button onClick={handleInputOnClick}>+</button>
        <button onClick={handleInputOnClick}>-</button>
        <button onClick={handleInputOnClick}>=</button>
      </div>
    </div>
  );
}
