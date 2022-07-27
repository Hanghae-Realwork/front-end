import React, {useState,useEffect, useRef} from "react"
import styled from "styled-components"

import "../App.css"

import MatchingBtn from "../components/Matching/MatchingBtn"
import MiniProject from "../components/MiniProject"
import { useSelector, useDispatch } from "react-redux"
import { loadProjectsAxios } from "../redux/modules/interview"
import { matchesResumesAxios } from "../redux/modules/matches"
import CradEmpol from "../components/CardEmpol"

function MatchingCrew() {
    const dispatch = useDispatch();
    
    const myProject = useSelector((state) => state.interview.projects);

    //매칭하기 
    const data = useSelector((state) => state.matches.resumes)
    const [projectId, setProjectId] = useState("");
    const [seeData,setSeeData] = useState(false)
 

  //프로젝트 카드
  useEffect(() => {
    dispatch(loadProjectsAxios());
  }, []);

  const matchOnclick = () => {
  
        dispatch(matchesResumesAxios(projectId));
        setSeeData(true);
  
  }
  
    return (
      <>
        <MatchingBtn />
        <MatchingCrewWrap>
          <MatchingTopWrap>
            <MatchingText>
              맞는 상대를 찾고 싶은 프로젝트를 선택해주세요
            </MatchingText>
            <MatchingCardWrap>
              <MiniProject data={myProject} setProjectId={setProjectId} />
            </MatchingCardWrap>
          </MatchingTopWrap>
          <MatchingBotBtnWrap>
            <MatchingButton
              style={
                projectId !== ""
                  ? { backgroundColor: "" }
                  : { backgroundColor: "#D9D9D9", pointerEvents: "none" }
              }
              onClick={matchOnclick}
            >
              매칭하기
            </MatchingButton>
          </MatchingBotBtnWrap>
        </MatchingCrewWrap>
        {seeData ? (
          <MatchingBotWrap>
            <TextAlingWrap>
              <MatchingText>
                맞는 상대를 찾고 싶은 프로젝트를 선택해주세요
              </MatchingText>
            </TextAlingWrap>
            <ContentAlignWrap>
              <MatchingResumeWrap>
                {data.map((list, index) => {
                  return <CradEmpol key={index} data={list} />;
                })}
              </MatchingResumeWrap>
            </ContentAlignWrap>
          </MatchingBotWrap>
        ) : (
          ""
        )}
      </>
    );

}


const MatchingCrewWrap = styled.div`
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 80px;
`

const MatchingTopWrap = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    margin-top: 44.5px;
`

const MatchingText = styled.span`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 24px;
`

const MatchingCardWrap = styled.div`
    height: 360px;
    width: 1200px;
    /* border: 1px solid black; */
    overflow-x: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
`

const MatchingBotBtnWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const MatchingButton = styled.button`
    padding: 7.5px 24px 7.5px 24px;
    font-size: 16px;
    font-weight: 700;
    background: #303032;
    border-radius: 4px;
    background-color: #303032;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
`

const MatchingResumeWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin-top: 20px;
    height: auto;
    overflow: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`               
                        

const ContentAlignWrap = styled.div`
  margin-top: 35px;
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50vh;
  /* border: 1px solid black; */
`

const TextAlingWrap = styled.div`
  width: 1200px;
  margin-top: 35px;
`


const MatchingBotWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  /* height: 20vh; */
  background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);

`
 
export default MatchingCrew