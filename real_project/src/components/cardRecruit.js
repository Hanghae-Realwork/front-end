import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Tag from "./TagCompo"



const CardRecruit = () => {
  
  return (
    <>
      <CardRecruitWrap>
        <CardWrap>
            <CardWriter><WriterName>작성자</WriterName></CardWriter>
            <CardTitle><TitleText>제목입니다</TitleText></CardTitle>
            <DayInfo><DateLimit>22.06.20 ~ 22.07.25</DateLimit></DayInfo>
            <CardMainText><span>카드 내용이 노출 됩니다</span><br/><span>카드 내용은 최대 두줄만 나옵니다.</span></CardMainText>
            <CardJobName><JobNameText>찾는 기술명이 노출 됩니다</JobNameText></CardJobName>
            <CardTagArea><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/><Tag/></CardTagArea>
            <CardJobName><WriterName>n 시간 전</WriterName></CardJobName>
        </CardWrap>
      </CardRecruitWrap>
    </>
  );
};



const CardRecruitWrap = styled.div`
    border: 1px solid black;
    width: auto;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 10px;
    margin: 15px;
`

const CardWrap = styled.div`
    /* border: 1px solid black; */
    width: 400px;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
`


const CardWriter = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`

const WriterName = styled.span`
    font-size: 12px;
    color: #C1C6C8;
`

const CardTitle = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`

const TitleText = styled.span`
    font-weight: bold;
    font-size: 18px;
`

const DayInfo = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`

const DateLimit = styled.span`
    font-size: 12px;
`

const CardMainText = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`

const CardJobName = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`

const JobNameText = styled.span`
    font-size: 14px;
    font-weight: bold;
`

const CardTagArea = styled.div`
    /* border: 1px solid black; */
    width: 380px;
    height: auto;
    padding: 10px;
`


export default CardRecruit