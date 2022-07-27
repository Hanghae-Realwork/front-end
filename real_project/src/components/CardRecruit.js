import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"

import Receipt from "../image/receipt.svg"



const CardRecruit = ({ data }) => {

    //작성시간 함수
    const nowTime = Date.now();
    const createdAt = data.createdAt;
    const startTime = new Date(createdAt);
    const thenHours = Math.floor((nowTime - startTime) / 3600000);
    
    const DisplayCreatedAt = () => {
      if (parseInt(startTime - nowTime) > -86400000) {
        return thenHours + "시간전";
      }
      if (parseInt(startTime - nowTime) < -86400000) {
        return <Moment format="M월 D일">{startTime}</Moment>;
      }
    }


  const navigate = useNavigate();

    return (
      <AllWrap>
        <AllTopWrap>
          <CardTopInfo>
            <CardWriteName>{data.nickname}</CardWriteName>
            <CardWriteTime><DisplayCreatedAt /></CardWriteTime>
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
            <CardRoleTitle>구하는 직군</CardRoleTitle>
                <CardJobMainTitle>{data.role}</CardJobMainTitle>
          </CardJobTextWrap>
          <CardTagWrap>
            <CardJobTitle>원하는 보유 기술</CardJobTitle>
            <TagWrap>
              {data === undefined
                ? null
                : data.skills.map((list, idx) => {
                    return <TagDev key={idx} skills={list} />;
                  })}
            </TagWrap>
          </CardTagWrap>
        </AllTopWrap>
        <DashedLine />
        <AllBotWrap>
          <CardBotTopWrap>
            <CardBotTextDate>프로젝트 러닝 기간 :</CardBotTextDate>
            <CardBotTextDateInfo> {data.start} ~ {data.end} </CardBotTextDateInfo>
          </CardBotTopWrap>
          <CardViewButton onClick={() => {navigate("/readproject/" + `${data.projectId}`);}}>프로젝트 보러 가기</CardViewButton>
        </AllBotWrap>
      </AllWrap>
    );
};



//// 카드 전체 틀 관련 CSS 뭉치

const AllWrap = styled.div`
  width: 384px;
  height: 426px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${Receipt});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const AllTopWrap = styled.div`
  width: 384px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
`;

const AllBotWrap = styled.div`
  width: 384px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

//// 카드 내용 관련 CSS 뭉치

const CardTopInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 17px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  line-height: 20px;
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
  height: 20px;
  width: 344px;
  margin: 16px 0px 0px 0px;
  overflow: hidden;
  line-height: 21px;
`;

const CardTitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const CardMainTextInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 45px;
  margin: 20px 0px 0px 0px;
  overflow: hidden;
  line-height: 21px;
`;

const CardMainText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const CardJobTextWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
  line-height: 21px;
`;

const CardRoleTitle = styled.span`
  font-size: 12px;
`

const CardJobTitle = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
`;

const CardJobMainTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

const CardTagWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 55px;
  margin-top: 8px;
`;

const TagWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3px;
  height: 35px;
  margin-top:2px;
  overflow: scroll;
`;

//// 센터 대쉬라인
const DashedLine = styled.hr`
  width: 340px;
  border: 0.5px dashed #8d8d8d;
  margin: 30px 0px 0px 0px;
`

const CardBotTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 340px;
  height: 17px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 21px;
  margin-top: 30px;
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
  margin-bottom: 20px;
  border-radius: 2px;
`;

export default CardRecruit;
