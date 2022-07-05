import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {React, useRef} from "react"

function Login() {
  
  const loginidRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // 이벤트 리스너 (입력 완료 후 '엔터'키를 눌러서 로그인 할 수 있게 합니다.)
  window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      loginFunction();
    }
  });


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
    }}


    //axios 연결 후 활성화 될 벨리데이션 체크 입니다.
  //   document.getElementById("LoginBtn").disabled = true;
  //   try {
  //     await dispatch(
  //       loginAxios(usernameRef.current.value, passwordRef.current.value)
  //     ).then((success) => {
  //       console.log(success);
  //       if (success === true) {
  //         navigate("/");
  //         alert("로그인되었습니다!");
  //       } else {
  //         document.getElementById("LoginBtn").disabled = false;
  //       }
  //     });
  //   } catch (err) {
  //     console.log("Error >>", err);
  //     document.getElementById("LoginBtn").disabled = false;
  //   }
  // };

  return (
    <>
      <LoginWrap>
        <AlignWrap>
          <LogoWrap>
            <p>renDev</p>
          </LogoWrap>
          <InpuLoginWrap>
            <IdWrap>
              <InputBar ref={loginidRef} placeholder="아이디"></InputBar>
            </IdWrap>
            <PwWrap>
              <InputBar ref={passwordRef} placeholder="패스워드"></InputBar>
            </PwWrap>
          </InpuLoginWrap>
          <ButtonWrap>
            <LoginButton>로그인</LoginButton>
          </ButtonWrap>
          <LoginText>랑데브가 처음인가요? 
            <MovetoJoin onClick={() => {navigate(`/join`)}}>회원 가입하기</MovetoJoin></LoginText>
        </AlignWrap>
      </LoginWrap>
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
  margin-top: 70px;
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
  /* border: 1px solid black; */
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #685BC7;
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
  border-bottom: 1px solid black;
  padding: 7px;
  width: 400px;
`;

const ButtonWrap = styled.div`
  /* border:1px solid black; */
  width: auto;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 400px;
  height: 60px;
  margin: 30px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background-color: #685BC7;
`;

const LoginText = styled.span`
  font-size: 14px;
  margin-top:20px;
`

const MovetoJoin = styled.span`
  color: #685BC7;
  font-weight: bold; 
  cursor: pointer; 
  margin-left: 15px;
`


export default Login;
