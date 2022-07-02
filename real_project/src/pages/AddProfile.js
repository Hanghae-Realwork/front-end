import React from "react";
import styled from "styled-components";

import Plus from "../image/plus.svg";

function AddProfile() {
  return (
    <>
      <AddProfileWrap>

          <ProfileTopWrap>
            <SelfWrap>
                <div>
                    <ProfileTitleText>간단한 자기 소개</ProfileTitleText>
                    <div>
                        <ProfileInput placeholder="간단하게 자신을 소개해 주세요"></ProfileInput>
                    </div>
                </div>
                <div>
                    <ProfileTitleText>이메일 주소</ProfileTitleText>
                    <div>
                        <ProfileInput placeholder="이메일 주소를 입력해 주세요"></ProfileInput>
                    </div>
                </div>
                <div>
                    <ProfileTitleText>연락처</ProfileTitleText>
                    <div>
                        <ProfileInput placeholder="연락처를 입력해 주세요"></ProfileInput>
                    </div>
                </div>
            </SelfWrap>
                <ProfilePicWrap>
                    <CircleProfile></CircleProfile>
                </ProfilePicWrap>
        </ProfileTopWrap>

      </AddProfileWrap>
    </>
  );
}

const AddProfileWrap = styled.div`

    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 70px;
`

const SelfWrap = styled.div`
    border: 1px solid wrap;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const ProfileTitleText = styled.span`

`

const ProfileInput = styled.input`
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
`

const ProfilePicWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const ProfileTopWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const CircleProfile = styled.div`
    border: 1px solid black;
    width: 100px;
    height: 100px;
    border-radius:100px;
`



const RadioWrap = styled.div``;



export default AddProfile;
