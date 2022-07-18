import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { React, useRef } from "react";
import { loginAxios } from "../redux/modules/user";

import Logo from "../image/Logo_vertical.svg"
import Time from "../components/Time";



function Login() {
  const loginidRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 벨리데이션 체크 함수
  const loginFunction = async () => {

    if (
      loginidRef.current.value === "" ||
      passwordRef.current.value === "" ||
      loginidRef.current.value === " " ||
      passwordRef.current.value === " " ||
      loginidRef.current.value === null ||
      passwordRef.current.value === null
    ) {
      alert("아이디, 비밀번호를 채워주세요!");
      return false;
    }


    document.getElementById("LoginBtn").disabled = true;
    try {
      await dispatch(
        loginAxios(loginidRef.current.value, passwordRef.current.value)
      ).then((success) => {
        if (success === true) {
          navigate("/");
          alert("로그인되었습니다!");
        } else {
          console.log("로그인실패", success);
          document.getElementById("LoginBtn").disabled = false;
        }
      });
    } catch (err) {
      console.log("Error >>", err);
      document.getElementById("LoginBtn").disabled = false;
    }
  };

  return (
    <>
      <LoginBackgroundWrap>
        <LoginWrap>
          <AlignWrap>
            <LogoWrap>
              <MainLogo/>
            </LogoWrap>
            <InpuLoginWrap>
              <IdWrap>
                <InputBar ref={loginidRef} placeholder="이메일" type="email" autoFocus></InputBar>
              </IdWrap>
              <PwWrap>
                <InputBar ref={passwordRef} placeholder="패스워드" type="password"></InputBar>
              </PwWrap>
            </InpuLoginWrap>
            <ButtonWrap>
              <LoginButton onClick={loginFunction}>로그인</LoginButton>
            </ButtonWrap>
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
  /* border: 1px solid black; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -150px;
`;

const AlignWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const LogoWrap = styled.div`
  /* border: 1px solid white; */
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const InpuLoginWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  height: auto;
`;

const IdWrap = styled.div`
  /* border: 1px solid black; */
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
  background-color: #1F1F1F;
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
  height: 1080px;
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
