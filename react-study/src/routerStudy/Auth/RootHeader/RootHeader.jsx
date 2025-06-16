/**@jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";
import { LuUser, LuUserPlus, LuLogOut } from "react-icons/lu";
import React, { useState } from "react";

function RootHeader() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <header css={s.layout}>
      <h1>
        <Link to={"/"}>사이트 로고</Link>
      </h1>
      {isLogin ? (
        <ul>
          <li>
            <Link to={"/auth/mypage"}>
              <LuUser />
            </Link>
          </li>
          <li>
            <Link to={"/auth/logout"}>
              <LuLogOut />
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"/users/signin"}>
              <LuUser />
            </Link>
          </li>
          <li>
            <Link to={"/users/signup"}>
              <LuUserPlus />
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default RootHeader;
