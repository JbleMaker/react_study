import React, { useEffect, useState } from "react";
import RootLayout from "../RootLayout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./../Home/Home";
import UnAuthRouter from "./UnAuthRouter";
import AuthRouter from "./AuthRouter";
import NotFound from "../NotFound/NotFound";
import RootHeader from "../RootHeader/RootHeader";
import axios from "axios";
import { useGlobalStateStore, useLogin, useStore } from "../stores/storeStudy";

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역상태 (Zustand, recoil => react19에서 지원x)
 * 2. 서버 전역 상태 (react-query)
 */

function MainRouter(props) {
  // const [isLogin, setLogin] = useState(false);
  const { isLogin, setLogin } = useLogin();
  const { value: isRefresh, setValue: setRefresh } = useStore();

  useEffect(() => {
    if (isRefresh) {
      const accessToken = localStorage.getItem("AccessToken");
      if (!!accessToken) {
        axios
          .get("http://localhost:8080/api/users/login/status", {
            headers: {
              Authorization: !accessToken ? null : `Bearer ${accessToken}`,
              // Bearer ==> jWt 토큰 표준으로 약속 키워드
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.login) {
              setLogin();
            }
          });
      }
      setRefresh((prev) => false);
    }
  }, [isRefresh]);

  return (
    <RootLayout>
      <RootHeader />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/users/*" element={<UnAuthRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default MainRouter;
