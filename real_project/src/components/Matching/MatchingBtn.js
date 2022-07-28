import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import "../../App.css"

function MatchingBtn(){
  const navigate = useNavigate()

  const MoveChapter = (e) => {
    navigate(`/matchingcrew`)
  };

  const MoveResume = (e) => {
    navigate(`/matchingresume`)
  };


    return (
    
        <MatchingBtnWrap>
          <PositionWrap>
            <BtnDivWrap onClick={() => {MoveChapter()}} id="chapter1">
              <LeftTriangleDiv/>
              <CenterDiv>내가 모집중인 프로젝트</CenterDiv>
              <RightTriangleDiv/>
            </BtnDivWrap>

            <SecondBtnDivWrap onClick={() => {MoveResume()}} id="chapter2">
              <LeftTriangleDivtwo/>
              <SecondCenterDiv>내 이력서</SecondCenterDiv>
              <RightTriangleDivtwo/>
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
    /* border: 1px solid white; */
`

const LeftTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid white;

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

`

const RightTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid white;
  border-right: 20px solid transparent;
`

const LeftTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid white;
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
`

const RightTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 20px solid white;
  border-top: 20px solid transparent;
  border-left: 20px solid white;
  border-right: 20px solid transparent;
`

const BtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: -1px;
`

const SecondBtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5px;
    margin-left: -35px;
`

const PositionWrap = styled.div`
    position: relative;
    /* border: 1px solid white; */
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    left: -375px;
`



export default MatchingBtn;

