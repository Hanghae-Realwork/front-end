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
    navigate(`/mypage/${nickname}/resumes`)
    setCurrentClick(e.target.id);
  };


  useEffect(
      (e) => {
      if (currentClick !== null) {
          let current = document.getElementById(currentClick);
          current.style.border = "1px white";
          current.style.background = "#3d3d3d";
      }
      if (prevClick !== null) {
          let prev = document.getElementById(prevClick);
          prev.style.border = "none";
          prev.style.background = "#303032";
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
            <MyMenuButton onClick={MoveMyResume} id="Mybtn3">내 이력서</MyMenuButton>
            <MyMenuButton onClick={MoveMyProject} id="Mybtn4">내 프로젝트</MyMenuButton>
          </RightTopWrap>
        </BackgroundAllWrap>
      </OnlyBackgroundWrap>
    </>
  );
}

const BackgroundAllWrap = styled.div`
  /* border: 1px solid white; */
  width: 1440px;
  height: 130px;
  background-color: #323230;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;

const RightTopWrap = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 44px;
  margin-right: 200px;
  margin-bottom: 30px;
  /* position: relative; */
`;

const OnlyBackgroundWrap = styled.div`
    background-color: #323230;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    height: 130px;
`

// const LeftTopWrap = styled.div`
//     border: 1px solid white;
//     width: 500px;
// `

const MyMenuButton = styled.button`
  padding: 8px 20px 8px 20px;
  width: 135px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 20px;
  background-color: transparent;
  /* background-color: transparent; */
  /* background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%); */
  border: none;
  outline: none;
  cursor: pointer;
  color: white;

  :active{
    
}
`;

export default ButtonLine;
