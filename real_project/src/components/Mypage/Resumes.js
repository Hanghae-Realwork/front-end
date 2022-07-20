import React from "react";
import styled from "styled-components"

import letter from "../../image/letter.svg"

const Resumes = () => {

  return (
    <>
      <MyPageResumeBackWrap>

        <PageAllWrap>
          <TopWrap>
            <LeftTopWrap>
              <PhotoCircle></PhotoCircle>
            </LeftTopWrap>
            <RightTopWrap>
              <RightNameText>닉네임이 들어갑니다</RightNameText>
              <RightRoleText>직군명이 들어갑니다</RightRoleText>
              <RightAdressText><img src={letter} style={{marginRight:"8px"}}/>이메일 주소가 들어갑니다</RightAdressText>
              <RightSelfText>두 줄 자기 소개글이 들어갑니다</RightSelfText>
            </RightTopWrap>
          </TopWrap>

          <MidWrap>
            <MidTxetWrap>
              <MidTitle>소개글</MidTitle>
              <MidSelfText>장문의 자기소개 글이 노출 됩니다(줄 수 제한 가능)</MidSelfText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>홈페이지</MidTitle>
              <MidContentText>홈페이지 주소가 노출 될 칸입니다</MidContentText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>프로젝트 가능 기간</MidTitle>
              <MidContentText>start ~ end</MidContentText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>닉네임님의 보유 스킬</MidTitle>
              <MidTagWrap>스킬 태그가 들어갑니다</MidTagWrap>
            </MidTxetWrap>
          </MidWrap>

          <BotWrap>
            <FixedBtn>수정하기</FixedBtn>
            <DelBtn>삭제하기</DelBtn>
          </BotWrap>
        </PageAllWrap>

      </MyPageResumeBackWrap>
    </>
  )
};

//대형 틀
const MyPageResumeBackWrap = styled.div`
  background: #FFFFFF;
  border: 1px solid #303032;
  border-radius: 4px;
  width: 792px;
  height: 877px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
`

//내부 틀
const TopWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 129px 30px 75px;
  `

const MidWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 129px 50px 75px;
  gap: 48px;
`

const BotWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 240px 30px 240px;
  gap: 10px;
`

//세부 틀
const LeftTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 200px;
  height: 200px;
`

const RightTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const MidTxetWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
`


//상세 틀
const PhotoCircle = styled.div`
  border: 1px solid black;
  width: 200px;
  height:200px;
  border-radius: 100%;
`

const RightNameText = styled.span`
  font-size: 24px;
  font-weight: 700;
`

const RightRoleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 4px;
`

const RightAdressText = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

const RightSelfText = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  width: 344px;
  /* border: 1px solid black; */
  margin-top: 28px;
`

const MidTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`

const MidSelfText = styled.div`
  /* border: 1px solid black; */
  font-size: 14px;
  font-weight: 400;
  width: 580px;
`

const MidContentText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MidTagWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`

const FixedBtn = styled.button`
  padding: 12px 20px 12px 20px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 140px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
`

const DelBtn = styled.button`
  padding: 12px 20px 12px 20px;
  background: #FFF;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  width: 140px;
  height: 40px;
  border: 1px solid #303032;
  outline: none;
  cursor: pointer;

`

export default Resumes;
