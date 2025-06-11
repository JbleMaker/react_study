/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";

const style = (p1, p2) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  border: 3px solid ${p2 ? "#000" : "blue"};
  background-color: ${p1 ? "red" : "blue"};
`;

function Effect2(props) {
  const [flag, setFlag] = useState(false);

  const handleOnClick = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <div css={style(flag, !flag)}></div>
      <button onClick={handleOnClick}>변경</button>
    </div>
  );
}

export default Effect2;
