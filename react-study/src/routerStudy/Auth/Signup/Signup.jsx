/**@jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { MdOutlineCheckCircle, MdOutlineErrorOutline } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useSignInAndUpInput({ id, type, name, placeholder, value, valid }) {
  const STATUS = {
    idle: "idle",
    success: "success",
    error: "error",
  };
  const [inputValue, setInputValue] = useState(value);
  const [status, setStatus] = useState(STATUS.idle);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnBlur = (e) => {
    if (isEmpty(e.target.value)) {
      setStatus(STATUS.idle);
      return;
    }
    if (valid.enabled) {
      setStatus(
        valid.regex.test(e.target.value) ? STATUS.success : STATUS.error
      );
      return;
    }

    setStatus(valid.callback() ? STATUS.success : STATUS.error);
  };

  const isEmpty = (str) => {
    return !/^.+$/.test(str);
  };

  return {
    name: name,
    value: inputValue,
    status: status,
    element: (
      <SignInAndUpInput
        key={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        status={status}
        message={valid.message}
      />
    ),
  };
}

function SignInAndUpInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  status,
  message,
}) {
  const { isShow, element: PasswordInputHiddenButton } =
    usePasswordInputHiddenButton();
  // console.log(status);

  return (
    <div css={s.inputItem}>
      <div css={s.inputContainer(status)}>
        <input
          type={type === "password" ? (isShow ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type === "password" && PasswordInputHiddenButton}
        {status !== "idle" &&
          (status === "success" ? (
            <div>
              <MdOutlineCheckCircle />
            </div>
          ) : (
            <div>
              <MdOutlineErrorOutline />
            </div>
          ))}
      </div>
      <InputValidatedMessage status={status} message={message} />
    </div>
  );
}

function usePasswordInputHiddenButton() {
  const [isShow, setShow] = useState(false);

  const handleOnClick = () => {
    setShow((prev) => !prev);
  };

  return {
    isShow,
    element: (
      <PasswordInputHiddenButton isShow={isShow} onClick={handleOnClick} />
    ),
  };
}

function PasswordInputHiddenButton({ isShow, onClick }) {
  return <p onClick={onClick}>{isShow ? <IoEyeOff /> : <IoEye />}</p>;
}

function InputValidatedMessage({ status, message }) {
  const ERROR = "error";
  if (status === ERROR) {
    return <div css={s.messageContainer()}>{message}</div>;
  }
  return <></>;
}

function Signup(props) {
  const navigate = useNavigate();
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "사용자이름",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
        message: "아이디는 영문, 숫자를 포함 4~20자여야 합니다.",
      },
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "비밀번호",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-z])(?=.*\d).{4,20}$/,
        message:
          "비밀번호는 8~20자이며, 영문·숫자·특수문자를 모두 포함해야 합니다.",
      },
    },
    {
      id: 3,
      type: "password",
      name: "checkPassword",
      placeholder: "비밀번호 확인",
      value: "",
      valid: {
        enabled: false,
        regex: null,
        callback: () => inputItems[1].inputValue === inputItems[2].inputValue,
        message: "비밀번호가 서로 일치하지 않습니다.",
      },
    },
    {
      id: 4,
      type: "text",
      name: "fullName",
      placeholder: "성명",
      value: "",
      valid: {
        enabled: true,
        regex: /^[가-힣]{2,20}$/,
        message: "이름은 한글 2~20자여야 합니다.",
      },
    },
    {
      id: 5,
      type: "email",
      name: "email",
      placeholder: "E-Mail",
      value: "",
      valid: {
        enabled: true,
        regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: "유효하지 않은 이메일 양식입니다.",
      },
    },
  ];

  const inputItems = inputs.map((input) => useSignInAndUpInput(input));

  useEffect(() => {
    setSubmitDisabled(
      !!inputItems.find((inputItem) => inputItem.status !== "success")
    );
  }, [inputItems]);

  const handleRegisterOnClick = async () => {
    // db 연결 및 데이터 push
    const url = "http://localhost:8080/api/users";
    let data = {
      username: "TEST",
      password: "1234",
      fullName: "1234",
      email: "jbojsun@naver.com",
    };

    inputItems.forEach((inputItem) => {
      //input값을 가지고와서 해당 data에 각각 저장
      data = {
        ...data,
        [inputItem.name]: inputItem.value,
      };
    });

    try {
      const response = await axios.post(url, data);
      alert("사용자 등록 완료");
      navigate("/users/signin", {
        state: {
          username: response.data.username,
          password: inputItems.find(
            (inputItem) => inputItem.name === "password"
          ).value,
        },
      });
    } catch (error) {
      alert("사용자 등록 실패");
    }
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <h1 css={s.title}>회원가입</h1>
        {inputItems.map((inputItem) => inputItem.element)}
      </div>

      {/* 가입버튼 */}
      <button
        css={s.submitButton}
        disabled={submitDisabled}
        onClick={handleRegisterOnClick}
      >
        가입하기
      </button>
    </div>
  );
}

export default Signup;
