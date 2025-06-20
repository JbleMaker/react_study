import React, { useEffect, useState } from "react";
import RootLayout from "../RootLayout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import UnAuthRouter from "./UnAuthRouter";
import AuthRouter from "./AuthRouter";
import NotFound from "../NotFound/NotFound";
import RootHeader from "../RootHeader/RootHeader";
import axios from "axios";
import { useLogin, useStore } from "../stores/storeStudy";
import { useQuery } from "@tanstack/react-query";

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역상태 (Zustand, recoil => react19에서 지원x)
 * 2. 서버 전역 상태 (react-query)
 */

function MainRouterReactQuery(props) {
  const principalUserQuery = useQuery({
    queryKey: ["principalUserQuery"],
    queryFn: async () => {
      const accessToken = localStorage.getItem("AccessToken");
      return await axios.get("http://localhost:8080/api/users/principal", {
        headers: {
          Authorization: !accessToken ? null : `Bearer ${accessToken}`,
        },
      });
    },
    
    // 해당 시간동안 재실행이 되지 않음.
    // gcTime: 6000 * 10
    // 가비지컬랙터가 동작할 시간,
    // 해당 시간이 지나게 되면 쿼리에 대한 캐시가 삭제됨.
  });

  console.log(principalUserQuery.isLoading);
  console.log(principalUserQuery.data);

  return (
    <>
      {!principalUserQuery.isLoading && (
        <RootLayout>
          <RootHeader />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/users/*" element={<UnAuthRouter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RootLayout>
      )}
    </>
  );
}

export default MainRouterReactQuery;
