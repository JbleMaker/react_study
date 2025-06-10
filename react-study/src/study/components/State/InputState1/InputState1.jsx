import { useState } from "react";

export default function InputState1() {
  const [inputValue, setInputValue] = useState("");
  const [checkedValue, setCheckedValue] = useState("");

  const handleOnClick = (e) => {
    setCheckedValue(inputValue);
    setInputValue("");
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>{checkedValue}</h1>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <button onClick={handleOnClick}>확인</button>
    </div>
  );
}
