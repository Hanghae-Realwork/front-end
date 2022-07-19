import React from "react";
import styled from "styled-components"

import astroman from "../../image/astroman.svg"
import check from "../../image/check.svg"


const Recruitment = () => {
  return (
    <RecruitAllWrap>
      <RecruitCardMainWrap>

        <CardWrap>
          <CardNameWrap>
            <NameText>닉네임이 들어갑니다</NameText>
            <NameText>n 시간 전</NameText>
          </CardNameWrap>
          <CardTitleWrap>
            <TitleText>제목이 들어갈 칸입니다</TitleText>
          </CardTitleWrap>
          <CardTextWrap>
            <BodyText>내용이 표시될 칸입니다</BodyText>
          </CardTextWrap>
          <CardRoleWrap>
            <NameText>구하는직군</NameText>
            <NameText>직군 Role이 들어갑니다</NameText>
          </CardRoleWrap>
          <CardJobWrap>
            <NameText>필요 스킬</NameText>
            <NameText>스킬list가 들어갑니다</NameText>
          </CardJobWrap>
          <CardLimitWrap>
            <BodyText>프로젝트 러닝 기간</BodyText>
            <DateText>start~end</DateText>
          </CardLimitWrap>
        </CardWrap>

        <ProfileWrap>
            <PhotoBox>
              <PhotoCircle></PhotoCircle>
            </PhotoBox>
            <NameBox>
              <NickNameText>닉네임이 들어갑니다</NickNameText>
              <RoleText>직군 Role이 들어갑니다</RoleText>
            </NameBox>
            <InterviewWrap>
              <div><InterviewButton>면접보기</InterviewButton></div>
              <TimeTextWrap>
                <InterviewTimeText>0000년 00월 00일</InterviewTimeText>
                <InterviewTimeText>00:00</InterviewTimeText>
              </TimeTextWrap>
            </InterviewWrap>
            <div>
              <span>면접코드: 111-111</span>
            </div>
        </ProfileWrap>

        <LoadWrap>
          <ApplyStatusLabel>모집 완료<img src={check}/></ApplyStatusLabel>
          <ApplyLine/>
          <ApplyStatusLabel>면접 완료<img src={check}/></ApplyStatusLabel>
          <ApplyLine/>
          <ApplyStatusLabel>지원서 접수<img src={check}/></ApplyStatusLabel>
        </LoadWrap>
      </RecruitCardMainWrap>
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
  /* border: 1px solid black; */
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
  margin: 0px 20px 12px 20px;
`

const CardRoleWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 8px 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const CardJobWrap = styled.div`
  /* border: 1px solid black; */
  margin: 0px 20px 10px 20px;
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
  margin: 0px 0px 8px 0px;
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
  margin-bottom: 20px;
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
  gap: 12px;
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
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const InterviewTimeText = styled.span`
  font-size: 12px;
  font-weight: 400;
`

const ApplyStatusLabel = styled.label`
  padding: 8px 15px 8px 15px;
  width: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 13px;
`

const ApplyLine = styled.hr`
  border: 1px solid #000; 
  height: 30px;
  margin-top: -1px;
  margin-bottom: -1px;
`

export default Recruitment;
