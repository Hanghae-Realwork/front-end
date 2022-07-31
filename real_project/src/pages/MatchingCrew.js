import React, {useState,useEffect, useRef} from "react"
import styled from "styled-components"

import "../App.css"

import MatchingBtn from "../components/Matching/MatchingBtn"
import MiniProject from "../components/MiniProject"
import { useSelector, useDispatch } from "react-redux"
import { loadProjectsAxios } from "../redux/modules/interview"
import { matchesResumesAxios } from "../redux/modules/matches"
import CradEmpol from "../components/CardEmpol"
import { useNavigate } from "react-router-dom"

import EmptyMatchCard from "../components/Mypage/EmptyMatchCard"

import EmptyAstroman from "../image/emptyAstroman.svg"

function MatchingCrew() {
    const dispatch = useDispatch();
    const myProject = useSelector((state) => state.interview.projects);
    const navigate = useNavigate()

    const ScrollRef = useRef(null)
    

    //매칭하기 
    const data = useSelector((state) => state.matches.resumes)
    const [projectId, setProjectId] = useState("");
    const [seeData,setSeeData] = useState(false)
 

  //프로젝트 카드
  useEffect(() => {
    dispatch(loadProjectsAxios());
  }, []);

  const matchOnclick = () => {
    if (projectId && projectId) {
       dispatch(matchesResumesAxios(projectId));
      //  ScrollDown()
       setSeeData(true);
       ScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }  
  }

  const MoveChapter = () => {
    navigate(`/matchingcrew`)
  };

  const MoveResume = () => {
    navigate(`/matchingresume`)
  };

  useEffect(() => {
    if (seeData === true){
      ScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    };
  }, [seeData]);

  
    return (
      <>
        <MatchingBtnWrap>
          <PositionWrap>
            <BtnDivWrap onClick={MoveChapter} id="projectButton">
              <LeftTriangleDiv/>
              <CenterDiv >내가 모집중인 프로젝트</CenterDiv>
              <RightTriangleDiv/>
            </BtnDivWrap>

            <SecondBtnDivWrap  onClick={MoveResume} id="resumeButton">
          <LeftTriangleDivtwo/>
            <SecondCenterDiv >내 소개글</SecondCenterDiv>
          <RightTriangleDivtwo/>
        </SecondBtnDivWrap>

          </PositionWrap>
        </MatchingBtnWrap>

        <MatchingCrewWrap>
          <MatchingTopWrap>
            <MatchingText>
              어느 프로젝트에 맞는 팀원을 찾아드릴까요?
            </MatchingText>
            <MatchingCardWrap style={{display: myProject.length > 0 ? "" : "none"}}>
              <MiniProject data={myProject} setProjectId={setProjectId} />
            </MatchingCardWrap>
            <MatchingCardNoWrap style={{display: myProject.length > 0 ? "none" : ""}}>
              <img src = {EmptyAstroman}/>
              <span>아직 등록 하신 프로젝트가 없는 것 같아요...</span>
              <span>프로젝트를 등록해 주세요</span>
            </MatchingCardNoWrap>
          </MatchingTopWrap>
          <MatchingBotBtnWrap>
            <MatchingButton
              style={projectId !== "" ? { backgroundColor: "" } : { backgroundColor: "#D9D9D9", pointerEvents: "none" }}
              onClick={matchOnclick}>
              매칭하기
            </MatchingButton>
          </MatchingBotBtnWrap>
        </MatchingCrewWrap>
        {seeData ? (
          <MatchingBotWrap ref={ScrollRef}>
            <TextAlingWrap>
              <MatchingText>내 프로젝트에 어울리는 지원자를 선택해주세요</MatchingText>
            </TextAlingWrap>
            <ContentAlignWrap>
              <MatchingResumeWrap
                style={{ display: projectId.length === 0 ? "none" : "" }}
              >
                {data.map((list, index) => {
                  return <CradEmpol key={index} data={list} />;
                })}
              </MatchingResumeWrap>
              <MatchingResumeWrap
                style={{ display: data.length > 0 ? "none" : "" }}
              >
                <EmptyMatchCard />
              </MatchingResumeWrap>
            </ContentAlignWrap>
          </MatchingBotWrap>
        ) : (
          <FallowText>
            모집중인 프로젝트 중 하나를 선택하시면 프로젝트와 맞는 사용자를 찾아
            드립니다
          </FallowText>
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
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 24px;
`

const MatchingCardWrap = styled.div`
    height: 384px;
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
    margin-top: 60px;
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
    overflow: scroll;
    gap: 21px;
`               
                        

const ContentAlignWrap = styled.div`
  margin-top: 35px;
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
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
  /* margin-top: 20px; */
  height: auto;
  padding-bottom: 80px;
  /* height: 20vh; */
  background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
`

const FallowText = styled.span`
  /* margin-top: 60px; */
`

const MatchingCardNoWrap = styled.div`
    height: 360px;
    width: 1200px;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
`



const MatchingBtnWrap = styled.div`
    width: 100%;
    height: 66px;
    background-color: #303032;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;
    /* border: 1px solid white; */
`

const LeftTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid transparent;
  border-right: 17px solid white;
  pointer-events: none;

`

const CenterDiv = styled.label`
    width: 200px;
    height: 34px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

`

const RightTriangleDiv = styled.label`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid white;
  border-right: 17px solid transparent;
  pointer-events: none;
`
 

const BtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: -1px;
`

const PositionWrap = styled.div`
    position: relative;
    /* border: 1px solid white; */
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    left: -350px;
`


const SecondBtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    /* margin-bottom: -3px; */
`

const LeftTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid transparent;
  border-right: 17px solid white;
  pointer-events: none;
`

const SecondCenterDiv = styled.label`
    width: 120px;
    height: 34px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    color: #d9d9d9;
    cursor: pointer;
`

const RightTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid white;
  border-right: 17px solid transparent;
  pointer-events: none;
`


 
export default MatchingCrew