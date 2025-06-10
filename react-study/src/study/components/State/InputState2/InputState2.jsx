import { useState } from "react";

export default function InputState2() {
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`name: ${name}, value: ${value}`);

    const newInputValue = {
      ...inputValue,
      [name]: value,
    };

    setInputValue(newInputValue);
  };

  return (
    <div>

      <input
        name="t1"
        type="text"
        value={inputValue.t1}
        onChange={handleOnChange}
      />
      <input
        name="t2"
        type="text"
        value={inputValue.t2}
        onChange={handleOnChange}
      />
      <input
        name="t3"
        type="text"
        value={inputValue.t3}
        onChange={handleOnChange}
      />
    </div>
  );
}
