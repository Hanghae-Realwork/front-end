import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signupAxios } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

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
    } else {
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
    if (e.target.value.length === 1) {
      setNickNameError(false);
      setNickName(e.target.value);
    } else {
      setNickNameError(true);
      setNickName(e.target.value);
    }
  };

  //유효성검사:Name
  const onChageName = (e) => {
    if (e.target.value.length === 1) {
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

  const signupFunction = async () => {
    console.log(
      userId,
      nickname,
      name,
      birth,
      phoneNumber,
      password,
      passwordCheck,
      profileImage,
      allCheck

    );
    try {
      await dispatch(
        signupAxios(
          userId,
          nickname,
          name,
          birth,
          phoneNumber,
          password,
          allCheck
        )
      ).then((res) => {
        if (res === true) {
          console.log(res);
          navigate("/login");
          alert("회원가입되었습니다!");
        } else {
          if (res.response.data.message === "the username already exists.") {
            alert("이미 가입된 ID입니다!");
            document.getElementById("SigninBtn").disabled = false;
          } else if (
            res.response.data.message === "the nickname already exists."
          ) {
            alert("이미 가입된 닉네임입니다!");
            document.getElementById("SigninBtn").disabled = false;
          } else if (res.response.data.errors[0] === undefined) {
            alert("입력한 내용을 다시 확인해주세요!");
            document.getElementById("SigninBtn").disabled = false;
          } else {
            alert(
              res.response.data.errors[0].field +
                "에 " +
                res.response.data.errors[0].reason
            );
            document.getElementById("SigninBtn").disabled = false;
          }
        }
      });
    } catch (err) {
      alert("에러입니다!" + err);
    }
  };

  return (
    <>
      <JoinWrap>
        <AlignWrap>
          <LogoWrap>
            <p>로고</p>
          </LogoWrap>
          <InpuJoinWrap>
            <IdWrap>
              <InputBar
                repuired
                type="email"
                placeholder="아이디"
                value={userId}
                onChange={onChangeUserId}
              ></InputBar>
              {userIdError && <ValiSpan>이메일 형식에 맞지 않습니다.</ValiSpan>}
            </IdWrap>

            <IdWrap>
              <InputBar
                required
                type="text"
                placeholder="닉네임"
                minLength={2}
                maxLength={8}
                value={nickname}
                onChange={onChageNickName}
              ></InputBar>
              {nicknameError ? (
                ""
              ) : (
                <ValiSpan>1글자 이상 입력해주세요.</ValiSpan>
              )}
            </IdWrap>

            <IdWrap>
              <InputBar
                required
                type="text"
                placeholder="이름"
                minLength={2}
                maxLength={5}
                value={name}
                onChange={onChageName}
              ></InputBar>
              {nameError ? "" : <ValiSpan>1글자 이상 입력해주세요.</ValiSpan>}
            </IdWrap>
            <IdWrap>
              <InputBar
                required
                type="text"
                placeholder="생년월일 / 0000-00-00"
                value={birth}
                onChange={onChangeBirth}
              ></InputBar>
            </IdWrap>
            <IdWrap>
              <InputBar
                placeholder="핸드폰 번호 / 010-0000-0000"
                required
                type="text"
                onChange={OnChangephoneNumber}
                value={phoneNumber}
              ></InputBar>
            </IdWrap>
            <PwWrap>
              <InputBar
                placeholder="비밀번호"
                required
                type="password"
                maxLength={16}
                onChange={OnChangePassWord}
                value={password}
              ></InputBar>
              {passwordError && (
                <ValiSpan>
                  숫자, 영어, 특수문자 조합 8~16글자로 입력해주세요.
                </ValiSpan>
              )}
            </PwWrap>
            <PwWrap>
              <InputBar
                placeholder="비밀번호 확인"
                required
                type="password"
                maxLength={16}
                onChange={OnChangePassWordCheck}
                value={passwordCheck}
              ></InputBar>
              {confirmPasswordError && (
                <ValiSpan>비밀번호를 확인해주세요.</ValiSpan>
              )}
            </PwWrap>
            <PolicyWrap>
              {" "}
              <div>
                <label>약관동의</label>
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="all-check"
                      checked={allCheck}
                      onChange={allBtnEvent}
                    />
                    <label htmlFor="all-check">전체동의</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="check1"
                      checked={ageCheck}
                      onChange={ageBtnEvent}
                    />
                    <label htmlFor="check1">
                      만 14세 이상입니다 <span>(필수)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="check2"
                      checked={useCheck}
                      onChange={useBtnEvent}
                    />
                    <label htmlFor="check2">
                      이용약관 <span>(필수)</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="check3"
                      checked={marketingCheck}
                      onChange={marketingBtnEvent}
                    />
                    <label htmlFor="check3">
                      마케팅 동의 <span>(선택)</span>
                    </label>
                  </div>
                </div>
              </div>
            </PolicyWrap>
          </InpuJoinWrap>
          <ButtonWrap>
            <JoinButton onClick={signupFunction}>회원가입</JoinButton>
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
`;
const ValiSpan = styled.span`
  color: red;
`;
const InpuJoinWrap = styled.div`
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
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  flex-direction: column;
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

const PolicyWrap = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
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

const ServicePolicy = styled.span``;

const CheckBox = styled.input``;

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
  background-color: #25282a;
`;

export default Join;

