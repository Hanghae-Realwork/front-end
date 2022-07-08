import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm, useWatch } from "react-hook-form";
import DayPickerSub from "../components/DayPickerSub";
import { DayPicker } from "react-day-picker";
import { format, isValid, parse, isAfter } from "date-fns";
import "react-day-picker/dist/style.css";
import "../components/day-picker.css";
import { ko } from "date-fns/esm/locale";

import FindStep01 from "../components/FindProjectStep01"
import FindStep02 from "../components/FindProjectStep02"

import SelectSkill from "../components/SelectSkill";


const FindProjectStep01 = (props) => {


  const navigate = useNavigate()

  const dateref = useRef
  const [selected, setSelected] = useState(new Date);
  // const [startdate, setStart] = useState(selected.from);
  const today = new Date();
  const startdate = JSON.stringify(selected.from)
  const enddate = JSON.stringify(selected.to)

  const onSubmit = async (data) => {
    const output = {
      ...data,
      start: startdate.slice(1, 11),
      end: enddate.slice(1, 11),
      email: null,
      phone: null,
      schedule: null,
    }

    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(output));
    axios({
      method: "post",
      url: "http://3.39.226.20/api/projects",
      data: JSON.stringify(output),
      headers: {"content-type": `application/json`}
    })
    .then((res) => {alert("프로젝트 등록완료!")})
  }

  const {
    register, handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  let footer = (
    <Ptag>시작날짜를 눌러주세요</Ptag>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <Ptag>
          {format(selected.from, "yyyy년 MM월 dd일")}
        </Ptag>
      );
    } else if (selected?.to) {
      footer = (
        <Ptag>
          {format(selected.from, "yyyy년 MM월 dd일 ")}~
          {format(selected.to, " yyyy년 MM월 dd일")}
        </Ptag>
      );
    }
  }

  return (
    <>
      <FindProjectAllWrap>
        <FindprojectTopWrap>
            <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
        </FindprojectTopWrap>
          <HeadLine/>
          <FindProjectStepWrap>
              <FindProjectStepGuideText><span>1. 프로젝트 설명하기</span> <span>2.크루 모집하기</span></FindProjectStepGuideText>
          </FindProjectStepWrap>
        <HeadLine/>
        <FindProjectInputTitle>
                <ProjectTitleText>제목 (최대 n자 이내)</ProjectTitleText>
                <ProjectInput placeholder="제목을 입력해 주세요"></ProjectInput>
        </FindProjectInputTitle>
        <FindProjectInputTitle>
            <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
            <ProjectInput placeholder="간단한 프로젝트 설명을 넣어주세요"></ProjectInput>
        </FindProjectInputTitle>
          <div>
            <ProjectTitleText>프로젝트 기간</ProjectTitleText>
            <div id="DayPicker">
              <DayPicker
                styles={{caption: { fontSize: "13px", padding: "10px"}}}
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
        </div>
        <div>
            <ProjectTitleText>팀 상세 설명</ProjectTitleText>
            <div><RecMainCon id="details" type="text" placeholder="프로젝트의 내용을 입력해주세요" {...register("details")}/></div>
        </div>
        <div><button onClick={() => {navigate(`/findprojectstep2`)}}>다음 단계로</button></div>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`
  /* border: 1px solid black; */
`

const FindProjectTitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px 30px 32px;
`

const FindprojectTopWrap = styled.div`
  height: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const FindProjectStepGuideText = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 17px 0px 23px 30px;
`

const FindProjectStepWrap = styled.div`
  height: 67px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const HeadLine = styled.hr`
  border: 1px solid #D9D9D9;
  width: 1200px;
`

const FindProjectInputTitle = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
`

const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  
`

const ProjectInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 8px;
  width: 1000px;
  margin-top: 16px;
`

const Ptag = styled.p`
  margin: 10px; 
  padding: 10px; 
  border: 1px solid black;
  border-radius: 10px;
  width: 180px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`

const RecMainCon = styled.textarea`
  margin: 20px; 
  padding: 10px; 
  width: 600px; 
  height: 400px; 
  outline: none; 
  resize: none;
`;

export default FindProjectStep01;
