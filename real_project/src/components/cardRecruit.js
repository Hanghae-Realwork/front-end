import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Tag from "./TagCompo"



const CardRecruit = () => {

    const navigate = useNavigate();
  
  return (
    <>
      <CardRecruitWrap>
        <CardWrap onClick={() => {navigate(`/employmentprofile`)}}>
            <CardWriter><WriterName>작성자</WriterName></CardWriter>
            <CardTitle><TitleText>제목입니다</TitleText></CardTitle>
            <DayInfo><DateLimit>22.06.20 ~ 22.07.25</DateLimit></DayInfo>
            <CardMainText><JobText>카드 내용이 노출 됩니다</JobText><br/><JobText>카드 내용은 최대 두줄만 나옵니다.</JobText></CardMainText>
            {/* <CardJobName><JobNameText>찾는 기술명이 노출 됩니다</JobNameText></CardJobName> */}
            <CardTagArea><Tag/><Tag/><Tag/><Tag/><Tag/></CardTagArea>
            <CardJobName><WriterName>n 시간 전</WriterName></CardJobName>
        </CardWrap>
      </CardRecruitWrap>
    </>
  );
};



const CardRecruitWrap = styled.div`
    border: 3px solid #A7A4E0;
    width: auto;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 10px;
    margin: 15px;
`

const CardWrap = styled.div`
    /* border: 1px solid black; */
    width: 300px;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 5px;
    cursor: pointer;
`


const CardWriter = styled.div`
    /* border: 1px solid black; */
    height: auto;
    padding: 10px;
`

const WriterName = styled.span`
    font-size: 12px;
    color: #C1C6C8;
`

const CardTitle = styled.div`
    /* border: 1px solid black; */
    height: auto;
    padding: 5px;
`

const TitleText = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #685BC7;
`

const DayInfo = styled.div`
    /* border: 1px solid black; */
    height: auto;
    padding: 5px;
`

const DateLimit = styled.span`
    font-size: 12px;
`

const CardMainText = styled.div`
    /* border: 1px solid black; */
    height: auto;
    padding: 5px;
`

const CardJobName = styled.div`
    /* border: 1px solid black; */
    height: auto;
    padding: 5px;
`

const CardTagArea = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-wrap: row wrap;
    justify-content: flex-start;
    padding: 10px;
`

const JobText = styled.span`
    font-size: 13px;
`


export default CardRecruit