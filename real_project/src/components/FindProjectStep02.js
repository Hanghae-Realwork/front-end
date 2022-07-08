import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SelectSkill from "./SelectSkill";
import { useForm } from "react-hook-form";

const FindProjectStep02 = (props) => {
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const storageData = localStorage.getItem(JSON.stringify('obj'))
    const addData = JSON.parse(storageData);
    console.log(addData)
    const output = {
      ...data,

      
    }

    // await new Promise((r) => setTimeout(r, 1000));
    
    // dispatch(
    //   createRecruitApi({
    //     ...output
    //   })
    // );
    navigate(`/findprojectstep2`)
    console.log(output)
  }

  const {
    register, handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();






  return (
    <>
      <FindProjectAllWrap>
        <FindprojectTopWrap>
            <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
        </FindprojectTopWrap>
          <HeadLine/>
          <FindProjectStepWrap>
              <FindProjectStepGuideText>1. 프로젝트 설명하기 2.크루 모집하기</FindProjectStepGuideText>
          </FindProjectStepWrap>
        <HeadLine/>
        <div>
          <span>구하는 직군</span>
          <div>
            <label><input id="role" type="radio" value="frontend" {...register("role")}  name="Radio"/>FrontEnd</label>
            <label><input id="role" type="radio" name="Radio" value="backend" {...register("role")}/>BackEnd</label>
            <label><input id="role" type="radio" name="Radio" value="graphicDesigner" {...register("role")}/>Designer</label>
          </div>
        </div>
        <div>
          {/* 셀렉트스킬 컴포넌트  */}
          <SelectSkill />

        </div>
        <div>
          캘린더 및 일정 잡는 기능이 들어갈 페이지 입니다. 추후 보강 됩니다.

        </div>
        <div>
          <div><button onClick={() => {navigate(`/findprojectstep1`)}}>이전 단계로</button></div>
          <div><button onClick={() => {}}>등록하기</button></div>
        </div>
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

export default FindProjectStep02;
