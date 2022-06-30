import React from "react";
import styled from "styled-components";

import Plus from "../image/plus.svg";

function AddProfile() {
  return (
    <>
      <AddProfileWrap>
        <AddProfileLeft>
          <LeftTextWrap>
            <LeftText>내 프로필</LeftText>
            <LeftText>설정</LeftText>
            <LeftText>로그아웃</LeftText>
          </LeftTextWrap>
        </AddProfileLeft>
        <AddProfileRight>
          <RightinLeft>
            <ProfileCircle></ProfileCircle>
            <ProfileTextWrap>
              <ProfileText>수정</ProfileText>
              <ProfileText>삭제</ProfileText>
            </ProfileTextWrap>
          </RightinLeft>
          <RightRight>
            <RightProfileText>이름</RightProfileText>
            <RightInput placeholder="이름을 입력해주세요"></RightInput>
            <RightProfileText>간단한 소개</RightProfileText>
            <RightInput placeholder="소개를 입력해주세요"></RightInput>
            <RightProfileText>주요 직군</RightProfileText>
            <RadioWrap>
              <label>
                <RadioInput type="radio"></RadioInput>Front-Enginer
              </label>
              <label>
                <RadioInput type="radio"></RadioInput>Back-Enginer
              </label>
              <label>
                <RadioInput type="radio"></RadioInput>Develroper
              </label>
              <label>
                <RadioInput type="radio"></RadioInput>Designer
              </label>
            </RadioWrap>
          </RightRight>
        </AddProfileRight>
      </AddProfileWrap>
    </>
  );
}

const AddProfileWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: 70px;
`;

const AddProfileLeft = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 100vh;
  color: white;
  background-color: #53565a;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

const LeftText = styled.span`
  font-weight: bold;
  margin-top: 40px;
  font-size: 18px;
`;

const AddProfileRight = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 100vh;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const RightinLeft = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 100vh;
`;

const ProfileCircle = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 200px;
  background-color: #8bb8e8;
  color: white;
  margin-top: 70px;
  background-image: url(${Plus});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const ProfileTextWrap = styled.div`
  /* border: 1px solid black; */
  height: 20px;
  width: 200px;
  margin-top: 30px;
  text-align: center;
`;

const ProfileText = styled.span`
  margin: 30px;
  font-weight: bold;
`;

const RightRight = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
  height: 100vh;
  margin-left: 30px;
`;

const RightProfileText = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const RightInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 400px;
  margin-bottom: 50px;
  margin-top: 10px;
  padding: 10px;
`;

const RadioInput = styled.input``;

const RadioWrap = styled.div``;

const LeftTextWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

export default AddProfile;
