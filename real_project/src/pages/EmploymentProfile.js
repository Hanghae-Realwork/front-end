import React from "react";
import styled from "styled-components";

import Tag from "../components/TagCompoEmp"

function EmploymentProfile() {
  
  return (
    <>
      <EmploProfile>
        <NameFieldWrap>
          <ProfileTopWrap>
            <ProfileCircleWrap>
              <ProfileCircle></ProfileCircle>
            </ProfileCircleWrap>
            <NameWrap>
              <NameTitle>
                <TitleName>[닉네임]</TitleName>
              </NameTitle>
              <NameTitle>
                <SubName>[직군 이름]</SubName>
              </NameTitle>
              <NameTitle>
                <TextField>
                  자기 소개 입니다. 서머리 카드에 있는 내용입니다.
                </TextField>
              </NameTitle>
              <NameTitle>
                <TextField>
                  연락처 정보 (이메일)
                </TextField>

              </NameTitle>
            </NameWrap>
          </ProfileTopWrap>
          <TitleTextWrap>
            <SubName>교육 및 업무 경력</SubName>
            <SelfText>자기소개 및 각종 사항이 출력 됩니다.</SelfText> 
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>그 외 활동 이력</SubName>
            <SelfText>자기소개 및 각종 사항이 출력 됩니다.</SelfText> 
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>프로젝트 참여 가능 기간</SubName>
            <SelfText>프로젝트 참여 가능 기간이 출력 됩니다.</SelfText> 
          </TitleTextWrap>
          <TitleTextWrap>
              <StacTextWrap>
            <StacText>[닉네임]님이 보유한 스택</StacText>
            </StacTextWrap>
            <StacTagWrap>
              <Tag /> <Tag /> <Tag /> <Tag /> <Tag />
              <Tag /> <Tag /> <Tag /> <Tag /> <Tag />
              <Tag />
            </StacTagWrap>
          </TitleTextWrap>
          <DucButton>면접 신청하기</DucButton>
        </NameFieldWrap>
      </EmploProfile>
    </>
  );
}



const EmploProfile = styled.div`
    /* border: 1px solid black; */
    width: 700px;
    margin-top: 70px;
    margin-bottom: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const NameFieldWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

const ProfileTopWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const ProfileCircleWrap = styled.div`
    /* border: 1px solid black; */
    width: 150px;
    margin-right: 40px;
`

const ProfileCircle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: #685BC7;
`

const NameWrap = styled.div`
    /* border: 1px solid black; */
    width: 500px;
`

const NameTitle = styled.div`
    /* border: 1px solid black; */
    margin: 12px;
`

const TitleName = styled.span`
    font-weight: bold;
    font-size: 20px;
`

const SubName = styled.span`
    font-size: 16px;
    font-weight: bold;
`

const TextField = styled.div`
    font-size: 14px;
`

const TitleTextWrap = styled.div`
    font-size: 14px;
    /* border: 1px solid black; */
    width: 600px;
    height: 100px;
    margin-top: 50px;
`

const StacTextWrap = styled.div`
    /* border: 1px solid black; */
    margin-bottom: 20px;
`

const StacText = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const StacTagWrap = styled.div`
    margin-bottom: 50px;
    /* border: 1px solid black; */
`

const DucButton = styled.button`
    border: none;
    outline: none;
    background-color: #5B6770;
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    margin-top:  80px;
    font-weight: bold;
    font-size: 18px;

`

const SelfText = styled.div`
  margin-top: 20px;
`

export default EmploymentProfile