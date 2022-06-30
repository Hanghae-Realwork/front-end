import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signupAxios, userInfo } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [nickname, setNickName] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [profileImage, setProfileImage] = useState("");
  //error
  const [userIdError, setUserIdError] = useState(false);
  const [nicknameError, setNickNameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  //이용약관:동의 비동의
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  //생일
  useEffect(() => {
    if (birth.length === 8) {
      setBirth(birth.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
    }
  }, [birth]);

  //핸드폰
  useEffect(() => {
    if (phoneNumber.length === 10) {
      setPhoneNumber(phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phoneNumber.length === 13) {
      setPhoneNumber(
        phoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phoneNumber]);

  //체크박스
  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else if (
      ageCheck === true &&
      useCheck === true &&
      marketingCheck === false
    ) {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  //유효성검사:userID
  const onChangeUserId = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };
  //유효성검사:nickName
  const onChageNickName = (e) => {
    if (e.target.value.length < 0) {
      setNickNameError(true);
      setNickName(e.target.value);
    }
    if (e.target.value.length <= 2) {
      setNickNameError(false);
      setNickName(e.target.value);
    } else {
      setNickNameError(true);
      setNickName(e.target.value);
    }
  };

  //유효성검사:Name
  const onChageName = (e) => {
    if (e.target.value.length <= 3) {
      setNameError(false);
      setName(e.target.value);
    } else {
      setNameError(true);
      setName(e.target.value);
    }
    setName(e.target.value);
  };

  //유효성검사:Birth
  const onChangeBirth = (e) => {
    const regex = /^[0-9\b -]{0,8}$/;
    if (regex.test(e.target.value)) {
      setBirth(e.target.value);
    }
  };

  //유효성검사:Number
  const OnChangephoneNumber = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  //유효성검사:Password
  const OnChangePassWord = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!passwordCheck || e.target.value === passwordCheck)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };
  //유효성검사:PasswordCheck
  const OnChangePassWordCheck = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPasswordCheck(e.target.value);
  };
  //체크박스
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  // const signupFunction = async () => {
  //   console.log(
  //     userId,
  //     nickname,
  //     name,
  //     birth,
  //     phoneNumber,
  //     password,
  //     passwordCheck,
  //     profileImage,
  //     allCheck
  //   );
  //   try {
  //     await dispatch(
  //       signupAxios(
  //         userId,
  //         nickname,
  //         name,
  //         birth,
  //         phoneNumber,
  //         password,
  //         allCheck
  //       )
  //     ).then((res) => {
  //       if (res === true) {
  //         console.log(res);
  //         navigate("/login");
  //         alert("회원가입되었습니다!");
  //       } else {
  //         if (res.response.data.message === "the username already exists.") {
  //           alert("이미 가입된 ID입니다!");
  //           document.getElementById("SigninBtn").disabled = false;
  //         } else if (
  //           res.response.data.message === "the nickname already exists."
  //         ) {
  //           alert("이미 가입된 닉네임입니다!");
  //           document.getElementById("SigninBtn").disabled = false;
  //         } else if (res.response.data.errors[0] === undefined) {
  //           alert("입력한 내용을 다시 확인해주세요!");
  //           document.getElementById("SigninBtn").disabled = false;
  //         } else {
  //           alert(
  //             res.response.data.errors[0].field +
  //               "에 " +
  //               res.response.data.errors[0].reason
  //           );
  //           document.getElementById("SigninBtn").disabled = false;
  //         }
  //       }
  //     });
  //   } catch (err) {
  //     alert("에러입니다!" + err);
  //   }
  // };
  const signupFunction = () => {
    console.log(allCheck);
    if (
      userId === "" ||
      nickname === "" ||
      name === "" ||
      birth === "" ||
      phoneNumber === "" ||
      password === "" ||
      passwordCheck === "" ||
      userId === " " ||
      nickname === " " ||
      name === " " ||
      birth === " " ||
      phoneNumber === " " ||
      password === " " ||
      passwordCheck === " "
    ) {
      alert("빈칸을 입력해주세요.");
    } else {
      console.log("입력");
      document.getElementById("IDID").disabled = true;
    }
  };
  return (
    <>
      <JoinWrap>
        <AlignWrap>
          <LogoWrap>
            <p>renDev</p>
          </LogoWrap>
          <InputJoinWrap>
            <IdWrap>
              <InputBar repuiredtype="email" placeholder="아이디" value={userId} onChange={onChangeUserId}></InputBar>              
                {userIdError && <ValiSpan>이메일 형식에 맞지 않습니다.</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <InputBar requiredtype="text" placeholder="닉네임" 
              minLength={2} maxLength={15} value={nickname} onChange={onChageNickName}></InputBar>
              {nicknameError ? ("") : ( <ValiSpan>한글자 이상 입력해주세요.</ValiSpan> )}
            </IdWrap>
            <IdWrap>
              <InputBar requiredtype="text" placeholder="이름" 
                minLength={2} maxLength={15} value={name} onChange={onChageName}></InputBar>
              {nameError ? "" : <ValiSpan>두글자 이상 입력해주세요.</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <InputBar requiredtype="text" placeholder="생년월일 / 0000-00-00" value={birth}
                onChange={onChangeBirth}></InputBar>
            </IdWrap>
            <IdWrap>
              <InputBar placeholder="핸드폰 번호 / 010-0000-0000" 
              requiredtype="text" onChange={OnChangephoneNumber} value={phoneNumber}></InputBar>
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="비밀번호" requiredtype="password"
                maxLength={16} onChange={OnChangePassWord} value={password}></InputBar>
              {passwordError && (<ValiSpan> 숫자, 영어, 특수문자 조합 8~16글자로 입력해주세요.</ValiSpan>)}
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="비밀번호 확인" requiredtype="password" maxLength={16} onChange={OnChangePassWordCheck}
                value={passwordCheck}></InputBar>
              {confirmPasswordError && (<ValiSpan>비밀번호를 확인해주세요.</ValiSpan>)}
            </IdWrap>
          </InputJoinWrap>
          <PolicyWrap>
              <div>
                <AgreementWrap>
                <AgreementTitle>약관동의</AgreementTitle>
                  <div>
                    <AgreementInput type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
                    <AgreementText htmlFor="all-check">전체동의</AgreementText>
                  </div>
                  <div>
                    <AgreementInput type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
                    <AgreementText htmlFor="check1">만 14세 이상입니다 (필수) </AgreementText>
                  </div>
                  <div>
                    <AgreementInput type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent}/>
                    <AgreementText htmlFor="check2">이용약관 (필수) </AgreementText>
                  </div>
                  <div>
                    <AgreementInput type="checkbox" id="check3" checked={marketingCheck} onChange={marketingBtnEvent}/>
                    <AgreementText htmlFor="check3">마케팅 동의 (선택) </AgreementText>
                  </div>
              </AgreementWrap>
              </div>
            </PolicyWrap>
          <ButtonWrap>
            <JoinButton id="IDID" onClick={signupFunction}>
              회원가입
            </JoinButton>
          </ButtonWrap>
        </AlignWrap>
      </JoinWrap>
    </>
  );
}

const JoinWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
  margin-bottom: 50px;
  color: #685BC7;
`;

const ValiSpan = styled.span`
  color: red;
  font-size: 13px;
`;
const InputJoinWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const IdWrap = styled.div`
  /* border: 1px solid black; */
  /* width: 500px; */
  /* height: 50px; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px;
  flex-direction: column;
`;


const PolicyWrap = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  /* margin: 30px; */
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
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

const JoinButton = styled.button`
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

const AgreementWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  color: #685BC7;
`

const AgreementTitle = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`

const AgreementText = styled.label`
  font-weight: bold;
  font-size: 14px;
`

const AgreementInput = styled.input`
  appearance: none;
    border: 0.5px solid gainsboro;
    border-radius: 0.25rem;
    width: 15px;
    height: 15px;
    margin-bottom: -3px;
    margin-right: 5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #685BC7;
  }
`



export default Join;
