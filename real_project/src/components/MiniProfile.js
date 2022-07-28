import React, { useEffect,useState } from "react";
import styled from "styled-components";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"

import astroman from "../image/astroman.svg"


//프로젝트 찾기 -> 상세조회-> 면접 예약 프로필
function MiniResume({ data, setResumeId }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  useEffect(() => {
    if (currentClick !== null ) {
      document.getElementsByClassName(currentClick)[0].style.border = "2px solid black";
    }
    if (prevClick !== null ) {
      document.getElementsByClassName(prevClick)[0].style.border =
        "1px solid gray";
    }
    setPrevClick(currentClick);
  }, [currentClick]);
console.log(data)
  return (
    <>
      {data &&
        data.map((list, idx) => {
          return (
            <MiniCardAllWrap
              key={idx}
              className={list.resumeId}
              onClick={(e) => {
                setResumeId(list.resumeId);
                setCurrentClick(e.target.className);
              }}
            >
              <MiniTopWrap>
                <MiniPhotoWrap>
                  {list?.resumeImage === null ? (
                    <Photo/>
                  ) : (
                    <Photo
                      style={{ backgroundImage: `url(${list?.resumeImage})` }}
                    />
              
                  )}
                </MiniPhotoWrap>
                <MiniNameWrap>
                  <MiniNickName>{list?.nickname}</MiniNickName>
                  <MiniRole>{list?.role}</MiniRole>
                </MiniNameWrap>
              </MiniTopWrap>

              <MiniBodyWrap>
                <MiniBodyText>{list?.content}</MiniBodyText>
              </MiniBodyWrap>

              <MiniDateWrap>
                <span style={{ fontSize: "12px" }} className={list.resumeId}>
                  {list?.start.slice(0, 4)}년 {list?.start.slice(5, 7)}월{" "}
                  {list?.start.slice(8, 10)}일 ~{list?.end.slice(0, 4)}년{" "}
                  {list?.end.slice(5, 7)}월 {list?.end.slice(8, 10)}일
                </span>{" "}
                <MiniDateText></MiniDateText>
              </MiniDateWrap>

              <TecWrap>
                <MiniBodyText>보유한 기술</MiniBodyText>
                <TecMiniWrap>
                  {list &&
                    list?.skills.map((tag, index) => {
                      return <TagDev skills={tag} key={index} />;
                    })}
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
`;

const MiniTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0px 12px 20px;
    pointer-events : none;
`

const MiniBodyWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 12px 12px 20px;
    pointer-events : none;
    overflow: hidden;
`

const MiniDateWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 16px 20px;
    pointer-events : none;
`

const TecWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 0px 0px 21px 20px;
    pointer-events : none;
`

const MiniPhotoWrap = styled.div`
    width: 60px;
    height: 60px;
    pointer-events : none;
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
    height: 35px;
    gap: 4px;
    overflow: scroll;
    pointer-events: none;
`




export default MiniResume;
