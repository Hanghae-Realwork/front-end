import React, {useState, useEffect} from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function ButtonLine() {
  const navigate = useNavigate()
  const nickname = useSelector((state) => state.user.userInfo.nickname);

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  

  const MoveMyRecruit = (e) => {
    navigate(`/mypage/${nickname}/apply`)
    setCurrentClick(e.target.id);
  };

  const MoveMyEmpol = (e) => {
    navigate(`/mypage/${nickname}/applys`)
    setCurrentClick(e.target.id);
  };

  const MoveMyResume = (e) => {
    navigate(`/mypage/${nickname}/resumes`)
    setCurrentClick(e.target.id);
  };

  const MoveMyProject = (e) => {
    navigate(`/mypage/${nickname}/project`)
    setCurrentClick(e.target.id);
  };


  useEffect(
      (e) => {
      if (currentClick !== null) {
          let current = document.getElementById(currentClick);
          current.style.border = "1px solid white";
          current.style.fontWeight = "700";
          current.style.backgroundColor = "#3d3d3d";
      }
      if (prevClick !== null) {
          let prev = document.getElementById(prevClick);
          prev.style.border = "none";
          prev.style.fontWeight = "400";
          prev.style.backgroundColor = "#303032";
      }
      setPrevClick(currentClick);
      },
      [currentClick]
  );




  return (
    <>
      <OnlyBackgroundWrap>
        <BackgroundAllWrap>
          <RightTopWrap>
            <MyMenuButton onClick={MoveMyRecruit} id="Mybtn1">내 지원 현황</MyMenuButton>
            <MyMenuButton onClick={MoveMyEmpol} id="Mybtn2">내 모집 현황</MyMenuButton>
            <MyMenuButton onClick={MoveMyResume} id="Mybtn3">내 소개글</MyMenuButton>
            <MyMenuButton onClick={MoveMyProject} id="Mybtn4">내 프로젝트</MyMenuButton>
          </RightTopWrap>
        </BackgroundAllWrap>
      </OnlyBackgroundWrap>
    </>
  );
}

const BackgroundAllWrap = styled.div`
  width: 1440px;
  height: 130px;
  background-color: #323230;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;

const RightTopWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 44px;
  margin-right: 250px;
  margin-bottom: 30px;
`;

const OnlyBackgroundWrap = styled.div`
    background-color: #323230;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
`

const MyMenuButton = styled.label`
  padding: 4px 15px 4px 15px;
  width: 100px;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;

export default ButtonLine;
