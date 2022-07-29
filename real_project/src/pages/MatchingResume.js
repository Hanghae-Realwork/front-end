import React,{useState,useEffect, useRef} from "react"
import styled from "styled-components"

import MatchingBtn from "../components/Matching/MatchingBtn"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import MiniResume from "../components/MiniProfile";
import { loadResumesAxios } from "../redux/modules/interview";
import { matchesProjectsAxios } from "../redux/modules/matches";
import CardRecruit from "../components/CardRecruit";
import EmptyProject from "../components/Mypage/EmptyCard"
import EmptyMatchProject from "../components/Mypage/EmptyMatchProject";

import EmptyAstroman from "../image/emptyAstroman.svg"


function MatchingResume() {

    const dispatch = useDispatch();

    const myResume = useSelector((state) => state.interview.resumes);
    const data = useSelector((state) => state.matches.projects)
  
    const [resumeId, setResumeId] = useState("");
    const [seeData, setSeeData] = useState(false)


    const navigate = useNavigate()

 
  
    const MoveChapter = () => {
      navigate(`/matchingcrew`)
    };

    const MoveResume = () => {
      navigate(`/matchingresume`)
    };
  
 
  useEffect(() => {
      dispatch(loadResumesAxios());
    }, []);

  const matchOnclick = () => {
    if (resumeId && resumeId) {
      dispatch(matchesProjectsAxios(resumeId));
      setSeeData(true);
    }
      
  }


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
              어느 소개서에 맞는 프로젝트를 찾아드릴까요?
            </MatchingText>
            <MatchingCardWrap style={{display: myResume.length > 0 ? "" : "none"}}>
              <MiniResume data={myResume} setResumeId={setResumeId} />
            </MatchingCardWrap>
            <MatchingCardNoWrap style={{display: myResume.length > 0 ? "none" : ""}}>
              <img src = {EmptyAstroman}/>
              <span>아직 등록 하신 내 소개글이 없는 것 같아요...</span>
              <span>소개글 등록을 통해 본인을 소개해 주세요</span>
            </MatchingCardNoWrap>
          </MatchingTopWrap>
          <MatchingBotBtnWrap>
            <MatchingButton
              style={
                resumeId !== ""
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
              <MatchingText>나에게 맞는 프로젝트를 선택해주세요</MatchingText>
            </TextAlingWrap>
            <ContentAlignWrap>
              <MatchingResumeWrap
                style={{ display: resumeId.length === 0 ? "none" : "" }}
              >
                {data.map((list, idx) => {
                  return <CardRecruit key={idx} data={list} />;
                })}
              </MatchingResumeWrap>
              <MatchingResumeWrap
                style={{ display: data.length > 0 ? "none" : "" }}
              >
                <EmptyMatchProject />
              </MatchingResumeWrap>
            </ContentAlignWrap>
          </MatchingBotWrap>
        ) : (
          <FallowText>
            작성하신 소개서 중 하나를 선택하시면 나와 맞는 프로젝트를 찾아
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

const MatchingBotWrap = styled.div`
   width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  margin-top: 40px;
  height: auto;
  padding-bottom: 80px;
  /* border: 1px solid black; */
  /* height: 20vh; */
  background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
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
    align-items: flex-start;
    gap: 20px;
`               
                        
const TextAlingWrap = styled.div`
  width: 1200px;
  margin-top: 35px;
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

const FallowText = styled.span`
  margin-top: 70px;
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
    font-weight: 500;
    font-size: 16px;
    color: #d9d9d9;
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
    /* margin-bottom: 1px; */
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
    font-weight: 700;
    font-size: 16px;
    /* color: #d9d9d9; */
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

export default MatchingResume