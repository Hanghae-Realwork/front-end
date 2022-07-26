import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { React, useRef } from "react";
import { loginAxios } from "../redux/modules/user";

import Logo from "../image/Logo_vertical.svg"


function Login() {
  const loginidRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  // 로그인 벨리데이션 체크 함수
  const loginFunction = () => {

    if (
      loginidRef.current.value === "" ||
      passwordRef.current.value === "" ||
      loginidRef.current.value === " " ||
      passwordRef.current.value === " " ||
      loginidRef.current.value === null ||
      passwordRef.current.value === null
    ) {
      alert("아이디 또는 비밀번호가 비어있어요! 🥸 ");
      return false;
    }
    document.getElementById("LoginBtn").disabled = true;
      dispatch(
        loginAxios(loginidRef.current.value, passwordRef.current.value)
      ).then((success) => {
        if (success === true) {
          navigate("/");
          alert("랑데브에 오신 것을 환영합니다! 당신의 꿈을 펼쳐보세요 🥸");
        } else {
          console.log("로그인실패", success);
          document.getElementById("LoginBtn").disabled = false;
        }
      }).catch((err) => {
         console.log("Error >>", err);
      document.getElementById("LoginBtn").disabled = false;
      })

  };


  return (
    <>
      <LoginBackgroundWrap>
        <LoginWrap>
          <AlignWrap>
              <MainLogo/>
            <InpuLoginWrap>
                <InputBar ref={loginidRef} placeholder="이메일" type="email" autoFocus></InputBar>
                <InputBar ref={passwordRef} placeholder="패스워드" type="password"></InputBar>
            </InpuLoginWrap>
            <LoginButton onClick={loginFunction}>로그인</LoginButton>
            <LoginText>랑데브가 처음인가요?
              <MovetoJoin onClick={() => {navigate(`/join`);}} id="LoginBtn">회원 가입하기</MovetoJoin>
            </LoginText>
          </AlignWrap>
        </LoginWrap>
      </LoginBackgroundWrap>
    </>
  );
}


const LoginWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: -200px;
  /* border: 1px solid white; */
`;

const AlignWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;


const InpuLoginWrap = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const IdWrap = styled.div`
  /* border: 1px solid white; */
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const PwWrap = styled.div`
  /* border: 1px solid black; */
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const InputBar = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 7px;
  width: 400px;
  color: white;
  background-color: transparent;
`;

const ButtonWrap = styled.div`
  /* border:1px solid black; */
  width: auto;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 400px;
  height: 60px;
  margin: 30px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  margin-top: 80px;
`;

const LoginText = styled.span`
  font-size: 14px;
  margin-top: 20px;
  color: white;
`;

const MovetoJoin = styled.span`
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 15px;
`;

const LoginBackgroundWrap = styled.div`
  background-color: #1F1F1F;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainLogo = styled.div`
  width: 170px;
  height: 45px;
  margin-bottom: 120px;
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export default Login;
