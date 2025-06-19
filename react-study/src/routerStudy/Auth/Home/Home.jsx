/**@jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";

function Home(props) {
  const [isLogin, setLogin] = useState(true);
  
  return (
    <div css={s.layout}>
      <main></main>
    </div>
  );
}

export default Home;
