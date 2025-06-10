import { useState } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

function InputState3() {
  const studentInputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };

  const [studentInputValue, setStudentInputValue] = useState(
    studentInputValueEmpty
  );

  const [checked, setChecked] = useState(studentInputValueEmpty);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStudentInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnClick = () => {
    setChecked((prev) => ({ ...studentInputValue }));
  };

  const { name, age, address } = checked;

  return (
    <>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
      <h1>주소: {address}</h1>

      <InputBox>
        <input
          type="text"
          name="name"
          onChange={handleOnChange}
          value={studentInputValue.name}
          placeholder="이름"
        />
        <input
          type="text"
          name="age"
          onChange={handleOnChange}
          value={studentInputValue.age}
          placeholder="나이"
        />
        <input
          type="text"
          name="address"
          onChange={handleOnChange}
          value={studentInputValue.address}
          placeholder="주소"
        />
        <button onClick={handleOnClick}>확인</button>
      </InputBox>
    </>
  );
}

export default InputState3;
