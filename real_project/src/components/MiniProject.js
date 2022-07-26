import React, { useEffect,useState } from "react";
import styled from "styled-components";


import { useSelector, useDispatch } from "react-redux";

import TagDev from "./Tag/TagCompoDev"
import TagDes from "./Tag/TagCompoDes"





// 팀원찾기 -> 상세조회 -> 내 프로젝트 목록 조회
function MiniProject({ data, setProjectId }) {
  
  // const [currentClick, setCurrentClick] = useState(null);
  // const [prevClick, setPrevClick] = useState(null);

  // useEffect(() => {
  //   if (currentClick !== null) {
  //     let current = document.getElementById(currentClick);
  //     current.style.backgroundColor = "#d9d9d9";
  //     current.style.border= "2px black";
  //   }
  //   if (prevClick !== null) {
  //     let prev = document.getElementById(prevClick);
  //     prev.style.backgroundColor = "transparent";
  //     prev.style.border= "0.5px black"
  //   }
  //   setPrevClick(currentClick);
  // }, [currentClick]);



  return (
    <>
    
      {data &&
        data.map((list, idx) => {
          return (

            <MiniCardAllWrap
              key={idx}
              id={list.projectid}
              onClick={(e) => {
                setProjectId(list.projectid);
                // setCurrentClick(e.target.id);
              }}>
              <MiniNickWrap >
                <NickText >{list?.nickname}</NickText>
                <NickText >n시간 전이 들어갑니다</NickText>
              </MiniNickWrap>

              <MiniTopWrap >
                <MiniNickName >{list?.title}</MiniNickName>
                <MiniBodyTextWrap >
                  <MiniBodyText >
                    {list?.subscript}
                  </MiniBodyText>
                </MiniBodyTextWrap>
              </MiniTopWrap>

              <MiniBodyWrap >
                <NickText >구하는 직군</NickText>
                <MiniRole >{list?.role}</MiniRole>
              </MiniBodyWrap>

              <TecWrap >
                <NickText >원하는 보유 기술</NickText>
                <TecMiniWrap >
                  {data && list.projectid &&
                    list?.skills.map((tag, index) => {
                      return (
                        <TagDev skills={tag} key={index}  />
                      );
                    })}
                </TecMiniWrap>
              </TecWrap>

              <MiniDateWrap >
                <MiniDateText >
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
