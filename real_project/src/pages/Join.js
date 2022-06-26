import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Join() {
  const [userId, setUserId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickname, setNickName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  //새로시도한 email
  const [emailWrite, setEmailWrite] = useState(false);
  //error
  const [userIdError, setUserIdError] = useState(false);
  const [nicknameError, setNickNameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  //핸드폰 하이픈
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

  //유효성 검사
  const onChangeUserId = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };

  const onChageNickName = (e) => {
    setNickNameError(false);
    setNickName(e.target.value);
  };
  const onChageName = (e) => {
    setNameError(false);
    setName(e.target.value);
  };
  const OnChangephoneNumber = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };
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
  const OnChangePassWordCheck = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPasswordCheck(e.target.value);
  };

  const JoinOnClick = () => {
    console.log(userId, phoneNumber, nickname, name, password, passwordCheck);
  };
  //새로운 이메일 시도

  const changeEmailSelect = (e) => {
    const { value, name } = e.target;

    const select = document.getElementsByName("emailSelect")[0].value;

    if (select === "write") {
      setEmailWrite(true);
      console.log(emailWrite);
    } else setEmailWrite(false);
    console.log(emailWrite);
  };
  return (
    <Container>
      {/* 이메일 */}
      <label>
        <input
          required
          type="email"
          placeholder="아이디"
          value={userId}
          onChange={onChangeUserId}
        ></input>
        {userIdError && <ValiDiv>이메일 형식에 맞지 않습니다.</ValiDiv>}
      </label>

      {/* nickname */}
      <label>
        <input
          required
          type="text"
          placeholder="닉네임"
          minLength={2}
          maxLength={8}
          value={nickname}
          onChange={onChageNickName}
        ></input>
        {nicknameError && <ValiDiv>이메일 형식에 맞지 않습니다.</ValiDiv>}
      </label>

      <label>
        <input
          required
          type="text"
          placeholder="이름"
          minLength={2}
          maxLength={5}
          value={name}
          onChange={onChageName}
        ></input>
      </label>
      <label>
        <input
          required
          type="text"
          placeholder="폰넘버"
          onChange={OnChangephoneNumber}
          value={phoneNumber}
        ></input>
      </label>
      <label>
        <input
          required
          type="password"
          placeholder="비밀번호"
          maxLength={16}
          onChange={OnChangePassWord}
          value={password}
        ></input>
        {passwordError && (
          <ValiDiv>숫자, 영어, 특수문자 조합 8~16글자로 입력해주세요.</ValiDiv>
        )}
      </label>
      <label>
        <input
          required
          type="password"
          placeholder="비밀번호 체크"
          maxLength={16}
          onChange={OnChangePassWordCheck}
          value={passwordCheck}
        ></input>
        {confirmPasswordError && <ValiDiv>비밀번호를 확인해주세요.</ValiDiv>}
      </label>
      <h1>새로 시도해본 이메일 어떤가요 ? </h1>
      <div>
        <h5> 이메일 </h5>
        <input type="text" maxLength="15" name="email" /> @
        <Select name="emailSelect" onChange={changeEmailSelect}>
          <option value="gmail.com"> gmail.com </option>
          <option value="naver.com"> naver.com </option>
          <option value="write"> 직접 입력 </option>
        </Select>
        {emailWrite ? (
          <input type="text" name="emailWrite" maxLength={20} />
        ) : null}
      </div>

      <Button onClick={JoinOnClick}>회원가입하기</Button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ValiDiv = styled.p`
  color: red;
`;
const Button = styled.button`
  width: 70%;
  height: 20px;
  margin: auto;
`;
const Select = styled.select`
  padding: 3px;
  margin-left: 5px;
`;
export default Join;
