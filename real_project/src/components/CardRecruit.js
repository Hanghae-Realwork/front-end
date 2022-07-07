import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useDispatch, useSelector } from "react-redux";

import Tag from "./TagCompo";
import { loadRecruitsApi } from "../redux/modules/postRecruit";
import Moment from "react-moment";
// import { loadRecruitsApi } from "../redux/modules/postRecruit";


import Recepit from "../image/recepie.svg";

const CardRecruit = (props) => {

    const dispatch = useDispatch();

    const cards_list = useSelector((state) => state)
    const card_list = cards_list.postRecruit.list.projects
    const nowTime = Date.now();
    const displayCreatedAt = (createdAt) => {
        const startTime = new Date(createdAt);
        if (parseInt(startTime - nowTime) > -60000) {
            return <Moment format="방금 전">{startTime}</Moment>;
        }
        if (parseInt(startTime - nowTime) < -86400000) {
            return <Moment format="MMM D일">{startTime}</Moment>;
        }
        
    };
    // const createdAt = cards_list.postRecruit.list.projects.createdAt
    // console.log(createdAt)
    // useEffect(() => {
    //     dispatch(loadRecruitsApi());
    //   }, [dispatch]

    //   );

    console.log(card_list)

    console.log(card_list)

    return (
        <>
            {card_list && card_list.map((list, index) => {
                const createdAt = list.createdAt
                console.log(createdAt)
                return (
                    <AllWrap key={list.projectId}>
                        <AllTopWrap>
                            <CardTopInfo>
                                <CardWriteName>{list.userId}</CardWriteName>
                                <CardWriteTime>{displayCreatedAt}</CardWriteTime>
                            </CardTopInfo>
                            <CardTitleInfo>
                                <CardTitleText>{list.title}</CardTitleText>
                            </CardTitleInfo>
                            <CardMainTextInfo>
                                <CardMainText>
                                    {list.subscript}
                                    <br />
                                    {list.subscript}
                                </CardMainText>
                            </CardMainTextInfo>
                            <CardJobTextWrap>
                                <CardJobTitle>[구하는 직군]</CardJobTitle>
                                <div style={{ marginTop: "4px" }}><CardJobMainTitle>{list.role}</CardJobMainTitle></div>
                            </CardJobTextWrap>
                            <CardTagWrap>
                                <CardJobTitle>[원하는 보유 기술]</CardJobTitle><br />
                                <TagWrap><Tag /><Tag /><Tag /><Tag /></TagWrap>
                            </CardTagWrap>
                        </AllTopWrap>
                        <DashedLine />
                        <AllBotWrap>
                            <CardBotTopWrap>
                                <CardBotTextDate>프로젝트 러닝 기간 :</CardBotTextDate>
                                <CardBotTextDateInfo> {list.start} </CardBotTextDateInfo>
                            </CardBotTopWrap>
                            <CardViewButton >프로젝트 보러 가기</CardViewButton>
                        </AllBotWrap>
                    </AllWrap>
                )
            })}
        </>
    );
};

//// 카드 전체 틀 관련 CSS 뭉치

const AllWrap = styled.div`
  margin: 0px 24px 19px 0px;
  border-top: none;
  border-bottom: none;
  width: 384px;
  height: 426px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-image: url(${Recepit});

  background-position: center;
  background-size: cover;
  background-repeat: none;
`;

const AllTopWrap = styled.div`
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 384px;
  height: 305px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const AllBotWrap = styled.div`
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 384px;
  height: 117px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
  margin: 23px 20px 0px 20px;
`;

const CardWriteName = styled.span`
  font-size: 12px;
  width: 54px;
  height: 18px;
`;

const CardWriteTime = styled.span`
  font-size: 12px;
  width: 65px;
  height: 18px;
  color: #8d8d8d;
`;

const CardTitleInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  margin: 16px 20px 0px 20px;
`;

const CardTitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const CardMainTextInfo = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 44px;
  margin: 20px 20px 0px 20px;
`;

const CardMainText = styled.span`
  font-size: 14px;
  line-height: 21px;
`;

const CardJobTextWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  margin: 26px 20px 0px 20px;
  height: 50px;
`;

const CardJobTitle = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
`;

const CardJobMainTitle = styled.span`
  margin-top: 4px;
  font-weight: 700;
  font-size: 14px;
`;

const CardTagWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  height: 52px;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const TagWrap = styled.div`
  /* border: 1px solid black; */
  margin-top: 5px;
  height: 34px;
`;

//// 센터 대쉬라인
const DashedLine = styled.hr`
  width: 300px;
  border: 0.5px dashed #8d8d8d;
`;

const CardBotTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 340px;
  height: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 18px;
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
  margin-top: 20px;
  margin-bottom: 12.5px;
  background: linear-gradient(45deg, #ae97e3, #77c3e7);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

export default CardRecruit;
