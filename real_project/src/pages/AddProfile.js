import React from "react";
import styled from "styled-components";

import astroman from "../image/astroman.svg"

import SelectSkill from "../components/SelectSkill"


function AddProfile() {

  

  return (
    <>
      <AddProfileWrap>

        <ProfileTopWrap>
            <SelfWrap>
                <div>
                    <TitleTextTag>이메일 주소</TitleTextTag>
                    <div>
                        <ProfileInput placeholder="간단하게 자신을 소개해 주세요"></ProfileInput>
                    </div>
                </div>
                <div>
                    <TitleTextTag>연락처</TitleTextTag>
                    <div>
                    <label><input type="checkbox" id="toggle" hidden/><span /></label>
                    </div>
                </div>
                <div>
                    <TitleTextTag>간단한 자기 소개</TitleTextTag>
                    <div>
                        <ProfileInput placeholder="간단한 인사말을 남겨 주세요"></ProfileInput>
                    </div>
                </div>
            </SelfWrap>
                <ProfilePicWrap>
                    <CircleProfile></CircleProfile>
                </ProfilePicWrap>
        </ProfileTopWrap>
          <div>

        {/* 캘린더 작업물이 들어갈 공간 입니다 */}

          </div>
            <SelectBoxWrap>
                <SelectAllWrap>
                  <SelfWrap>
                    <TitleTextTag>내 직군</TitleTextTag>
                    <RadioRoleWrap>
                      <label><input id="role" type="radio" value="frontend" name="Radio"/>FrontEnd</label>
                      <label><input id="role" type="radio" name="Radio" value="backend"/>BackEnd</label>
                      <label><input id="role" type="radio" name="Radio" value="graphicDesigner"/>Designer</label>
                    </RadioRoleWrap>
                 </SelfWrap>
                <SelfWrap>
                    <SelectSkill/>
                </SelfWrap>
                </SelectAllWrap>
            </SelectBoxWrap>
      </AddProfileWrap>
    </>
  );
}

const AddProfileWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
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
    padding: 30px;
`

const ProfileInput = styled.input`
    padding: 10px;
    outline: none;
    border: none;
    width: 350px;
    border-bottom: 1px solid black;
`

const ProfilePicWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

const ProfileTopWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`

const CircleProfile = styled.div`
    /* border: 1px solid black; */
    width: 180px;
    height: 180px;
    border-radius:180px;
    background-color: transparent;
    background-image: url(${astroman});
    background-position: center;
    background-size: cover;
`

const SelectBoxWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SelectAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  /* margin-bottom: px; */
  width: 100%;
  border: 1px solid black;
`;

const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const RadioWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  width: 100%;
`

const RadioRoleWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  gap: 25px;
`

const TitleTextTag = styled.p`
    font-weight: bold;
    color: #323230;
`



export default AddProfile;
