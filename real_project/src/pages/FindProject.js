import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import FindStep01 from "../components/FindProjectStep01"
import FindStep02 from "../components/FindProjectStep02"

import SelectSkill from "../components/SelectSkill";



const FindProject = (props) => {
  const navigate = useNavigate();

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
            <FindStep01/>
              <Routes>
                <Route path="/findprojectstep2" element={<FindStep02 />}></Route>
              </Routes>
          <HeadLine/>
        <div><button onClick={() => {navigate(`/findprojectstep2`)}}>다음 단계로</button></div>
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

export default FindProject;
