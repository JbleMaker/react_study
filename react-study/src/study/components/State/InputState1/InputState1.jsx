import { useState } from "react";

export default function InputState1() {
  const [inputValue, setInputValue] = useState({
    name1: "",
    name2: "",
  });
  const [checkedValue, setCheckedValue] = useState({
    checkedName1: "",
    checkedName2: "",
  });

  const { name1, name2 } = inputValue;

  const handleOnClick = (e) => {
    const { name1, name2 } = inputValue;
    let { checkedName1, checkedName2 } = setCheckedValue;

    checkedName1 = name1;
    checkedName2 = name2;
  };

  const handleOnChange = (e) => {
    const { name1, name2 } = e.target;
    setInputValue({
      ...inputValue,
      [name1]: name1,
      [name2]: name2,
    });
  };

  return (
    <div>
      <h1>{checkedValue.checkedName1}</h1>
      <h1>{checkedValue.checkedName2}</h1>
      <input name="name1" type="text" value={name1} onChange={handleOnChange} />
      <input name="name2" type="text" value={name2} onChange={handleOnChange} />
      <button onClick={handleOnClick}>확인</button>
    </div>
  );
}
