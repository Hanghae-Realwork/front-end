import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  signupAxios,
  checkUserIdAxios,
  checkUserNicknameAxios,
} from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //회원가입 변수
  const [userId, setUserId] = useState("");
  const [nickname, setNickName] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  //error
  const [userIdError, setUserIdError] = useState({ status: false, text: "" });
  const [nicknameError, setNickNameError] = useState({
    status: false,
    text: "",
  });
  const [nameError, setNameError] = useState({
    status: false,
    text: "",
  });
  const [phoneError, setPhoneError] = useState({
    status: false,
    text: "",
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    text: "",
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState({
    status: false,
    text: "",
  });
  const [yearError, setYearError] = useState({
    status: false,
    text: "",
  });

  //error name
  //이용약관:동의 비동의
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

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

  //userId
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  //유효성검사:userId
  const BlurUserId = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (e.target.value.length <= 0) {
      setUserIdError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (e.target.value.length > 0 && !emailRegex.test(userId)) {
      setUserIdError({ status: true, text: "이메일형식에 맞지 않습니다." });
    } else setUserIdError({ status: false, text: "" });
  };

  //유효성검사:nickName
  const onChageNickName = (e) => {
    setNickName(e.target.value);
  };
  const BlurNickName = (e) => {
    if (e.target.value.length <= 0) {
      setNickNameError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (nickname.length === 1) {
      setNickNameError({ status: true, text: "한글자 이상 입력해주세요!" });
    } else {
      setNickNameError({ status: false, text: "" });
    }
  };

  //Name
  const onChageName = (e) => {
    setName(e.target.value);
  };
  const BlurName = (e) => {
    if (e.target.value.length <= 0) {
      setNameError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (e.target.value.length === 1) {
      setNameError({ status: true, text: "한글자 이상 입력해주세요!" });
    } else {
      setNameError({ status: false, text: "" });
    }
  };
  //유효성검사:Birth
  const onChangeBirth = (e) => {
    const BirthRegex = /^[0-9\b -]{0,4}$/;
    const { name, value } = e.target;
    if (name === "year") {
      if (BirthRegex.test(e.target.value)) setYear(e.target.value);
    } else if (name === "month") {
      setMonth(e.target.value);
    } else if (name === "day") {
      if (BirthRegex.test(e.target.value)) setDay(e.target.value);
    }
  };

  const BlurYear = (e) => {
    if (year.length > 0) {
      setYearError({ status: true, text: "태어난 월을 선택하세요." });
      if (month.length > 0) {
        setYearError({
          status: true,
          text: "태어난 일(날짜) 2자리를 정확하게 입력하세요.",
        });
      }
      if (day.length > 0) {
        setYearError({
          status: false,
          text: "",
        });
      }
    }

    if (year >= 2008) {
      setYearError({
        status: true,
        text: "미래에서 오셨군요^^",
      });
    } else if (year <= 1922) {
      setYearError({
        status: true,
        text: "정말이세요?",
      });
      return;
    }

    if (day >= 32) {
      setYearError({
        status: true,
        text: "생년월일을 다시 확인해주세요.",
      });
    }
  };

  //유효성검사:Number
  const OnChangephoneNumber = (e) => {
    const phoneRegex = /^[0-9\b -]{0,13}$/;
    if (phoneRegex.test(e.target.value)) setPhoneNumber(e.target.value);
  };
  const BlurNumber = (e) => {
    if (e.target.value.length <= 0) {
      setPhoneError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (e.target.value.length < 13) {
      setPhoneError({ status: true, text: "번호를 다시 확인해주세요!" });
    } else setPhoneError({ status: false, text: "" });
  };
  //유효성검사:Password
  const OnChangePassWord = (e) => {
    setPassword(e.target.value);
  };
  const BlurPassWord = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (e.target.value.length <= 0) {
      setPasswordError({ status: true, text: "필수 정보입니다." });
    } else if (e.target.value.length > 0 && !passwordRegex.test(password)) {
      setPasswordError({
        status: true,
        text: "영어, 숫자, 특수문자 포함 4~16자로 작성해주세요.",
      });
    } else {
      setPasswordError({
        status: false,
        text: "",
      });
    }
  };

  //유효성검사:PasswordCheck
  const OnChangePassWordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const BlurPassWordCheck = (e) => {
    if (e.target.value.length <= 0) {
      setConfirmPasswordError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (e.target.value.length > 0 && password !== e.target.value) {
      setConfirmPasswordError({
        status: true,
        text: "비밀번호와 일치하지 않습니다.",
      });
    } else {
      setConfirmPasswordError({
        status: false,
        text: "",
      });
    }
  };
  //체크박스 : 전체동의 체크시 다른 체크박스 true
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

  //아이디 중복체크
  const onClickCheckUserId = async () => {
    try {
      await dispatch(checkUserIdAxios(userId)).then((checksuccess) => {
        if (checksuccess === true) {
          console.log("success");
          setUserIdError({
            status: true,
            text: "사용 가능한 아이디 입니다.",
          });
        } else {
          setUserIdError({
            status: true,
            text: "이미 사용중이거나 탈퇴한 아이디입니다.",
          });
        }
      });
    } catch (err) {
      alert("err");
    }
  };
  //닉네임 중복체크
  const onClickChecknickname = async () => {
    try {
      await dispatch(checkUserNicknameAxios(nickname)).then((checksuccess) => {
        if (checksuccess === true) {
          console.log("success");
          setNickNameError({
            status: true,
            text: "사용 가능한 닉네임입니다.",
          });
        } else {
          console.log("error");
          setNickNameError({
            status: true,
            text: "이미 사용중이거나 탈퇴한 닉네임입니다.",
          });
        }
      });
    } catch (err) {
      alert("err");
    }
  };
  const signupFunction = async () => {
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
      document.getElementById("userId").focus();
      return false;
    }

    if (ageCheck === false && useCheck === false) {
      alert("약관동의를 확인해주세요.");
      return false;
    }

    try {
      await dispatch(
        signupAxios(
          userId,
          nickname,
          name,
          birth,
          phoneNumber,
          password,
          passwordCheck,
          allCheck
        )
      ).then((res) => {
        if (res === true) {
          navigate("/login");
          alert("회원가입되었습니다!");
        } else {
          console.log("회원가입에 실패했습니다!");
        }
      });
    } catch (err) {
      console.log("에러입니다!");
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
              <InputBar
                type="email"
                placeholder="아이디"
                id="userId"
                value={userId}
                onChange={onChangeUserId}
                onBlur={BlurUserId}
              ></InputBar>
              <button onClick={onClickCheckUserId}>중복버튼</button>
              {userIdError.status && <ValiSpan>{userIdError.text}</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <InputBar
                type="text"
                placeholder="닉네임"
                minLength={2}
                maxLength={8}
                value={nickname}
                onChange={onChageNickName}
                onBlur={BlurNickName}
              ></InputBar>
              <button onClick={onClickChecknickname}>중복버튼</button>
              {nicknameError.status && (
                <ValiSpan>{nicknameError.text}</ValiSpan>
              )}
            </IdWrap>
            <IdWrap>
              <InputBar
                requiredtype="text"
                placeholder="이름"
                minLength={2}
                maxLength={10}
                value={name}
                onChange={onChageName}
                onBlur={BlurName}
              ></InputBar>
              {nameError.status && <ValiSpan>{nameError.text}</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <input
                name="year"
                type="text"
                maxLength="4"
                placeholder="년(4자)"
                onBlur={BlurYear}
                value={year}
                onChange={onChangeBirth}
              />
              <select
                onChange={onChangeBirth}
                value={month}
                name="month"
                onBlur={BlurYear}
              >
                <option value="month">월</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <input
                type="text"
                maxLength="2"
                placeholder="일"
                value={day}
                onChange={onChangeBirth}
                onBlur={BlurYear}
                name="day"
              />
            </IdWrap>
            {yearError.status && <ValiSpan>{yearError.text}</ValiSpan>}
            <IdWrap>
              {/* <InputBar
                requiredtype="text"
                placeholder="생년월일 / 0000-00-00"
                value={birth}
                onChange={onChangeBirth}
              ></InputBar> */}
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="핸드폰 번호 / 010-0000-0000"
                requiredtype="text"
                onChange={OnChangephoneNumber}
                value={phoneNumber}
                onBlur={BlurNumber}
                maxLength={13}
              ></InputBar>
              {phoneError.status && <ValiSpan>{phoneError.text}</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="비밀번호"
                requiredtype="password"
                maxLength={16}
                onChange={OnChangePassWord}
                value={password}
                onBlur={BlurPassWord}
              ></InputBar>
              {passwordError.status && (
                <ValiSpan>{passwordError.text}</ValiSpan>
              )}
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="비밀번호 확인"
                requiredtype="password"
                maxLength={16}
                onChange={OnChangePassWordCheck}
                value={passwordCheck}
                onBlur={BlurPassWordCheck}
              ></InputBar>
              {confirmPasswordError.status && (
                <ValiSpan>{confirmPasswordError.text}</ValiSpan>
              )}
            </IdWrap>
          </InputJoinWrap>
          <PolicyWrap>
            <div>
              <AgreementWrap>
                <AgreementTitle>약관동의</AgreementTitle>
                <div>
                  <AgreementInput
                    type="checkbox"
                    id="all-check"
                    checked={allCheck}
                    onChange={allBtnEvent}
                  />
                  <AgreementText htmlFor="all-check">전체동의</AgreementText>
                </div>
                <div>
                  <AgreementInput
                    type="checkbox"
                    id="check1"
                    checked={ageCheck}
                    onChange={ageBtnEvent}
                  />
                  <AgreementText htmlFor="check1">
                    만 14세 이상입니다 (필수){" "}
                  </AgreementText>
                </div>
                <div>
                  <AgreementInput
                    type="checkbox"
                    id="check2"
                    checked={useCheck}
                    onChange={useBtnEvent}
                  />
                  <AgreementText htmlFor="check2">
                    이용약관 (필수){" "}
                  </AgreementText>
                </div>
                <div>
                  <AgreementInput
                    type="checkbox"
                    id="check3"
                    checked={marketingCheck}
                    onChange={marketingBtnEvent}
                  />
                  <AgreementText htmlFor="check3">
                    마케팅 동의 (선택){" "}
                  </AgreementText>
                </div>
              </AgreementWrap>
            </div>
          </PolicyWrap>
          <ButtonWrap>
            <JoinButton
              id="signBtnDisabled"
              className="loginBtn"
              onClick={signupFunction}
            >
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
  color: #685bc7;
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
  background-color: #685bc7;
  :disabled {
    cursor: not-allowed;
    background-color: green;
  }
`;

const AgreementWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;
  color: #685bc7;
`;

const AgreementTitle = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const AgreementText = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

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
    background-color: #685bc7;
  }
`;

export default Join;
