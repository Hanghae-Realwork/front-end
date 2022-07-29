import React, { useDebugValue, useEffect, useState } from "react"
import Moment from "react-moment"
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadProjectAxios } from "../../redux/modules/postProfile";

import TagCompoApp from "./TagCompoApp";
import EmptyProject from "./EmptyProject";

import astroman from "../../image/astroman.svg"
import check from "../../image/check.svg"
import { interviewEndStatusAxios, interviewMatchStatusAxios } from "../../redux/modules/interview";
import { useNavigate } from "react-router-dom";

import RecruitTag from "../../components/Tag/RecruitTag"


const Recruitment = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickname_Info = useSelector((state) => state.user.userInfo.nickname);
  const value = useSelector((state) => state.postProfile.Myprojects);
  
  useEffect(() => {
    if (value.message === "토큰이 재발급 됐습니다.") { 
      localStorage.setItem("token", value.token);
    }
  },[])

  useEffect(() => {
      if (nickname_Info !== undefined || nickname_Info !== null) {
          dispatch(loadProjectAxios(nickname_Info));
    }
  }, [nickname_Info]);




  return (
    <RecruitAllWrap>

      {value.length > 0 ? value && 
        value.map((list, idx) => {

          //작성시간 함수
          const nowTime = Date.now();
          const createdAt = list.createdAt;
          const startTime = new Date(createdAt);
          const thenHours = Math.floor((nowTime - startTime) / 3600000);
          const today = new Date(list?.schedule);
          const tenMinutes = new Date(list?.schedule);
          const test2 = tenMinutes.setMinutes(tenMinutes.getMinutes() - 10);
          // console.log("10분전", tenMinutes, "현재", today);
        
          const DisplayCreatedAt = () => {
            if (parseInt(startTime - nowTime) > -86400000) {
              return thenHours + "시간전";
            }
            if (parseInt(startTime - nowTime) < -86400000) {
              return <Moment format="M월 D일">{startTime}</Moment>;           
            }
          }

          return (
            <RecruitCardMainWrap key={idx}>
              <CardWrap>
                <CardNameWrap>
                  <NameText>{list && list?.nickname}</NameText>
                  <NameText>
                    <DisplayCreatedAt />
                  </NameText>
                </CardNameWrap>
                <CardTitleWrap>
                  <TitleText>{list && list?.title}</TitleText>
                </CardTitleWrap>
                <CardTextWrap>
                  <BodyText>{list && list?.details}</BodyText>
                </CardTextWrap>
                <CardRoleWrap>
                  <NameTextBold>구하는직군</NameTextBold>
                  <NameText>{list && list?.role}</NameText>
                </CardRoleWrap>
                <CardJobWrap>
                  <NameTextBold>필요 스킬</NameTextBold>
                  <NameText>
                    {value &&
                      list?.ProjectSkills.map((list, idx) => {
                        return <TagCompoApp key={idx} skills={list} />;
                      })}
                  </NameText>
                </CardJobWrap>
                <CardLimitWrap>
                  <BodyText>
                    프로젝트 러닝 기간 :{" "}
                    {list && list?.start.replace("-", ".").replace("-", ".")} -{" "}
                    {list && list?.end.replace("-", ".").replace("-", ".")}
                  </BodyText>
                  <DateText></DateText>
                </CardLimitWrap>
              </CardWrap>

              <ProfileWrap>
                <PhotoBox>
                  {list?.resumeImage ? (
                    <PhotoCircle
                      style={{ backgroundImage: `url(${list?.resumeImage})` }}
                    />
                  ) : (
                    <PhotoCircle />
                  )}
                </PhotoBox>
                <NameBox>
                  <NickNameText> {list && list?.Resume?.nickname}</NickNameText>
                  <RoleText>{list && list?.Resume?.role}</RoleText>
                </NameBox>

                <InterviewWrap>
                  <div>
                    <InterviewButton
                      style={tenMinutes <= new Date() < today ? {} : {backgroundColor: "#D9D9D9", pointerEvents: "none"}} 
                      onClick={() => {window.open(`https://rendev.click/`)}}>
                      인터뷰 보기
                    </InterviewButton>
                    <p>{}</p>
                  </div>
                  <TimeTextWrap>
                    <InterviewTimeText>
                      {list && list.schedule.slice(0, 4)}년{" "}
                      {list && list.schedule.slice(5, 7)}월{" "}
                      {list && list.schedule.slice(8, 10)}일
                    </InterviewTimeText>
                    <InterviewTimeText>
                      {list && list.schedule.slice(11, 13)}시{" "}
                      {list && list.schedule.slice(14, 16)}분{" "}
                    </InterviewTimeText>
                  </TimeTextWrap>
                </InterviewWrap>
                <div>
                  <span>인터뷰 코드: {list && list.interviewCode}</span>
                </div>
              </ProfileWrap>

              <RecruitTag list={list} />
            </RecruitCardMainWrap>
          );
  }) :<EmptyProject/> }
    </RecruitAllWrap>
    );
};


const RecruitAllWrap = styled.div`
  
`

const RecruitCardMainWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-bottom: 20px;
`

const CardWrap = styled.div`
  border: 0.5px solid #303032;
  width: 384px;
  height: 307px;
  border-radius: 4px;
  background-color: white;
`

const ProfileWrap = styled.div`
  /* border: 1px solid black; */
  width: 230px;
  height: 307px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const LoadWrap = styled.div`
  border: 1px solid black;
  width: 120px;
  height: 307px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`

const CardNameWrap = styled.div`
  /* border: 1px solid black; */
  margin: 20px 20px 12px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

const CardTitleWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 12px 20px;
`

const CardTextWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 20px 20px;
  height: 45px;
  line-height: 21px;
  overflow: hidden;
`

const CardRoleWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 8px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`

const CardJobWrap = styled.div`
  /* border: 1px solid black; */
  margin: 5px 20px 10px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const CardLimitWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 0px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const NameText = styled.span`
  font-size: 12px;
  font-weight: 400;
`

const TitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
`

const BodyText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const DateText = styled.span`
  font-size: 14px;
  font-weight: 500;
`


//프로필 영역 CSS
const PhotoBox = styled.div`
  /* border: 1px solid black; */
  margin: 0px 0px 5px 0px;
`

const PhotoCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  /* border: 1px solid black; */
  background-image: url(${astroman});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const NameBox = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 10px;
`

const NickNameText = styled.span`
  font-size: 16px;
  font-weight: 500;
`

const RoleText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const InterviewWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* gap: 5px; */
  margin-bottom: 8px;
`

const InterviewButton = styled.button`
  background-color: #383838;
  border-radius: 4px;
  padding: 7.5px 23px 7.5px 23px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`

const TimeTextWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid black; */
`

const InterviewTimeText = styled.span`
  font-size: 12px;
  font-weight: 400;
`
const RecruitmentStatusLabel = styled.label`
  padding: 8px 15px 8px 15px;
  width: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border:  1px solid black;
  border-radius: 20px;
  font-size: 13px;
`;

const NameTextBold = styled.span`
  font-weight: 600;
  font-size: 12px;
`

export default Recruitment;
