import React from "react";
import styled from "styled-components";


function AddProfile() {
  return (
    <>
      <AddProfileWrap>
        <ProfileTopWrap>
            <SelfWrap>
                <div>
                    <TitleTextTag>간단한 자기 소개</TitleTextTag>
                    <div>
                        <ProfileInput placeholder="간단하게 자신을 소개해 주세요"></ProfileInput>
                    </div>
                </div>
                <div>
                    <TitleTextTag>이메일 주소</TitleTextTag>
                    <div>
                        <ProfileInput placeholder="이메일 주소를 입력해 주세요"></ProfileInput>
                    </div>
                </div>
                <div>
                    <TitleTextTag>연락처</TitleTextTag>
                    <div>
                        <ProfileInput placeholder="연락처를 입력해 주세요"></ProfileInput>
                    </div>
                </div>
            </SelfWrap>
                <ProfilePicWrap>
                    <CircleProfile></CircleProfile>
                </ProfilePicWrap>
        </ProfileTopWrap>


        {/* 캘린더 작업물이 들어갈 공간 입니다 */}


            <SelectBoxWrap>
                <SelectAllWrap>
                  <TitleTextTag>개발자</TitleTextTag>
                <SelectBoxTab>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>React</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Vue.js</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>JavaScript</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Node.js</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Java</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Spring</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Python</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>C</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>C++</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>C#</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Swift</TecLabel>
                    <TecLabel> <CheckBox type="checkbox"></CheckBox>Kotlin</TecLabel>
                </SelectBoxTab>
                </SelectAllWrap>

                <SelectAllWrap>
                  <TitleTextTag>디자이너</TitleTextTag>
                  <SelectBoxTab>
                    <TecLabel><CheckBox type="checkbox"></CheckBox>Figma</TecLabel>
                    <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe XD</TecLabel>
                    <TecLabel><CheckBox type="checkbox"></CheckBox>Illustrator</TecLabel>
                    <TecLabel><CheckBox type="checkbox"></CheckBox>3D MAX</TecLabel>
                    <TecLabel><CheckBox type="checkbox"></CheckBox>Blender</TecLabel>
                  </SelectBoxTab>
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
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

const ProfileTopWrap = styled.div`
    border: 1px solid black;
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
    background-color: #A7A4E0;
`

const SelectBoxWrap = styled.div`
  border: 1px solid black;
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
  width: 580px;
  padding: 10px;
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


const TecLabel = styled.label`
  font-size: 14px;
`;



const CheckBox = styled.input`
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
`

const TitleTextTag = styled.p`
    font-weight: bold;
    color: #685bc7;

`


export default AddProfile;
