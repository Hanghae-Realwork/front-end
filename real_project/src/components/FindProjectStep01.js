import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
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
import { createRecruitApi } from "../redux/modules/postRecruit";

const FindProjectStep01 = (props) => {

  const dispatch = useDispatch
  const navigate = useNavigate()
  const dateref = useRef
  const [selected, setSelected] = useState(new Date);
  // const [startdate, setStart] = useState(selected.from);

  const recruit_Title = useRef(null);
  const recruit_Guide = useRef(null)
  const recruit_Body = useRef(null);
  const text_URL = React.useRef(null);

  const dvelopSkills_list = [
    { data: 'React' },
    { data: 'Vue.js' },
    { data: 'JavaScript' },
    { data: 'Node.js' },
    { data: 'Java' },
    { data: 'Spring' },
    { data: 'Python' },
    { data: 'MongoDB' },
    { data: 'MySQL' },
    { data: 'Redis' },
    { data: 'TypeScript' },
    { data: 'Ruby' },
    { data: 'AWS' },
    { data: 'Go' },
    { data: 'PHP' },
    { data: 'Git' },
    { data: '.NET' },
    { data: 'React Native' },
    { data: 'Django' },
    { data: 'Flask' },
    { data: 'Nest.JS' },
    { data: 'Express.JS' },
    { data: 'NoSQL' },
    { data: 'SQL' },
    { data: 'Swift' },
    { data: 'Kotlin' },
    { data: 'Android' },
    { data: 'iOS' },
  ]
  const designerSkills_list = [
    { data: 'Figma' },
    { data: 'Adobe XD' },
    { data: 'Adobe Illustrator' },
    { data: 'Adobe PhotoShop' },
    { data: 'Invision' },
    { data: 'Sketch' },
    { data: 'Protopie' },
  ]


  return (
    <>
      <FindProjectAllWrap>
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
            <ProjectInput ref={recruit_Title} id="title" type="text" placeholder="제목을 입력해주세요"></ProjectInput>
          </FindProjectInputTitle>
          <FindProjectInputTitle>
            <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
            <ProjectInput ref={recruit_Guide} id="subscript" type="text" placeholder="프로젝트를 설명해주세요"></ProjectInput>
          </FindProjectInputTitle>
          <FindProjectInputDate>
            <ProjectTitleText>프로젝트 기간</ProjectTitleText>
            <div>
               달력이 들어갈 공간 입니다.
              <div>
              </div>
            </div>
          </FindProjectInputDate>
          <FindProjectInputTitle>
            <ProjectTitleText>팀 상세 설명</ProjectTitleText>
            <div><RecMainCon ref={recruit_Body} id="details" type="text" placeholder="프로젝트의 내용을 입력해주세요" /></div>
          </FindProjectInputTitle>

    
          <FindProjectInputTitle>
            <ProjectTitleText>구하는 직군</ProjectTitleText>
            <div>
              <label><input id="role" type="radio" name="Radio"  value="frontend" />FrontEnd</label>
              <label><input id="role" type="radio" name="Radio" value="backend" />BackEnd</label>
              <label><input id="role" type="radio" name="Radio" value="graphicDesigner" />Designer</label>
            </div>
          </FindProjectInputTitle>
          <SelectSkillWrap>
            {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
              return <div><input id="skills" type="checkbox" value={list.data}/>{list.data}</div>;
            })}
            {designerSkills_list && designerSkills_list.map((list, idx) => {
              return <div>
                <input
                  id="skills"
                  type="checkbox"
                  value={list.data}
                />
                {list.data}
              </div>;
            })}
          </SelectSkillWrap>
          <div>
            캘린더 및 일정 잡는 기능이 들어갈 페이지 입니다. 추후 보강 됩니다.
          </div>
          <SubmitButtonWrap>
            <SubmitButton type="submit">등록하기</SubmitButton>
          </SubmitButtonWrap>
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


const FindProjectStepGuideText = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 17px 0px 23px 30px;
`


const SubmitButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`

const BackButton = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  border: 1px solid;
  border-image: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-image-slice: 1;
  background-origin: border;
  background-clip: content-box, border-box;
  color: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  cursor: pointer;
  margin: 30px 0px 30px 0px;
  padding: 12px 28px;
  font-weight: 700;
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

const SelectSkillWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  gap: 15px;
`

export default FindProjectStep01;
