import React, { useEffect,useState } from "react";
import styled from "styled-components";
import Moment from "react-moment";

import { useSelector, useDispatch } from "react-redux";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"





// 팀원찾기 -> 상세조회 -> 내 프로젝트 목록 조회
function MiniProject({ data, setProjectId }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  useEffect(() => {
    if (currentClick !== null ) {
      document.getElementsByClassName(currentClick)[0].style.border = "2px solid black";
    }
    if (prevClick !== null ) {
      document.getElementsByClassName(prevClick)[0].style.border = "1px solid gray";
    }
    setPrevClick(currentClick);
  }, [currentClick]);




  
  
  return (
    <>
      {data &&
        data?.map((list, idx) => {
          const nowTime = Date.now();
          const createdAt = list.createdAt;
          const startTime = new Date(createdAt);
          const thenHours = Math.floor((nowTime - startTime) / 3600000);
          const DisplayCreatedAt = () => {
            if (parseInt(startTime - nowTime) > -86400000) {
              return thenHours + "시간전";
            }
            if (parseInt(startTime - nowTime) < -86400000) {
              return <Moment format="M월 D일">{startTime}</Moment>;
            }
          };
          
          return (
            <MiniCardAllWrap
              key={idx}
              className={list.projectid}
              onClick={(e) => {
                setProjectId(list.projectid);
                setCurrentClick(e.target.className);
              }}
            >
              <MiniNickWrap>
                <NickText>{list?.nickname}</NickText>

                <NickText>
                  {" "}
                  <DisplayCreatedAt />
                </NickText>
              </MiniNickWrap>

              <MiniTopWrap>
                <MiniTitleWrap>
                  <MiniNickName>{list?.title}</MiniNickName>
                </MiniTitleWrap>
                <MiniBodyTextWrap>
                  <MiniBodyText>{list?.subscript}</MiniBodyText>
                </MiniBodyTextWrap>
              </MiniTopWrap>

              <MiniBodyWrap>
                <NickText>구하는 직군</NickText>
                <MiniRole>{list?.role}</MiniRole>
              </MiniBodyWrap>

              <TecWrap>
                <NickText>원하는 보유 기술</NickText>
                <TecMiniWrap>
                  {data &&
                    list?.skills.map((tag, index) => {
                      return <TagDev skills={tag} key={index} />;
                    })}
                </TecMiniWrap>
              </TecWrap>

              <MiniDateWrap>
                <MiniDateText>
                  {list?.start.slice(0, 4)}년 {list?.start.slice(5, 7)}월{" "}
                  {list?.start.slice(8, 10)}일 ~{list?.end.slice(0, 4)}년{" "}
                  {list?.end.slice(5, 7)}월 {list?.end.slice(8, 10)}일{" "}
                </MiniDateText>
              </MiniDateWrap>
            </MiniCardAllWrap>
          );
        })}
        
    </>
  );
}




const MiniCardAllWrap = styled.div`
    border: 0.5px solid black;
    border-radius: 4px;
    width: 384px;
    height: 307px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const MiniTopWrap = styled.div`
    width: 344px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0px 19px 0px;
    pointer-events : none;
    line-height: 21px;
    overflow: hidden;
`

const MiniBodyWrap = styled.div`
    width: 344px;
    margin: 0px 0px 5px 0px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    pointer-events : none;
    pointer-events : none;
    line-height: 21px;
`

const MiniDateWrap = styled.div`
    width: 344px;
    margin: 0px 0px 16px 0px;
    pointer-events : none;
    line-height: 21px;
    pointer-events : none;
`

const TecWrap = styled.div`
    width: 344px;
    margin: 0px 0px 10px 0px;
    pointer-events : none;
    line-height: 21px;
`

const MiniNickName = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
`

const MiniRole = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-top: 2px;
    line-height: 21px;
`

const MiniBodyText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`

const MiniDateText = styled.span`
    font-size: 12px;
    font-weight: 500;
    line-height: 21px;
`

const TecMiniWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 344px;
    height: 30px;
    margin-top: 4px;
    line-height: 21px;
    overflow: scroll;
    gap: 4px;
    pointer-events: none;
`

const MiniNickWrap = styled.div`
  margin: 20px 20px 0px 20px;
  width: 344px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  pointer-events : none;
  line-height: 21px;
`

const NickText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
`

const MiniBodyTextWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 12px 0px 0px 0px;
  width: 344px;
  overflow: hidden;
  height: 37px;
  line-height: 21px;
` 

const MiniTitleWrap = styled.div`
  width: 344px;
  height: 24px;
  overflow: hidden;
`

export default MiniProject;
