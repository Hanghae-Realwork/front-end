import React, {useState, useRef} from "react";
import styled from "styled-components";

import astroman from "../image/astroman.svg"
import { useForm } from "react-hook-form";
import SelectSkill from "../components/SelectSkill"
import Phone from "../image/phone.svg"
import Letter from "../image/letter.svg"


function AddProfile(props) {
  const {isChecked, handleToggle} = props;

  // function AddInput() {
  //   let [inputTit, inputTitFunc] = useState([]);
  //   let [inputNum, inputNumFunc] = useState(0);
  //   let [newVal, newValFunc] = useState('');


  //   function deleteInput(idx) {
  //     inputNum(inputNumFunc.filter(item => item.id !== idx))
  //   }

  //   function AddCareer(){
  //     const CareerList = [...inputTit];
  //     CareerList.push(newVal);
  //     inputTitFunc( CareerList );
  //   }
  //   return (
  //     <InputCareerWrap>
  //       <div>
  //         <CareerInput placeholder="전공, 학교, 자격증, 업무 경력 등" onChange={ (e)=>{ newValFunc(e.target.value) } }/>
  //         <CareerInputButton onClick={ AddCareer }>입력</CareerInputButton>
  //       </div>
  //       <RightInputDiv>
  //       {inputTit.map( ( menu, idx )=>{
  //             return (
  //               <CareerLabel onClick={ ()=>{ inputNumFunc(idx) } } key={idx} > { menu }</CareerLabel>)
  //           })
  //         }
  //       </RightInputDiv>
  //     </InputCareerWrap>
  //   );
  // }


  // const onSubmit = async (data) => {
  //   const career= AddInput.inputTit
  //   const output = {
  //     ...data,
  //     ...career
      
      
  //   }
  //   await new Promise((r) => setTimeout(r, 1000));
    
  //   // dispatch(
  //   //   사용할 api({
  //   //     ...output
  //   //   })
  //   // );
  //   console.log(output)
    
  // }
  // const {
  //   register, handleSubmit,
  //   formState: { isSubmitting, isDirty, errors },
  // } = useForm();

  return (

    <BackgroundAllWrap>
      <AddProfileWrap>
        <TitleDiv><TitleText>내 소개글 작성하기</TitleText></TitleDiv>
      <HeaderHeadLine/>
        <ProfileTopWrap>
            <SelfWrap>
              <NickNameBox>닉네임님</NickNameBox>
            <ToggleBox>
            <TitleTextTag>이메일 정보</TitleTextTag>
                  <PhoneNumberWrap><img src={Letter} style={{marginRight:"10px"}}></img><Contect>test@testman.com</Contect></PhoneNumberWrap>
                  {/* <ToggleTextWrap>
                      <CheckBoxWrapperOne>
                        <CheckBoxOne id={"checkboxOne"} type="checkbox" 
                        checked={isChecked}
                        onChange={handleToggle}
                        
                        />
                        <CheckBoxLabelOne htmlFor={"checkboxOne"} />
                      </CheckBoxWrapperOne>
                    </ToggleTextWrap> */}
                {/* </ToggleBox>
                <ToggleBox> */}
                  {/* <PhoneNumberWrap><img src={Phone} style={{marginRight:"10px"}}></img><Contect>010-0000-000,000,000,000,000</Contect></PhoneNumberWrap> */}
                  {/* <ToggleTextWrap>
                    <TitleTextTag>연락처 공개</TitleTextTag>
                      <CheckBoxWrapper>
                        <CheckBox id="checkboxTwo" type="checkbox" />
                        <CheckBoxLabel htmlFor="checkbox" />
                      </CheckBoxWrapper>
                    </ToggleTextWrap> */}
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
                    <PhotoEditWrap>
                      <PhotoText>삭제</PhotoText>
                      <PhotoText>수정</PhotoText>
                    </PhotoEditWrap>
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
            <PortfollioWrap>
              <TitleTextTag>포트폴리오 링크를 적어주세요</TitleTextTag>
              <ProfileInput placeholder="GitHub, Figma 등 링크를 적어 주세요"></ProfileInput>
            </PortfollioWrap>
            <SelfWrap>
              <TitleTextTag>주요 경력 및 자기소개</TitleTextTag>
              <PointCraeer></PointCraeer>
            </SelfWrap>
            <HeaderHeadLine/>
              <SubmitButtonWrap>
               <SubmitButton>소개글 등록하기</SubmitButton>
              </SubmitButtonWrap>
      </AddProfileWrap>
    </BackgroundAllWrap>

  );
}

const BackgroundAllWrap = styled.div`
    background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(93.14deg, rgba(174, 151, 227, 0.15) 0.24%, rgba(119, 195, 231, 0.15) 34.73%, rgba(174, 151, 227, 0.15) 67.67%, rgba(119, 195, 231, 0.15) 95.47%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


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
    background-color: white;
`

const SelfWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;
    height: auto;
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
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: 50px 150px 0px 0px;
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
    width: 200px;
    height: 200px;
    border-radius: 100%;
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
  line-height: 21px;
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

const PortfollioWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 1140px;
`

const PointCraeer = styled.textarea`
  resize: none;
  width: 1140px;
  height: 400px;
  border-radius: 4px;
  padding: 10px;
`

const NickNameBox = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  /* border: 1px solid black; */
`

const PhotoEditWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  margin-top: 24px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const PhotoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`

const SubmitButtonWrap = styled.div`
  /* border: 1px solid black; */
  width: 1140px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 30px 0px 30px 0px;
  padding: 12px 28px;
  color: white;
  font-weight: 700;
`


export default AddProfile;
