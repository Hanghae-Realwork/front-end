import React, {useState, useRef} from "react";
import styled from "styled-components";

import astroman from "../image/astroman.svg"

import SelectSkill from "../components/SelectSkill"
import Phone from "../image/phone.svg"
import Letter from "../image/letter.svg"


function AddProfile() {

  function AddInput() {
    let [inputTit, inputTitFunc] = useState([]);
    let [inputNum, inputNumFunc] = useState(0);
    let [newVal, newValFunc] = useState('');

    function deleteInput(idx) {
      inputNum(inputNumFunc.filter(item => item.id !== idx))
    }

    function AddCareer(){
      const CareerList = [...inputTit];
      CareerList.push(newVal);
      inputTitFunc( CareerList );
    }
    return (
      <InputCareerWrap>
        <div>
          <CareerInput placeholder="전공, 학교, 자격증, 업무 경력 등" onChange={ (e)=>{ newValFunc(e.target.value) } }/>
          <CareerInputButton onClick={ AddCareer }>입력</CareerInputButton>
        </div>
        <RightInputDiv>
        {inputTit.map( ( menu, idx )=>{
              return (
                <CareerLabel onClick={ ()=>{ inputNumFunc(idx) } } key={idx} > { menu }</CareerLabel>
              )
            })
          }
        </RightInputDiv>
      </InputCareerWrap>
    );
  }

  

  return (
    <>
      <AddProfileWrap>
        <TitleDiv><TitleText>내 소개글 작성하기</TitleText></TitleDiv>
      <HeaderHeadLine/>
        <ProfileTopWrap>
            <SelfWrap>
            <ToggleBox>
                  <PhoneNumberWrap><img src={Letter} style={{marginRight:"10px"}}></img><Contect>test@testman.com</Contect></PhoneNumberWrap>
                  <ToggleTextWrap>
                    <TitleTextTag>이메일 공개</TitleTextTag>
                      <CheckBoxWrapperOne>
                        <CheckBoxOne id="checkboxOne" type="checkbox" />
                        <CheckBoxLabelOne htmlFor="checkbox" />
                      </CheckBoxWrapperOne>
                    </ToggleTextWrap>
                </ToggleBox>
                <ToggleBox>
                  <PhoneNumberWrap><img src={Phone} style={{marginRight:"10px"}}></img><Contect>010-0000-0000</Contect></PhoneNumberWrap>
                  <ToggleTextWrap>
                    <TitleTextTag>연락처 공개</TitleTextTag>
                      <CheckBoxWrapper>
                        <CheckBox id="checkboxTwo" type="checkbox" />
                        <CheckBoxLabel htmlFor="checkbox" />
                      </CheckBoxWrapper>
                    </ToggleTextWrap>
                </ToggleBox>
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
            <SelfWrap>
              <TitleTextTag>본인의 경력을 소개해 주세요</TitleTextTag>
              <AddInput/>
            </SelfWrap>
            <SelfWrap>
              <TitleTextTag>주요 경력 및 자기소개</TitleTextTag>
              <PointCraeer></PointCraeer>
            </SelfWrap>
      </AddProfileWrap>
    </>
  );
}

const AddProfileWrap = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 70px;
    width: 1200px;
`

const SelfWrap = styled.div`
    /* border: 1px solid black; */
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
    width: 555px;
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
  /* border: 1px solid black; */
`;


const PhoneNumberWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
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

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-top:10px;
  margin-left: 20px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 50px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 19px;
      height: 19px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

const Contect = styled.span`
  font-size: 16px;
  font-weight: 400;
`

const ToggleBox = styled.div`
  /* border: 1px solid black; */
  width: auto;
  margin: 30px 0px 30px 0px;
  /* margin-left: 20px; */
`

const ToggleTextWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const CheckBoxWrapperOne = styled.div`
  position: relative;
  margin-top:10px;
  margin-left: 20px;
`;

const CheckBoxLabelOne = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBoxOne = styled.input`
  opacity: 0;
  z-index: 2;
  border-radius: 15px;
  width: 50px;
  height: 26px;
  &:checked + ${CheckBoxLabelOne} {
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 19px;
      height: 19px;
      margin-left: 28px;
      transition: 0.2s;
    }
  }
`;

const HeaderHeadLine =styled.hr`
  /* border: 1px solid #D9D9D9; */
  width: 1200px;
`

const TitleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  /* border: 1px solid black; */
`

const TitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px 30px 30px;
`

const CareerInput = styled.input`
  width: 550px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 8px;
`

const CareerInputButton = styled.button`
  width: 100px;
  padding: 5px;
  margin: 0px 25px 0px 25px;
  background-color: #303032;
  color: white;
  font-weight: 700;
  font-size: 15px;
  border: none;
  outline: none;
`

const RightInputDiv = styled.div`
  /* border: 1px solid black; */
  width: 1100px;
  height: 200px;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 20px;
  overflow: scroll;
`

const InputCareerWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 1140px;
`

const CareerLabel = styled.label`
  background-color: #ae97E3;
  font-size: 12px;
  border-radius: 5px;
  height: 20px;
  color: white;
  padding: 4px;
`


const PointCraeer = styled.div`
`

export default AddProfile;
