import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
import { createRecruitApi, loadRecruitOneApi } from "../redux/modules/postRecruit";
import store from "../redux/configstore";

const FindProjectStep01 = (props) => {
  const params = useParams(null);
  console.log(params)
  const projectIdNum = (params?.projectid)
  console.log(projectIdNum)
  const dispatch = useDispatch
  const navigate = useNavigate()
  const dateref = useRef
  const callStorage = sessionStorage.getItem('obj')
  const storageData = JSON.parse(callStorage)
  const [selected, setSelected] = useState(new Date);
  // const [startdate, setStart] = useState(selected.from);
  const today = new Date();
  const startdate = JSON.stringify(selected.from)
  const enddate = JSON.stringify(selected.to)

  console.log(storageData)

  
  useEffect(() => {
    
    store.dispatch(loadRecruitOneApi(projectIdNum));
}, []);
  
  const onSubmit = async (data) => {

    const output = {
      ...data,
      
      start: startdate.slice(1, 11),
      end: enddate.slice(1, 11),
      selected:selected,
      photos: ["null", "null"],

    }
    await new Promise((r) => setTimeout(r, 1000));

    sessionStorage.setItem('obj', JSON.stringify(output))

    console.log(output)
    
    if(projectIdNum === undefined) {
     navigate(`/findprojectstep2`)
    }else if (projectIdNum ){
      navigate(`/findprojectstep2/${projectIdNum}`)
    }

    
    // await new Promise((delStorage) => setTimeout(delStorage,  10000));
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FindprojectTopWrap>
            <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
          </FindprojectTopWrap>
          <HeadLine />
          <FindProjectStepWrap>
            <FindProjectStepGuideText1>1. 프로젝트 설명하기</FindProjectStepGuideText1>
            <FindProjectStepGuideText2>2.크루 모집하기</FindProjectStepGuideText2>
          </FindProjectStepWrap>
          <HeadLine />
          <FindProjectInputTitle>
            <ProjectTitleText>제목 (최대 n자 이내)</ProjectTitleText>
            {storageData ? (
              <ProjectInput
                id="title"
                type="text"
                placeholder="제목을 입력해주세요"
                defaultValue={storageData.title }
                {...register("title", { required: true })}
              ></ProjectInput>
            ) : (
              <ProjectInput
                id="title"
                type="text"
                placeholder="제목을 입력해주세요"
                {...register("title", { required: true })}
              ></ProjectInput>
            )}
          </FindProjectInputTitle>

          <FindProjectInputTitle>
            <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
            {storageData ? (
              <ProjectInput
                id="subscript"
                type="text"
                placeholder="프로젝트를 설명해주세요"
                defaultValue={storageData.subscript}
                {...register("subscript", { required: true })}
              ></ProjectInput>
            ) : (
              <ProjectInput
                id="subscript"
                type="text"
                placeholder="프로젝트를 설명해주세요"
                {...register("subscript", { required: true })}
              ></ProjectInput>
            )}
          </FindProjectInputTitle>
          <FindProjectInputDate>
            <ProjectTitleText>프로젝트 기간</ProjectTitleText>
            <div>
            {storageData ? (
              <DayPicker
                styles={{ caption: { fontSize: "13px", padding: "10px" } }}
                className="dayPicker_container__div"
                mode="range"
                selected={selected}
                onSelect={setSelected}
                locale={ko}
                numberOfMonths={2}
                disabled={{ before: today }}
                value={storageData.selected}
              ></DayPicker>
              ) : (
                <DayPicker
                styles={{ caption: { fontSize: "13px", padding: "10px" } }}
                className="dayPicker_container__div"
                mode="range"
                selected={selected}
                onSelect={setSelected}
                locale={ko}
                numberOfMonths={2}
                disabled={{ before: today }}
              ></DayPicker>
              )}
              {footer}
              </div>
            
          </FindProjectInputDate>
          <FindProjectInputTitle>
            <ProjectTitleText>팀 상세 설명</ProjectTitleText>
            <div>
            {storageData ? (
              <RecMainCon
                id="details"
                type="text"
                placeholder="프로젝트의 내용을 입력해주세요"
                defaultValue={storageData.details}
                {...register("details")}
              />
              ) : (
                <RecMainCon
                id="details"
                type="text"
                placeholder="프로젝트의 내용을 입력해주세요"
                {...register("details")}
              />
              )}
            </div>
          </FindProjectInputTitle>
          <div><NextStepButton type="submit" disabled={isSubmitting} >다음 단계로</NextStepButton></div>
        </form>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
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
const FindProjectStepGuideText1 = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 17px 0px 23px 30px;
`
const FindProjectStepGuideText2 = styled.span`
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
  gap: 15px;
`
const HeadLine = styled.hr`
  border: 1px solid #D9D9D9;
  width: 1200px;
`

const FindProjectInputDate = styled.div`
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`
const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  gap: 15px;
`


const FindProjectInputTitle = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
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
const TextAreaWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`
const RecMainCon = styled.textarea`
  margin: 20px; 
  padding: 10px; 
  width: 1100px; 
  height: 500px; 
  outline: none; 
  resize: none;
  border-radius: 4px;
`;
const NextStepButton = styled.button`
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
export default FindProjectStep01;
