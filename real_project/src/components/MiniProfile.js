import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";


import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"

import astroman from "../image/astroman.svg"


//프로젝트 찾기 -> 상세조회-> 면접 예약 프로필
function MiniResume({ data, setResumeId }) {

    const [currentClick, setCurrentClick] = useState(null);
    const [prevClick, setPrevClick] = useState(null);


  useEffect(() => {
    if (currentClick !== null) {
      // let current = document.getElementsByClassName(
      //   currentClick
      // )[0].style.backgroundColor = "blue";
      

  document.getElementsByClassName(currentClick)[0].style.backgroundColor =
  "#EAF3FB";
      // for (var i = 0; i < len; i++) {
      //  current[i].style.backgroundColor = "blue";
      // }
      // current.style.backgroundColor = "#EAF3FB";
    }
      if (prevClick !== null) {
        // let prev = document.getElementsByClassName(prevClick);
        // prev.style.backgroundColor = "transparent";
         document.getElementsByClassName(prevClick)[0].style.backgroundColor =
           "transparent";

      }
      setPrevClick(currentClick);
    },
    [currentClick]
  );

   

  return (
      <>{data && data.map((list,idx) => {
        return (
          <MiniCardAllWrap
            key={idx}
            value={idx}
            className={list.resumeId}
            onClick={(e) => {
              setResumeId(list.resumeId);
              setCurrentClick(e.target.className);
            }}
          >
            <MiniTopWrap>
              <MiniPhotoWrap>
                {list?.resumeImage === null ? (
                  <Photo></Photo>
                ) : (
                  <Photo>사진을 보여주세요</Photo>
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
              보유한 기술
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
    height: 35px;
    gap: 4px;
    overflow: scroll;
`




export default MiniResume;
