

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm, useWatch } from "react-hook-form";
import DayPickerSub from "../components/DayPickerSub";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createRecruitApi } from "../redux/modules/postRecruit";

import { DayPicker } from "react-day-picker";
import SelectSkill from "../components/SelectSkill";
import { format, isValid, parse, isAfter } from "date-fns";
import "react-day-picker/dist/style.css";
import "../components/day-picker.css";
import { ko } from "date-fns/esm/locale";








function RecruitWrite() {
  const dateref = useRef
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(new Date);
  // const [startdate, setStart] = useState(selected.from);
  const today = new Date();
  const startdate = JSON.stringify(selected.from)
  const enddate = JSON.stringify(selected.to)
  const highFunction = (e) => {
    console.log(e);
  }
  console.log(highFunction)


  const onSubmit = async (data) => {
    const output = {
      ...data,

      start: startdate.slice(1, 11),
      end: enddate.slice(1, 11),
      email: null,
      phone: null,
      photos: [null, null],
      schedule: [null, null],
    }
    await new Promise((r) => setTimeout(r, 1000));
    console.log(output)
  }



  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

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

            <RecTopTextContentWrap>
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="frontend" {...register("role")} />프론트엔드 개발자</RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="backend" {...register("role")} />백엔드 개발자</RecTopRadioLabel>
              <RecTopRadioLabel>
                <RecTopRadio id="role" type="radio" name="RecRadio" value="graphicDesigner" {...register("role")} />그래픽 디자이너</RecTopRadioLabel>
            </RecTopTextContentWrap>
          </RecruitWriteTopWrap>
 
          <RecruitWriteMidWrap>
            <RecTitleTextWrap>
              <RecTitleText>요구 스킬</RecTitleText>
            </RecTitleTextWrap>
            <RecMidContentWrap>
              <MidTextWrap>
                <RecTitleText>개발자</RecTitleText>
              </MidTextWrap>
              <MidContetWrap>
                {/* 셀렉트스킬컴포 */}
                {/* <SelectSkill control={control}  ></SelectSkill> */}

                {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
                  return <ConLabel><InputCon id="skills" type="checkbox" value={list.data} {...register("skills")} />{list.data}</ConLabel>;
                })}


              </MidContetWrap>
              <MidTextWrap>
                <RecTitleText>디자이너</RecTitleText>
              </MidTextWrap>
              <MidContetWrap>
                {designerSkills_list && designerSkills_list.map((list, idx) => {
                  return <ConLabel>
                    <InputCon
                      id="skills"
                      type="checkbox"
                      value={list.data}
                      {...register("skills")}
                    />
                    {list.data}
                  </ConLabel>;
                })}

                
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
            <div>
              <RecTitleTextInput
                id="subscript"
                type="text"
                placeholder="프로젝트의 제목을 입력해주세요"
                {...register("subscript")}
              />
            </div>
          </RecTitleTextWrap>

          <RecTitleTextWrap>
            <RecTitleText>프로젝트 기간</RecTitleText>
            <div id="DayPicker">
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

            <div>
              <RecMainCon
                id="details"
                type="text"
                placeholder="프로젝트의 내용을 입력해주세요"
                {...register("details")}
              />
            </div>
          </RecruitWriteTextBotWrap>
          <div>

            <RecButtonWrap >

              <RecButton type="submit" disabled={isSubmitting}>모집글 올리기</RecButton>


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
  font-size: 14px;
`;

const RecMainCon = styled.textarea`
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
    background-color: #AE97E3;
  }
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
