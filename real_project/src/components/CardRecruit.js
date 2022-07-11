import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import Tag from "./TagCompoRec";

import Receipt from "../image/receipt.svg"
import Moment from "react-moment";

const CardRecruit = ({ data }) => {

  const navigate = useNavigate()
  //loadRecruit props



const today = Date();
  const nowTime = Date.now();
  const stringNowTime = today.toString().split(" ")[4];
  const todayHour = stringNowTime.split(":")[0];


  const createdAt = data.createdAt;
  const startTime = new Date(createdAt);
  const stringStartTime = startTime.toString().split(" ")[4];
  const startHour = stringStartTime.split(":")[0];
  const thenHours = Math.floor((nowTime - startTime) / 3600000);
  const startDay= data.start
  const start = startDay.slice(2, 10)
  const end = data.end.slice(2, 10)
  const DisplayCreatedAt = () => {
    if (parseInt(startTime - nowTime) > -86400000) {
      return thenHours + "시간전";
    }
    if (parseInt(startTime - nowTime) < -86400000) {
      return <Moment format="M월 D일">{startTime}</Moment>;
      // return (thenHours)+"시간전";
    }
  }

    return (
      <AllWrap>
        <AllTopWrap>
          <CardTopInfo>
            <CardWriteName>{data.userId}</CardWriteName>
            <CardWriteTime>{/* <DisplayCreatedAt /> */}</CardWriteTime>
          </CardTopInfo>
          <CardTitleInfo>
            <CardTitleText>{data.title}</CardTitleText>
          </CardTitleInfo>
          <CardMainTextInfo>
            <CardMainText>
              {data.subscript}
              <br />
            </CardMainText>
          </CardMainTextInfo>
          <CardJobTextWrap>
            <CardJobTitle>구하는 직군</CardJobTitle>
                <CardJobMainTitle>{data.role}</CardJobMainTitle>
          </CardJobTextWrap>
          <CardTagWrap>
            <CardJobTitle>[원하는 보유 기술]</CardJobTitle>
            <br />
            <TagWrap>
              {data === undefined
                ? null
                : data.skills.map((list, idx) => {
                    return <Tag key={idx} skills={list} />;
                  })}
            </TagWrap>
          </CardTagWrap>
        </AllTopWrap>
        <DashedLine />
        <AllBotWrap>
          <CardBotTopWrap>
            <CardBotTextDate>프로젝트 러닝 기간 :</CardBotTextDate>
            <CardBotTextDateInfo> start </CardBotTextDateInfo>
          </CardBotTopWrap>
          <CardViewButton onClick={() => {navigate(`/readproject`);}}>프로젝트 보러 가기</CardViewButton>
        </AllBotWrap>
      </AllWrap>
    );
};



//// 카드 전체 틀 관련 CSS 뭉치

const AllWrap = styled.div`
  margin: 0px 24px 19px 0px;
  border-top: none;
  border-bottom: none;
  width: 384px;
  height: 387px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-image: url(${Receipt});

  background-position: center;
  background-size: cover;
  background-repeat: none;
`;

const AllTopWrap = styled.div`
  width: 384px;
  height: 310px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
`;

const AllBotWrap = styled.div`
  width: 384px;
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
`;

//// 카드 내용 관련 CSS 뭉치

const CardTopInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 18px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  /* margin: 16px 0px 12px 0px; */
`;

const CardWriteName = styled.span`
  font-size: 12px;
`;

const CardWriteTime = styled.span`
  font-size: 12px;
  color: #8d8d8d;
`;

const CardTitleInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  margin: 10px 0px 12px 0px;
`;

const CardTitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const CardMainTextInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 45px;
  margin-bottom: 20px;
`;

const CardMainText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const CardJobTextWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  display: flex;
  flex-flow: column nowrap;
`;

const CardJobTitle = styled.span`
  font-size: 12px;
`;

const CardJobMainTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

const CardTagWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 52px;
`;

const TagWrap = styled.div`
  /* border: 1px solid black; */
  margin-bottom: 28px;
  height: 34px;
`;

//// 센터 대쉬라인
const DashedLine = styled.hr`
  width: 300px;
  border: 0.5px dashed #8d8d8d;
  margin: 15px 0px 20px 0px;
`;

const CardBotTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 340px;
  height: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardBotTextDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const CardBotTextDateInfo = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
`;


const CardViewButton = styled.button`
  width: 340px;
  height: 40px;
  padding: 8px;
  background-color: #303032; 
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin-top: 20px;
`;

export default CardRecruit;
