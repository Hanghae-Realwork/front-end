import React, { useState } from "react";
import styled from "styled-components";
import DayPickerSub from "../components/DayPickerSub";
import { useForm } from "react-hook-form";
function RecruitWrite() {
  const [role, setRole] = useState("");

  const { handleSubmit, register, error, watch } = useForm({
    defaultValues: {
      title: "",
      details: "",
      subscript: "",
      role: "",
      start: "",
      end: "",
      skills: [],
      email: "",
      phone: "",
      schedule: null,
    },
  });

  console.log(watch());
  const saveBtnClick = () => {};
  return (
    <>
      <RecruitWriteWrap>
        <form onSubmit={handleSubmit(saveBtnClick)}>
          <RecruitWriteTopWrap>
            <RecTitleTextWrap>
              <RecTitleText>구하는 직군</RecTitleText>
            </RecTitleTextWrap>
            <RecTopTextContentWrap>
              <RecTopRadioLabel>
                <RecTopRadio
                  type="radio"
                  name="RecRadio"
                  value="frontend"
                  {...register("role")}
                />
                프론트엔드 개발자
              </RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio
                  type="radio"
                  name="RecRadio"
                  value="backend"
                  {...register("role")}
                />
                백엔드 개발자
              </RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio
                  type="radio"
                  name="RecRadio"
                  value="designer"
                  {...register("role")}
                />
                그래픽 디자이너
              </RecTopRadioLabel>
            </RecTopTextContentWrap>
          </RecruitWriteTopWrap>

          <RecruitWriteMidWrap>
            <RecTitleTextWrap>
              <RecTitleText>요구 스킬</RecTitleText>
            </RecTitleTextWrap>
            <RecMidContentWrap>
              <MidTextWrap>
                <MidText>개발자</MidText>
              </MidTextWrap>
              <MidContetWrap>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="React"
                    {...register("skills")}
                  />
                  React
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Vue.js"
                    {...register("skills")}
                  />
                  Vue.js
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="JavaScript"
                    {...register("skills")}
                  />
                  JavaScript
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Node.js"
                    {...register("skills")}
                  />
                  Node.js
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Java"
                    {...register("skills")}
                  />
                  Java
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Spring"
                    {...register("skills")}
                  />
                  Spring
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Python"
                    {...register("skills")}
                  />
                  Python
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="C"
                    {...register("skills")}
                  />
                  C
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="C++"
                    {...register("skills")}
                  />
                  C++
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="C#"
                    {...register("skills")}
                  />
                  C#
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Swift"
                    {...register("skills")}
                  />
                  Swift
                </ConLabel>
                <ConLabel>
                  <InputCon
                    id="skills"
                    type="checkbox"
                    vlaue="Kotlin"
                    {...register("skills")}
                  />
                  Kotlin
                </ConLabel>
              </MidContetWrap>
              <MidTextWrap>
                <MidText>디자이너</MidText>
              </MidTextWrap>
              <MidContetWrap>
                <ConLabel>
                  <InputCon type="checkbox" />
                  Illustrator
                </ConLabel>
                <ConLabel>
                  <InputCon type="checkbox" />
                  adobe XD
                </ConLabel>
                <ConLabel>
                  <InputCon type="checkbox" />
                  Figma
                </ConLabel>
                <ConLabel>
                  <InputCon type="checkbox" />
                  3D MAX
                </ConLabel>
                <ConLabel>
                  <InputCon type="checkbox" />
                  Blender
                </ConLabel>
              </MidContetWrap>
            </RecMidContentWrap>
          </RecruitWriteMidWrap>

          <RecTitleTextWrap>
            <RecTitleText>제목</RecTitleText>
            <div>
              <RecTitleTextInput />
            </div>
          </RecTitleTextWrap>

          <RecTitleTextWrap>
            <RecTitleText>프로젝트 제목</RecTitleText>
            <div>
              <RecTitleTextInput />
            </div>
          </RecTitleTextWrap>

          <RecTitleTextWrap>
            <RecTitleText>프로젝트 기간</RecTitleText>
            <div>
              <DayPickerSub />
            </div>
          </RecTitleTextWrap>

          <RecruitWriteTextBotWrap>
            <RecTitleTextWrap>
              <RecTitleText>프로젝트 상세 설명</RecTitleText>
            </RecTitleTextWrap>
            <div>
              <RecMainCon />
            </div>
          </RecruitWriteTextBotWrap>

          <div>
            <RecButtonWrap>
              <RecButton type="submit">모집글 올리기</RecButton>
            </RecButtonWrap>
          </div>
        </form>
      </RecruitWriteWrap>
    </>
  );
}

const RecruitWriteWrap = styled.div`
  /* border: 1px solid black; */
  width: 700px;
`;

const RecruitWriteTopWrap = styled.div`
  /* border: 1px solid black; */
`;

const RecTitleTextWrap = styled.div`
  margin: 30px 0px 10px 0;
`;

const RecruitWriteMidWrap = styled.div`
  /* border: 1px solid black; */
`;

const RecruitWriteTextBotWrap = styled.div`
  /* border: 1px solid black; */
`;

const RecTitleText = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: #685bc7;
`;

const RecTopTextContentWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin: 15px;
`;

const RecTopRadio = styled.input`
  appearance: none;
  border: 0.5px solid gainsboro;
  border-radius: 5rem;
  width: 15px;
  height: 15px;
  margin-bottom: -2px;
  margin-right: 5px;
  &:checked {
    border-color: transparent;
    background-color: #685bc7;
  }
`;

const RecTopRadioLabel = styled.label``;

const RecMidContentWrap = styled.div`
  /* border: 1px solid black; */
`;

const MidTextWrap = styled.div`
  /* border: 1px solid black; */
  margin-top: 10px;
`;

const MidText = styled.span`
  font-size: 14px;
  margin: 15px;
`;

const MidContetWrap = styled.div`
  margin: 15px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const InputCon = styled.input`
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
`;

const ConLabel = styled.label`
  font-size: 13px;
`;

const RecMainCon = styled.textarea`
  margin: 20px;
  padding: 10px;
  width: 600px;
  height: 400px;
  outline: none;
  resize: none;
`;

const RecTitleTextInput = styled.input`
  border: none;
  outline: none;
  padding: 7px;
  border-bottom: 1px solid black;
  width: 600px;
  margin: 15px;
`;

const RecButtonWrap = styled.div`
  margin: 15px;
  float: right;
`;

const RecButton = styled.button`
  background-color: #685bc7;
  padding: 15px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  border-radius: 10px;
`;

export default RecruitWrite;
