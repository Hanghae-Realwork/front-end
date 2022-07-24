import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function MatchingBtn(){
    const navigate = useNavigate()

    return(
        <>
            <MatchingBtnWrap>

                    <BtnDivWrap>
                    <LeftTriangleDiv></LeftTriangleDiv>
                    <CenterDiv onClick={navigate(`/matchingcrew`)}>내가 모집중인 프로젝트</CenterDiv>
                    <RightTriangleDiv></RightTriangleDiv>
                    </BtnDivWrap>

                    <SecondBtnDivWrap>
                    <LeftTriangleDiv></LeftTriangleDiv>
                    <SecondCenterDiv onClick={navigate(`/matchingresume`)}>내 이력서</SecondCenterDiv>
                    <RightTriangleDiv></RightTriangleDiv>
                    </SecondBtnDivWrap>

            </MatchingBtnWrap>
        </>
    )
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

const SecondCenterDiv = styled.label`
    width: 120px;
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

const BtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 130px;
`

const SecondBtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    /* margin-left: -44px; */
    /* border-bottom: 1px solid black; */
    margin-bottom: 1px;
    z-index: -1;
    position: absolute;
    left: 380px;
`

export default MatchingBtn