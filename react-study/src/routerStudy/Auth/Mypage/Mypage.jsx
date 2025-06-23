/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function Mypage(props) {
  const queryClient = useQueryClient();
  const principalUserQueryData = queryClient.getQueryData([
    "principalUserQuery",
  ]);
  // console.log(principalUserQueryData.data.principal);

  const [userInfo, setUserInfo] = useState({
    username: principalUserQueryData.data.principal.username,
    fullName: principalUserQueryData.data.principal.fullName,
    email: principalUserQueryData.data.principal.email,
  });

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordCheck: "",
  });

  const handleUserInfoOnChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordInfoOnChange = (e) => {
    setPasswordInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserInfoModificationOnClick = () => {
    const principal = principalUserQueryData.data.principal;

    if (!userInfo.fullName || !userInfo.email) {
      alert("사용자 또는 이메일을 입력하세요.");
      return;
    }

    if (
      principal.fullName === userInfo.fullName &&
      principal.email === userInfo.email
    ) {
      alert("변경사항이 없습니다.");
      return;
    }

    const accessToken = localStorage.getItem("AccessToken");
    axios.put(`http://localhost:8080/api/users/${principal.userId}`, userInfo, {
      headers: {
        Authorization: !accessToken ? null : `Bearer ${accessToken}`,
      },
    });
  };

  const handlePasswordInfoModificationOnClick = async () => {
    const principal = principalUserQueryData.data.principal;
    if (!!JSON.stringify(Object.values(passwordInfo).find((value) => !value))) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    //UserPasswordModifyDto
    const accessToken = localStorage.getItem("AccessToken");
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${principal.userId}/password`,
        passwordInfo,
        {
          headers: {
            Authorization: !accessToken ? null : `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
      const errorMessage = e.response.data;
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <div>
        <h2>사용자 정보변경</h2>
        <div>
          <input
            type="text"
            name="username"
            placeholder="사용자 이름"
            value={userInfo.username}
            onChange={handleUserInfoOnChange}
            readOnly
            disabled={true}
          />
        </div>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="성명"
            value={userInfo.fullName}
            onChange={handleUserInfoOnChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={userInfo.email}
            onChange={handleUserInfoOnChange}
          />
        </div>
        <button onClick={handleUserInfoModificationOnClick}>변경하기</button>
      </div>
      <div>
        <h2>비밀번호 변경</h2>
        <div>
          <input
            type="password"
            name="oldPassword"
            placeholder="기존 비밀번호 확인"
            value={passwordInfo.oldPassword}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="newPassword"
            placeholder="새 비밀번호"
            value={passwordInfo.newPassword}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="newPasswordCheck"
            placeholder="새 비밀번호 확인"
            value={passwordInfo.newPasswordCheck}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <button onClick={handlePasswordInfoModificationOnClick}>
          변경하기
        </button>
      </div>
    </div>
  );
}

export default Mypage;
