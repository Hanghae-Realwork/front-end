import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { loadResumesAxios } from "../redux/modules/interview";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"

import astroman from "../image/astroman.svg"



//프로젝트 찾기 -> 상세조회-> 면접 예약 프로필
function MiniResume() {

    const dispatch = useDispatch();
const data = useSelector((state) => state.interview.resumes);

 
    
    useEffect(() => {
        dispatch(loadResumesAxios())
    },[])
  return (
      <>{data && data.map((list,idx) => {
        return (
          <MiniCardAllWrap key={idx}>
            <MiniTopWrap>
              <MiniPhotoWrap>
                {data[idx]?.resumeImage === null ? (
                  <Photo></Photo>
                ) : (
                  <Photo>사진을 보여주세요</Photo>
                )}
              </MiniPhotoWrap>
              <MiniNameWrap>
                <MiniNickName>{data[idx]?.nickname}</MiniNickName>
                <MiniRole>{data[idx]?.role}</MiniRole>
              </MiniNameWrap>
            </MiniTopWrap>

            <MiniBodyWrap>
              <MiniBodyText>{data[idx]?.content}</MiniBodyText>
            </MiniBodyWrap>

            <MiniDateWrap>
              <span style={{ fontSize: "12px" }}>
                {data[idx]?.start.slice(0, 4)}년 {data[idx]?.start.slice(5, 7)}
                월 {data[idx]?.start.slice(8, 10)}일 ~
                {data[idx]?.end.slice(0, 4)}년 {data[idx]?.end.slice(5, 7)}월{" "}
                {data[idx]?.end.slice(8, 10)}일
              </span>{" "}
              <MiniDateText></MiniDateText>
            </MiniDateWrap>

            <TecWrap>
              보유한 기술
              <TecMiniWrap>
                <TagDev skills={data[idx]?.skills} />
              </TecMiniWrap>
            </TecWrap>
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
    height: 250px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const MiniTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0px 12px 20px;
`

const MiniBodyWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 12px 12px 20px;
`

const MiniDateWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 16px 20px;
`

const TecWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 21px 20px;
`

const MiniPhotoWrap = styled.div`
    width: 60px;
    height: 60px;
`

const Photo = styled.div`
    /* border: 1px solid black; */
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-image: url(${astroman});
    background-size: cover;
    background-position: center;
`

const MiniNickName = styled.span`
    font-size: 18px;
    font-weight: 700;
`

const MiniNameWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-left: 12px;
`

const MiniRole = styled.span`
    font-size: 14px;
    font-weight: 500;
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
`




export default MiniResume;
