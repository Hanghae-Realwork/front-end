import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";
import DayPickerSub from "../components/DayPickerSub";
import { DayPicker } from "react-day-picker";
import { format, isValid, parse, isAfter } from "date-fns";

import { ko } from "date-fns/esm/locale";

import Plus from "../image/plus.svg";

import "react-day-picker/dist/style.css";
import "../components/day-picker.css";

function RecruitWrite() {
  const dateref = useRef
  const [selected, setSelected] = useState(new Date);
  // const [startdate, setStart] = useState(selected.from);

 
  const today = new Date();
  const startdate = selected.from

  const enddate = selected.to
  


  const onSubmit = async (data) => {
    const output = {
      ...data,
      startdate: startdate,
      enddate: enddate
    }
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(output));
    console.log(data)
    console.log(output)
  }
  
  // console.log(selected)
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors }
  } = useForm();

  const addPost = async (e) => {


  }

  // const 
  // const variables={
  //   data:data,
  //   date:selected
  // }
  // console.log(variables)

  let footer = (
    <p
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "180px",
        textAlign: "center",
        fontSize: "13px",
      }}
    >
      시작날짜를 눌러주세요
    </p>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (

        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "150px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {format(selected.from, "yyyy년 MM월 dd일")}

        </p>

      );
    } else if (selected?.to) {
      footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "260px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {format(selected.from, "yyyy년 MM월 dd일 ")}~
          {format(selected.to, " yyyy년 MM월 dd일")}
        </p>
      );
    }

  }

  return (
    <>

      <RecruitWriteWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RecruitWriteTopWrap>
            <RecTitleTextWrap>
              <RecTitleText>구하는 직군</RecTitleText>
            </RecTitleTextWrap>
            <RecTopTextContentWrap >
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="frontend" {...register("role")} />프론트엔드 개발자
              </RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="backend" {...register("role")} />백엔드 개발자
              </RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="graphicDesigner" {...register("role")} />그래픽 디자이너
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
                <ConLabel><InputCon id="skills" type="checkbox" value="React" {...register("skills")} />React</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Vue.js" {...register("skills")} />Vue.js</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="JavaScript" {...register("skills")} />JavaScript</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Node.js" {...register("skills")} />Node.js</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Java" {...register("skills")} />Java</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Spring" {...register("skills")} />Spring</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Python" {...register("skills")} />Python</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="C" {...register("skills")} />C</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="C++" {...register("skills")} />C++</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="C#" {...register("skills")} />C#</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Swift" {...register("skills")} />Swift</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Kotlin" {...register("skills")} />Kotlin</ConLabel>
              </MidContetWrap>
              <MidTextWrap>
                <MidText>디자이너</MidText>
              </MidTextWrap>
              <MidContetWrap>
                <ConLabel><InputCon id="skills" type="checkbox" value="Illustrator" {...register("skills")} />Illustrator</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="adobe XD" {...register("skills")} />adobe XD</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Figma" {...register("skills")} />Figma</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="3D MAX" {...register("skills")} />3D MAX</ConLabel>
                <ConLabel><InputCon id="skills" type="checkbox" value="Blender" {...register("skills")} />Blender</ConLabel>
              </MidContetWrap>
            </RecMidContentWrap>
          </RecruitWriteMidWrap>

          <RecTitleTextWrap>
            <RecTitleText htmlFor="title">제목</RecTitleText>
            <div>

              <RecTitleTextInput
                id="title"
                type="text"
                placeholder="제목을 입력해주세요"
                {...register("title")}
              />
            </div>
          </RecTitleTextWrap>

          <RecTitleTextWrap>
            <RecTitleText htmlFor="subscript">프로젝트 제목</RecTitleText>
            <div><RecTitleTextInput
              id="subscript"
              type="text"
              placeholder="프로젝트의 제목을 입력해주세요"
              {...register("subscript")}
            /></div>
          </RecTitleTextWrap>

          <RecTitleTextWrap>
            <RecTitleText>프로젝트 기간</RecTitleText>
            <div id="DayPicker" >
              <DayPicker
                styles={{
                  caption: { fontSize: "10px", padding: "10px" },
                }}
                

                className="dayPicker_container__div"
                mode="range"
                selected={selected}

                onSelect={setSelected}
                locale={ko}
                numberOfMonths={2}
                disabled={{ before: today }}
                
              ></DayPicker>
              {footer}
            </div>
          </RecTitleTextWrap>


          <RecruitWriteTextBotWrap>
            <RecTitleTextWrap>
              <RecTitleText>프로젝트 상세 설명</RecTitleText>
            </RecTitleTextWrap>
            <div><RecMainCon
              id="details"
              type="text"
              placeholder="프로젝트의 내용을 입력해주세요"
              {...register("details")}
            /></div>
          </RecruitWriteTextBotWrap>
          <div>
            <RecButtonWrap >
              <RecButton type="submit" disabled={isSubmitting} onClick={addPost}>모집글 올리기</RecButton>
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
