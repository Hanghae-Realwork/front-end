import React, { useEffect } from "react";
import styled from "styled-components";

import TagCompoEmpPro from "../components/TagCompoEmpPro";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loadSingleEmployAxios } from "../redux/modules/postEmploy";

function EmploymentProfile() {
  const dispatch = useDispatch()
  const { resumeId } = useParams();
  
  const data = useSelector((state) => state.postEmploy.resumes);

const start = data.length > 0 ? data[0].start.replace("-", ".").replace("-", ".") : "";

  const end =
    data.length > 0 ? data[0].end.replace("-", ".").replace("-", ".") : "";


  useEffect(() => {
  dispatch(loadSingleEmployAxios(resumeId))
  },[])

  return (
    <>
      <EmploProfile>
        <NameFieldWrap>
          <ProfileTopWrap>
            <ProfileCircleWrap>
              <ProfileCircle
                style={{
                  backgroundImage: `url(${
                    data.length > 0 ? data[0].resumeImage : ""
                  })`,
                }}
              ></ProfileCircle>
            </ProfileCircleWrap>
            <NameWrap>
              <NameTitle>
                <TitleName>{data.length > 0 ? data[0].nickname : ""}</TitleName>
              </NameTitle>
              <NameTitle>
                <SubName>{data.length > 0 ? data[0].role : ""}</SubName>
              </NameTitle>
              <NameTitle>
                <TextField>{data.length > 0 ? data[0].userId : ""}</TextField>
              </NameTitle>
              <NameTitle>
                <TextField>{data.length > 0 ? data[0].content : ""}</TextField>
              </NameTitle>
            </NameWrap>
          </ProfileTopWrap>
          <TitleTextWrap>
            <SubName>소개글</SubName>
            <SelfText>{data.length > 0 ? data[0].content3 : ""}</SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>홈페이지</SubName>
            <SelfText>{data.length > 0 ? data[0].content2 : ""}</SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>프로젝트 참여 가능 기간</SubName>
            <SelfText>
              {start}~{end}
            </SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <StacTextWrap>
              <StacText>[닉네임]님이 보유한 스택</StacText>
            </StacTextWrap>
            <StacTagWrap>
              <TagCompoEmpPro
                skills={data.length > 0 ? data[0].resumeskills : ""}
              />
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
  height: 150px;
  margin-right: 40px;
 
  overflow: hidden;
  position: relative;
`;

const ProfileCircle = styled.div`
  /* width: 150px;
  height: 150px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  /* object-fit: cover; */

  /* background-size: 100%; */
  /* background-position: center; */
  border-radius: 50%;
  /* background-repeat: no-repeat; */

  /* display: inline-block;
  width: 100%;
  height: 100px;
  overflow: hidden;
  object-fit: cover; */
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center;
`;

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