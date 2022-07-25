import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  signupAxios,
  checkUserIdAxios,
  checkUserNicknameAxios,
} from "../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

import Logo from "../image/Logo_vertical.svg"




function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //회원가입 변수
  const [userId, setUserId] = useState("");
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("month");
  const [day, setDay] = useState("");

  //error
  const [userIdError, setUserIdError] = useState({ status: false, text: "" });
  const [nicknameError, setNicknameError] = useState({ status: false, text: ""});
  const [nameError, setNameError] = useState({status: false, text: ""});
  const [passwordError, setPasswordError] = useState({status: false,text: ""});
  const [confirmPasswordError, setConfirmPasswordError] = useState({status: false,text: ""});
  const [yearError, setYearError] = useState({status: false,text: ""});

  //error name
  //이용약관:동의 비동의
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  
  //아이디,비밀번호 중복체크
  const [userIdCheck, setUserIdCheck] = useState(false)
  const [nicknameCheck, setNicknameCheck] = useState(false)


  // 입력완료 후 enter키 입력 시 회원가입 되도록 하기
  window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      signupFunction();
    }
  });
  
  
  //체크박스
  useEffect(() => {
    if (useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else if (
      useCheck === true &&
      marketingCheck === false
    ) {
      setAllCheck(false);
    }
  }, [useCheck, marketingCheck]);

  //유효성검사:userId
  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

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
    setNickname(e.target.value);
  };

  const BlurNickName = (e) => {
    if (e.target.value.length <= 0) {
      setNicknameError({ status: true, text: "필수 정보입니다." });
      return;
    }
    if (nickname.length === 1) {
      setNicknameError({ status: true, text: "한글자 이상 입력해주세요!" });
    } else {
      setNicknameError({ status: false, text: "" });
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
    const { name } = e.target;
    if (name === "year") {
      if (BirthRegex.test(e.target.value)) {
        setYear(e.target.value);
      } 
    } else if (name === "month") {
      setMonth(e.target.value);
    } else if (name === "day") {
      if (BirthRegex.test(e.target.value)) {
        setDay(e.target.value);
      }
    }
  };

  const BlurYear = (e) => {
    const { name } = e.target;
    //0~9 사이 숫자 입력 시 0번째에 0추가
    if (name === "day") {
      if (day < 10 && day.length === 1) {
        setDay(0 + e.target.value);
      }
    }
    //조건
    if (year.length <= 0) {
      setYearError({
        status: true,
        text: "태어난 년도 4자리를 정확하게 입력하세요.",
      });
    } else if (month === "month") {
      setYearError({
        status: true,
        text: "태어난 월을 입력하세요.",
      });

    } else if (day.length <= 0) {
      setYearError({
        status: true,
        text: "태어난 일을 입력하세요.",
      });
    } else if (year >= 2022) {
      setYearError({
        status: true,
        text: "미래에서 오셨군요^^",
      });
    } else if (year <= 1922) {
      setYearError({
        status: true,
        text: "정말이세요?",
      });
    } else if (
      (month === "04" || month === "06" || month === "09" || month === "11")) {
      if (day >= 31) {
        setYearError({
          status: true,
          text: "날짜를 다시 확인해주세요.",
        });
      } else { 
        setYearError({
          status: false,
          text: "",
        });
      }
    } else if (month === "02") { 
      if (year % 4 === 0) {
                 if (day >= 30) {
                   setYearError({
                     status: true,
                     text: "날짜를 다시 확인해주세요.",
                   });
                 } else {
                   setYearError({
                     status: false,
                     text: "",
                   });
                 }
      } else { 
        if (day >= 29) {
          setYearError({
            status: true,
            text: "날짜를 다시 확인해주세요.",
          });
        } else { 
           setYearError({
             status: false,
             text: "",
           });
        }
      }
    }
    else if (day >= 32) {
      setYearError({
        status: true,
        text: "날짜를 다시 확인해주세요.",
      });
    } else {
      setYearError({
        status: false,
        text: "",
      });
    }     
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
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
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
          setUserIdError({
            status: true,
            text: "사용 가능한 아이디 입니다.",
          });
          setUserIdCheck(true)

        } else {
          setUserIdError({
            status: true,
            text: "이미 사용중이거나 탈퇴한 아이디입니다.",
          });
          setUserIdCheck(false);
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
          setNicknameError({
            status: true,
            text: "사용 가능한 닉네임입니다.",
          });
          setNicknameCheck(true)
        } else {
          setNicknameError({
            status: true,
            text: "이미 사용중이거나 탈퇴한 닉네임입니다.",
          });
          setNicknameCheck(false)
        }
      });
    } catch (err) {
      alert("err");
    }
  };
  const signupFunction = async () => {
    console.log(password)
 // 빈칸 아닐 시 axios로 넘어가는 회원가입 부분 
    if (
      userId === "" ||
      nickname === "" ||
      name === "" ||
      year === "" ||
      month === "" ||
      day === "" ||
      password === "" ||
      passwordCheck === "" ||
      userId === " " ||
      nickname === " " ||
      name === " " ||
      year === " " ||
      month === " " ||
      day === " " ||
      password === " " ||
      passwordCheck === " "
    ) {
      alert("빈칸을 확인해주세요.")
      return false;
    }
    if (useCheck === false) {
      alert("약관동의를 확인해주세요.");
      return false;
    }

    if (!userIdCheck) {
      alert("이메일 중복체크를 확인해주세요.");
      return false
    } else if (!nicknameCheck) {
      alert("닉네임 중복체크를 확인해주세요.");
      return false
    }
    try {
      await dispatch(
        signupAxios(
          userId,
          nickname,
          name,
          year+"-"+month+"-"+day,
          password,
          passwordCheck,
          allCheck
        )
      ).then((res) => {
        if (res === true) {
          navigate("/login");
          alert("크루원이 되신 것을 축하드립니다! 🥸");
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
    <BackgroundWrap>
      <JoinWrap>
        <AlignWrap>
          <LogoWrap>

          </LogoWrap>
          <InputJoinWrap>
            <IdWrap>

              <div>
                <InputBar type="email" placeholder="아이디"
                  id="userId" value={userId}
                  onChange={onChangeUserId} onBlur={BlurUserId}
                  autoFocus></InputBar>
                <CheckButton onClick={onClickCheckUserId}>중복 확인</CheckButton>
              </div>
              <ValiWrap>
              {userIdError.status && <ValiSpan>{userIdError.text}</ValiSpan>}
              </ValiWrap>
            </IdWrap>
            <IdWrap>
              <div>
              <InputBar
                type="text"
                placeholder="닉네임"
                minLength={2}
                maxLength={8}
                value={nickname}
                onChange={onChageNickName}
                onBlur={BlurNickName}
              ></InputBar>
              <CheckButton onClick={onClickChecknickname}>중복 확인</CheckButton>
              </div>
              <ValiWrap>
              {nicknameError.status && (<ValiSpan>{nicknameError.text}</ValiSpan>)}
              </ValiWrap>
            </IdWrap>
            <IdWrap>
              <InputBar type="text" placeholder="이름" minLength={2}
                maxLength={10} value={name} onChange={onChageName}
                onBlur={BlurName}/>
              <ValiWrap>
              {nameError.status && <ValiSpan>{nameError.text}</ValiSpan>}
              </ValiWrap>
            </IdWrap>
            
            <BirthWrap>
              <BirthAlignWrap>
              <InpuBirth name="year" type="text" maxLength="4" placeholder="년(4자)"
                onBlur={BlurYear} value={year} onChange={onChangeBirth}/>
              <SelectMonth onChange={onChangeBirth} value={month} name="month" onBlur={BlurYear}>
                <option value="month" disabled>월</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </SelectMonth>
              <InpuBirthDay type="text" maxLength="2" placeholder="일"
                value={day} onChange={onChangeBirth}
                onBlur={BlurYear} name="day"/>
                </BirthAlignWrap>
                <div>
            <ValiWrap>
              {yearError.status && <ValiSpan>{yearError.text}</ValiSpan>}
            </ValiWrap>
            </div>
            </BirthWrap>           
            <IdWrap>
              <InputBar
                placeholder="비밀번호"
                type="password"
                maxLength={16}
                onChange={OnChangePassWord}
                value={password}
                onBlur={BlurPassWord}
              ></InputBar>
              <ValiWrap>
              {passwordError.status && (
                <ValiSpan>{passwordError.text}</ValiSpan>
              )}
              </ValiWrap>
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="비밀번호 확인"
                type="password"
                maxLength={16}
                onChange={OnChangePassWordCheck}
                value={passwordCheck}
                onBlur={BlurPassWordCheck}
              ></InputBar>
              <ValiWrap>
              {confirmPasswordError.status && (
                <ValiSpan>{confirmPasswordError.text}</ValiSpan>
              )}
              </ValiWrap>
            </IdWrap>
          </InputJoinWrap>

            <AgreeFullWrap>
            <AgreementTitle>서비스 이용정책</AgreementTitle>
              <AgreementWrap>
                <AgreeChkWrap>
                  <AgreementInput
                    type="checkbox"
                    id="all-check"
                    checked={allCheck}
                    onChange={allBtnEvent}
                  />
                  <AgreementText htmlFor="all-check">전체동의</AgreementText>
                </AgreeChkWrap>
                  <AgreementHr/>
                <AgreeChkWrap>
                  <AgreementInput
                    type="checkbox"
                    id="check2"
                    checked={useCheck}
                    onChange={useBtnEvent}
                  />
                  <AgreementText htmlFor="check2">
                    이용약관 (필수){" "}
                  </AgreementText>
                </AgreeChkWrap>
                <AgreeChkWrap>
                  <AgreementInput
                    type="checkbox"
                    id="check3"
                    checked={marketingCheck}
                    onChange={marketingBtnEvent}
                  />
                  <AgreementText htmlFor="check3">
                    마케팅 동의 (선택){" "}
                  </AgreementText>
                </AgreeChkWrap>
              </AgreementWrap>
            </AgreeFullWrap>

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
      </BackgroundWrap>
    </>
  );
}


const BackgroundWrap = styled.div`
  background-color: #1f1f1f;
  width: 100%;
`

const JoinWrap = styled.div`
  /* border: 1px solid white; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
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
  /* border: 1px solid white; */
  width: 166px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-image: url(${Logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ValiWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 8px;
  /* border: 1px solid white; */
`

const ValiSpan = styled.span`
  color: #C70000;
  font-size: 10px;
  font-weight: 400;
`;

const InputJoinWrap = styled.div`
  /* border: 1px solid white; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const IdWrap = styled.div`
  /* border: 1px solid white; */
  /* width: 500px; */
  /* height: 60px; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 0px 30px 90px;
  /* width: 510px; */
  flex-flow: column nowrap;
`;


const InputBar = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 7px;
  width: 375px;
  background-color: transparent;
  color: white;
  font-weight: 400;
  font-size: 14px;
`;


const ButtonWrap = styled.div`
  /* border:1px solid white; */
  width: auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 384px;
  height: 60px;
  padding: 15px 150px 15px 150px;
  margin-bottom: 40px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
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
  color: white;
  /* border: 1px solid white; */
  width: 384px;
  margin-top: 10px;
  padding: 15px 0px 15px 0px;
  gap: 12px;
  background: #303032;
  border-radius: 5px;
`;

const AgreementTitle = styled.label`
  font-weight: 400;
  font-size: 14px;
  margin-top: 50px;
  margin-bottom: 5px;
  color: white;
`;

const AgreementText = styled.label`
  font-weight: bold;
  font-size: 14px;
  font-weight: 400;
`;

const AgreementInput = styled.input`
  appearance: none;
  border: 0.5px solid gainsboro;
  /* border-radius: 0.25rem; */
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
  margin-right: 13.5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #685bc7;
  }
`;

const CheckButton = styled.button`
  background-color: #303032;
  color: white;
  padding: 5px 15px 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 400;
  font-size: 10px;
  margin-left: 20px;
`

const InpuBirth = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  width: 160px;
  font-weight: 400;
  font-size: 14px;
`

const InpuBirthDay = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  width: 100px;
  font-weight: 400;
  font-size: 14px;
`

const SelectMonth = styled.select`
  width: 100px;
  padding: 5px; 
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  font-family: inherit;  
  background: url('arrow.jpg') no-repeat 95% 50%; 
  border-radius: 0px; 
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
  color: white;
  font-size: 13px;
`

const BirthWrap = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 0px 30px 90px;
`

const BirthAlignWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`

const AgreementHr = styled.hr`
  border: 0.5px solid white;
  width: 354px; 
`

const AgreeChkWrap = styled.div`
  margin: 0px 15px 0px 15px;
  /* border: 1px solid white; */
`

const AgreeFullWrap = styled.div`
  margin-top: 50px;
  /* border: 1px solid white; */
  width: 384px;
`


export default Join;
