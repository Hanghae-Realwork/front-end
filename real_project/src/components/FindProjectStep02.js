import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SelectSkill from "./SelectSkill";
import { useForm } from "react-hook-form";
import axios from "axios";
import { add } from "lodash";
import { createRecruitApi } from "../redux/modules/postRecruit";
import store from "../redux/configstore";




function FindProjectStep02() {
  const dispatch = useDispatch
  const navigate = useNavigate()
  const storageData = sessionStorage.getItem('obj')
  const addData = JSON.parse(storageData);
  const title = addData.title
  const subscript = addData.subscript
  const details = addData.details
  const photos = addData.photos
  const start = addData.start
  const end = addData.end

  const onSubmit = async (data) => {

    const output = {
      ...data,
      title: title,
      subscript: subscript,
      details: details,
      photos: photos,
      start: start,
      end: end,
      schedule: ["2022-07-20", "2022-07-25"]
    }
    console.log(output)

    store.dispatch(
      createRecruitApi({
        ...output
      })
    ).then((res) => {
      alert("프로젝트 등록완료!")
      sessionStorage.removeItem('obj')
      console.log(res);
      navigate(`/mainrecruit`)
    }).catch((err) => {
      console.log(err);
    });
  }
  
  const {
    register,
    handleSubmit,
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






  return (
    <>
      <FindProjectAllWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FindprojectTopWrap>
            <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
          </FindprojectTopWrap>
          <HeadLine />
          <FindProjectStepWrap>
            <FindProjectStepGuideText>1. 프로젝트 설명하기 2.크루 모집하기</FindProjectStepGuideText>
          </FindProjectStepWrap>
          <HeadLine />
          <div>
            <ProjectTitleText>구하는 직군</ProjectTitleText>
            <div>
              <label><input id="role" type="radio" name="Radio" value="frontend" {...register("role")} />FrontEnd</label>
              <label><input id="role" type="radio" name="Radio" value="backend" {...register("role")} />BackEnd</label>
              <label><input id="role" type="radio" name="Radio" value="graphicDesigner" {...register("role")} />Designer</label>
            </div>
          </div>
          <SelectSkillWrap>
            {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
              return <div><input id="skills" type="checkbox" value={list.data} {...register("skills")} />{list.data}</div>;
            })}
            {designerSkills_list && designerSkills_list.map((list, idx) => {
              return <div>
                <input
                  id="skills"
                  type="checkbox"
                  value={list.data}
                  {...register("skills")}
                />
                {list.data}
              </div>;
            })}
          </SelectSkillWrap>
          <div>
            캘린더 및 일정 잡는 기능이 들어갈 페이지 입니다. 추후 보강 됩니다.
          </div>
          <SubmitButtonWrap>
            <BackButton onClick={() => { navigate(`/findprojectstep1`) }}>이전 단계로</BackButton>
            <SubmitButton type="submit" disabled={isSubmitting}>등록하기</SubmitButton>
          </SubmitButtonWrap>
        </form>
      </FindProjectAllWrap>
    </>
  );
};

const FindProjectAllWrap = styled.div`
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

export default FindProjectStep02;

