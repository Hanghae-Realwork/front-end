import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { loadResumesAxios } from "../redux/modules/interview";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"

import astroman from "../image/astroman.svg"



//프로젝트 찾기 -> 상세조회-> 면접 예약 프로필
function MiniProject() {

    const dispatch = useDispatch();
const data = useSelector((state) => state.interview.resumes);

 
    
    useEffect(() => {
        dispatch(loadResumesAxios())
    },[])
  return (
      <>{data && data.map((list,idx) => {
        return (
          <MiniCardAllWrap key={idx}>
            <MiniNickWrap>
              <NickText>닉네임이 들어갑니다</NickText>
              <NickText>n시간 전이 들어갑니다</NickText>
            </MiniNickWrap>

            <MiniTopWrap>
              <MiniNickName>프로젝트 제목이 들어갑니다</MiniNickName>
              <MiniBodyTextWrap>
                <MiniBodyText>{data[idx]?.content}</MiniBodyText>
                <MiniBodyText>{data[idx]?.content}</MiniBodyText>
              </MiniBodyTextWrap>
            </MiniTopWrap>

            <MiniBodyWrap>
              <NickText>구하는 직군</NickText>
              <MiniRole>{data[idx]?.role}</MiniRole>
            </MiniBodyWrap>

            <TecWrap>
              <NickText>원하는 보유 기술</NickText>
              <TecMiniWrap>
                <TagDev skills={data[idx]?.skills} />
              </TecMiniWrap>
            </TecWrap>

            <MiniDateWrap>
              <MiniDateText>
                {data[idx]?.start.slice(0, 4)}년 {data[idx]?.start.slice(5, 7)}
                월 {data[idx]?.start.slice(8, 10)}일 ~
                {data[idx]?.end.slice(0, 4)}년 {data[idx]?.end.slice(5, 7)}월{" "}
                {data[idx]?.end.slice(8, 10)}일
                {" "}
              </MiniDateText>
            </MiniDateWrap>

          </MiniCardAllWrap>
        );
    })}

    </>
  );
}


const MiniCardAllWrap = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    width: 384px;
    height: 307px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const MiniTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin: 12px 0px 23px 20px;
`

const MiniBodyWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 12px 8px 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const MiniDateWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 16px 20px;
`

const TecWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 10px 20px;
`

const MiniNickName = styled.span`
    font-size: 18px;
    font-weight: 700;
`

const MiniRole = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-top: 2px;
`

const MiniBodyText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const MiniDateText = styled.span`
    font-size: 12px;
    font-weight: 500;
`

const TecMiniWrap = styled.div`
    /* bordeR: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 344px;
    margin-top: 4px;
`

const MiniNickWrap = styled.div`
  margin: 20px 20px 0px 20px;
  /* border: 1px solid; */
  width: 344px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

const NickText = styled.span`
  font-size: 12px;
  font-weight: 400;
`

const MiniBodyTextWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 12px 0px 0px 0px;
  /* border: 1px solid; */
  width: 344px;
  overflow: hidden;
  height: 40px;
` 

export default MiniProject;
