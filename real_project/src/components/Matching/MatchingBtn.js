import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function MatchingBtn(){


    return (
    
        <MatchingBtnWrap>
          <PositionWrap>
            <BtnDivWrap>
              <LeftTriangleDiv></LeftTriangleDiv>
              <CenterDiv>내가 모집중인 프로젝트</CenterDiv>
              <RightTriangleDiv></RightTriangleDiv>
            </BtnDivWrap>

            <SecondBtnDivWrap>
              <LeftTriangleDivtwo></LeftTriangleDivtwo>
              <SecondCenterDiv>내 이력서</SecondCenterDiv>
              <RightTriangleDivtwo></RightTriangleDivtwo>
            </SecondBtnDivWrap>
          </PositionWrap>
        </MatchingBtnWrap>
     
    );
}


const MatchingBtnWrap = styled.div`
    width: 100%;
    height: 66px;
    background-color: #303032;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;
    z-index: -3;
    position: relative;
`

const LeftTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid white;
  position: absolute;
  top: -40px;
  left: -590px;
  /* background-color: red; */
  /* transform: rotate(180deg); */
`

const CenterDiv = styled.label`
    width: 200px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    top: -40px;
    left: -550px;
`

const RightTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid white;
  border-right: 20px solid transparent;
  position: absolute;
  top: -40px;
  left: -350px;
`

const LeftTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid white;
  position: absolute;
  top: -40px;
  left: -1275px;
  /* background-color: red; */
  /* transform: rotate(180deg); */
`

const SecondCenterDiv = styled.label`
    width: 120px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    color: #d9d9d9;
    cursor: pointer;
    position: absolute;
    top: -40px;
    left: -1235px;
`

const RightTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid white;
  border-right: 20px solid transparent;
  position: absolute;
  /* background-color: red; */
  top: -40px;
  left: -1115px;
  /* transform: rotate(180deg); */
`

const BtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SecondBtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px;
    z-index: -1;
    position: absolute;
    left: 950px;
`

const PositionWrap = styled.div`
    position: relative;
`





export default MatchingBtn