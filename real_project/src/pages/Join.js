import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  signupAxios,
  checkUserIdAxios,
  checkUserNicknameAxios,
  checkEmailAxios,
} from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

import AgreementModal from "../components/Modal/AgreementModal";

import Logo from "../image/Logo_vertical.svg"

function Join() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //회원가입 변수
  const [userId, setUserId] = useState("");
   const [certification, setCertification] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");



  //error
  const [userIdError, setUserIdError] = useState({
    status: false,
    text: "",
    color: false,
  });
  //인증번호
  const [certificationError, setCertificationError] = useState({
    status: false,
    text: "",
    color: false,
  });

  const [nicknameError, setNicknameError] = useState({
    status: false,
    text: "",
    color: false,
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    text: "",
    color: false,
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState({
    status: false,
    text: "",
    color: false,
  });

  //error
  //이용약관:동의 비동의
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  //아이디,비밀번호 중복체크
  const [userIdCheck, setUserIdCheck] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
    const [Agreemodal, setAgreeModal] = useState(false);
  //체크박스
  useEffect(() => {
    if (useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else if (useCheck === true && marketingCheck === false) {
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
      setUserIdError({ status: true, text: "필수 항목입니다.", color: false });
    } else if (e.target.value.length > 0 && !emailRegex.test(userId)) {
      setUserIdError({
        status: true,
        text: "사용할 수 없는 이메일입니다.",
        color: false,
      });
    } else
      setUserIdError({
        status: false,
        text: "",
        color: false,
      });
  };

  //아이디 중복체크
  const onClickCheckUserId = () => {
    dispatch(checkUserIdAxios(userId))
      .then((checksuccess) => {
        if (checksuccess === true) {
          setUserIdError({
            status: true,
            text: "사용가능한 이메일입니다. 해당 이메일로 인증번호가 전송됩니다.",
            color: true,
          });
          setUserIdCheck(true);
        } else {
          setUserIdError({
            status: true,
            text: "사용할 수 없는 이메일입니다.",
            color: false,
          });
          setUserIdCheck(false);
        }
      })
      .catch((err) => {

      });
  };

  const onChangecheckEmail = (e) => {
    setCertification(e.target.value);
  };
  const BlurcheckEmail = (e) => {
 
  };
  const onClickcheckEmail = () => {
    dispatch(checkEmailAxios(userId, certification)).then((checksuccess) => {
      if (checksuccess === true) { 
       setCertificationError({
        status: true,
        text: "인증번호가 일치합니다.",
        color: true,
       });
        setEmailCheck(true)
      } else {
       setCertificationError({
        status: true,
        text: "인증번호가 일치하지 않습니다.",
        color: false,
       });
        setEmailCheck(false)
      }
    }).catch((err) => {

    })

  };

  //유효성검사:nickName
  const onChageNickName = (e) => {
    setNickname(e.target.value);
  };

  const BlurNickName = (e) => {
    if (e.target.value.length <= 0) {
      setNicknameError({
        status: true,
        text: "필수 정보입니다.",
        color: false,
      });
      return;
    }
    if (nickname.length === 1) {
      setNicknameError({
        status: true,
        text: "한글자 이상 입력해주세요!",
        color: false,
      });
    } else {
      setNicknameError({ status: false, text: "", color: false });
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
      setPasswordError({
        status: true,
        text: "필수 정보입니다.",
        color: false,
      });
    } else if (e.target.value.length > 0 && !passwordRegex.test(password)) {
      setPasswordError({
        status: true,
        text: "영문자, 숫자, 특수문자 포함 4~16자로 작성해주세요.",
        color: false,
      });
    } else if (e.target.value.length > 0 && passwordCheck === e.target.value) {
      setPasswordError({
        status: true,
        text: "비밀번호와 일치합니다.",
        color: true,
      });
      setConfirmPasswordError({
        status: true,
        text: "비밀번호와 일치합니다.",
        color: true,
      });
        
    } else {
      setPasswordError({
        status: false,
        text: "",
        color: false,
      });
    }
  };

  //유효성검사:PasswordCheck
  const OnChangePassWordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const BlurPassWordCheck = (e) => {
     const passwordRegex =
       /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (e.target.value.length <= 0) {
      setConfirmPasswordError({
        status: true,
        text: "필수 정보입니다.",
        color: false,
      });
      return;
    }
    if (e.target.value.length > 0 && password !== e.target.value) {
      setConfirmPasswordError({
        status: true,
        text: "비밀번호가 일치하지 않습니다.",
        color: false,
      });
    } else if (e.target.value.length > 0 && password === e.target.value) {
      if (!passwordRegex.test(password)) {
         setConfirmPasswordError({
           status: true,
           text: "영문자, 숫자, 특수문자 포함 4~16자로 작성해주세요.",
           color: false,
         });
         setPasswordError({
           status: true,
           text: "영문자, 숫자, 특수문자 포함 4~16자로 작성해주세요.",
           color: false,
         });
      } else {
           setConfirmPasswordError({
             status: true,
             text: "비밀번호가 일치합니다",
             color: true,
           });
           setPasswordError({
             status: true,
             text: "비밀번호가 일치합니다.",
             color: true,
           });
      }
       
    } else {
      setConfirmPasswordError({
        status: false,
        text: "",
        color: true,
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

  //닉네임 중복체크
  const onClickChecknickname = () => {
    dispatch(checkUserNicknameAxios(nickname))
      .then((checksuccess) => {
        if (checksuccess === true) {
          setNicknameError({
            status: true,
            text: "사용 가능한 닉네임 입니다.",
            color: true,
          });
          setNicknameCheck(true);
        } else {
          setNicknameError({
            status: true,
            text: "사용할 수 없는 닉네임 입니다.",
            color: false,
          });
          setNicknameCheck(false);
        }
      })
      .catch((err) => {

      });
  };
  const signupFunction = async () => {
    
    if (useCheck === false) {
      alert("약관동의를 확인해주세요.");
      return false;
    }
    if (!userIdCheck) {
      alert("이메일 중복체크를 확인해주세요.");
      return false;
    } else if (!nicknameCheck) {
      alert("닉네임 중복체크를 확인해주세요.");
      return false;
    } else if (!emailCheck) {
      alert("이메일 인증을 확인해주세요.")
    }
      try {
        await dispatch(
          signupAxios(
            userId,
            nickname,
            certification,
            password,
            passwordCheck,
            allCheck
          )
        ).then((res) => {
          if (res === true) {
            navigate("/login");
            alert("크루원이 되신 것을 축하드립니다! 🥸");
          }
        });
      } catch (err) {}
  };

  return (
    <>
      <ModralWrap>
        {Agreemodal === true ? <AgreementModal close={setAgreeModal} /> : null}
      </ModralWrap>
      <BackgroundWrap>
        <JoinWrap>
          <AlignWrap>
            <LogoWrap></LogoWrap>
            <InputJoinWrap>
              <IdWrap>
                <div>
                  <InputBar
                    type="email"
                    placeholder="이메일을 입력해 주세요"
                    id="userId"
                    value={userId}
                    onChange={onChangeUserId}
                    onBlur={BlurUserId}
                  ></InputBar>
                  <CheckButton
                    style={
                      userId !== ""
                        ? { background: "" }
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                    onClick={onClickCheckUserId}
                  >
                    중복 확인
                  </CheckButton>
                </div>
                <ValiWrap>
                  {userIdError.status && (
                    <ValiSpan
                      style={
                        userIdError.color
                          ? { color: "#b3e3c8" }
                          : { color: "#e07967" }
                      }
                    >
                      {userIdError.text}
                    </ValiSpan>
                  )}
                </ValiWrap>
              </IdWrap>

              <IdWrap>
                <div>
                  <InputBar
                    type="text"
                    placeholder="이메일 인증번호"
                    id="certification"
                    maxLength={5}
                    value={certification}
                    onChange={onChangecheckEmail}
                    onBlur={BlurcheckEmail}
                  ></InputBar>
                  <CheckButton
                    style={
                      userId !== "" && certification !== ""
                        ? { background: "" }
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                    onClick={onClickcheckEmail}
                  >
                    인증번호 확인
                  </CheckButton>
                </div>
                <ValiWrap>
                  {certificationError.status && (
                    <ValiSpan
                      style={
                        certificationError.color
                          ? { color: "#b3e3c8" }
                          : { color: "#e07967" }
                      }
                    >
                      {certificationError.text}
                    </ValiSpan>
                  )}
                </ValiWrap>
              </IdWrap>

              <IdWrap>
                <div>
                  <InputBar
                    type="text"
                    id="nickname"
                    placeholder="닉네임"
                    minLength={2}
                    maxLength={8}
                    value={nickname}
                    onChange={onChageNickName}
                    onBlur={BlurNickName}
                  ></InputBar>
                  <CheckButton
                    onClick={onClickChecknickname}
                    style={
                      nickname !== ""
                        ? { background: "" }
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                  >
                    중복 확인
                  </CheckButton>
                </div>
                <ValiWrap>
                  {nicknameError.status && (
                    <ValiSpan
                      style={
                        nicknameError.color
                          ? { color: "#b3e3c8" }
                          : { color: "#e07967" }
                      }
                    >
                      {nicknameError.text}
                    </ValiSpan>
                  )}
                </ValiWrap>
              </IdWrap>

              <IdWrap>
                <InputBar
                  placeholder="비밀번호 (영문, 숫자, 특수문자를 포함하는 4~16자)"
                  type="password"
                  id="password"
                  maxLength={16}
                  onChange={OnChangePassWord}
                  value={password}
                  onBlur={BlurPassWord}
                ></InputBar>
                <ValiWrap>
                  {passwordError.status && (
                    <ValiSpan
                      style={
                        passwordError.color
                          ? { color: "#b3e3c8" }
                          : { color: "#e07967" }
                      }
                    >
                      {passwordError.text}
                    </ValiSpan>
                  )}
                </ValiWrap>
              </IdWrap>
              <IdWrap>
                <InputBar
                  placeholder="비밀번호 확인"
                  type="password"
                  id="passwordCheck"
                  maxLength={16}
                  onChange={OnChangePassWordCheck}
                  value={passwordCheck}
                  onBlur={BlurPassWordCheck}
                ></InputBar>
                <ValiWrap>
                  {confirmPasswordError.status && (
                    <ValiSpan
                      style={
                        confirmPasswordError.color
                          ? { color: "#b3e3c8" }
                          : { color: "#e07967" }
                      }
                    >
                      {confirmPasswordError.text}
                    </ValiSpan>
                  )}
                </ValiWrap>
              </IdWrap>
            </InputJoinWrap>

            <AgreeFullWrap>
              <TextWrap>
                <AgreementTitle>서비스 이용정책</AgreementTitle>
              </TextWrap>
              <AgreementWrap>
                <AgreeChkWrap>
                  <ChcekWrap>
                    <AgreementInput
                      type="checkbox"
                      id="all-check"
                      checked={allCheck}
                      onChange={allBtnEvent}
                    />
                    <AgreementText htmlFor="all-check">전체동의</AgreementText>
                  </ChcekWrap>
                </AgreeChkWrap>
                <AgreementHr />
                <AgreeChkWrap>
                  <ChcekWrap>
                    <AgreementInput
                      type="checkbox"
                      id="check2"
                      checked={useCheck}
                      onChange={useBtnEvent}
                    />
                    <AgreementText htmlFor="check2">
                      이용약관 (필수)
                    </AgreementText>
                  </ChcekWrap>
                  <AgreementCheckButton
                    onClick={() => {
                      setAgreeModal(true);
                    }}
                  >
                    약관 보기
                  </AgreementCheckButton>
                </AgreeChkWrap>
                <AgreeChkWrap>
                  <ChcekWrap>
                    <AgreementInput
                      type="checkbox"
                      id="check3"
                      checked={marketingCheck}
                      onChange={marketingBtnEvent}
                    />
                    <AgreementText htmlFor="check3">
                      마케팅 동의 (선택)
                    </AgreementText>
                  </ChcekWrap>
                </AgreeChkWrap>
              </AgreementWrap>
            </AgreeFullWrap>

            <ButtonWrap>
              <JoinButton
                id="signBtnDisabled"
                className="loginBtn"
                onClick={signupFunction}
                style={
                  userId !== "" && certification !== "" && nickname !== "" && password !== "" && passwordCheck !== ""
                    ? { background: "" }
                    : { opacity: "0.5", pointerEvents: "none" }
                }
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
  height: 140vh;
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
  height: 21px;
  line-height: 21px;
  /* border: 1px solid white; */
`;

const ValiSpan = styled.span`
  color: #C70000;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const InputJoinWrap = styled.div`
  /* border: 1px solid white; */
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

const IdWrap = styled.div`
  /* border: 1px solid white; */
  /* width: 500px; */
  /* height: 60px; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* margin: 30px 0px 30px 90px; */
  /* width: 510px; */
  flex-flow: column nowrap;
`;


const InputBar = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  padding: 7px;
  width: 345px;
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
  width: 450px;
  margin-top: 10px;
  padding: 15px 0px 15px 0px;
  gap: 12px;
  background: #303032;
  border-radius: 5px;
`;

const AgreementTitle = styled.label`
  font-weight: 600;
  font-size: 16px;
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
  margin-bottom: 2px;
  margin-right: 10px;

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
  width: 100px;
  padding: 5px 15px 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  margin-left: 20px;
  line-height: 18px;
`

const InputBirth = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  width: 160px;
  font-weight: 400;
  font-size: 14px;
  margin-top: -0.5px;
`

const InputMonth = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  width: 100px;
  font-weight: 400;
  font-size: 14px;
  margin-top: -0.5px;  
`

const InputDay = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 7px;
  width: 100px;
  font-weight: 400;
  font-size: 14px;
  margin-top: -0.5px;
`

const SelectMonth = styled.select`
  width: 100px;
  padding: 7px; 
  border: none;
  outline: none;
  border-bottom: 1px solid white;
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
  /* border: 1px solid white; */
`

const AgreementHr = styled.hr`
  border: 0.5px solid white;
  width: 415px; 
`

const AgreeChkWrap = styled.div`
  margin: 0px 15px 0px 15px;
  /* border: 1px solid white; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 420px;
`

const AgreeFullWrap = styled.div`
  margin-top: 25px;
  /* border: 1px solid white; */
  width: 480px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

`

const AgreementCheckButton = styled.button`
  border: none;
  border-radius: 2px;
  outline: none;
  font-size: 12px;
  font-weight: 400;
  background-color: #d9d9d9;
  /* color: white; */
  cursor: pointer;
  padding: 3px 12px 3px 12px;
`

const ChcekWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const ModralWrap = styled.div`
  position: relative;
  /* height: auto; */
  left: -1600px;
`

const TextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 420px;
  /* border: 1px solid white; */
`

export default Join;
