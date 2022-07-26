import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserValidation, logOut, userInfo } from "../redux/modules/user";
import {resetresult} from "../redux/modules/search"

import BasicPhoto from "../image/astro-white.svg"
import Logo from "../image/Logo_vertical.svg"



function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  const test = useSelector((state) => state.user.userInfo);

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const [button, setButton] = useState([false, false, false])

  React.useEffect(() => {
    if (loginInfo === false) {dispatch(checkUserValidation());}},[loginInfo]);

  const logoutClick = () => {
    const result = window.confirm("정말...나가실건가욥..? 🥸");
    if (result) {
      
       navigate("/");
       dispatch(logOut());
    } 
  }

  const ResetResult = () => {
    dispatch(resetresult([]))    
  }


  const MoveProject = (e) => {
      navigate(`/mainrecruit`)
      setCurrentClick(e.target.id);
      ResetResult()
  };

  const MoveResume = (e) => {
    navigate(`/mainemployment`)
    setCurrentClick(e.target.id);
    ResetResult()
  };

  const MoveMatching = (e) => {
    navigate(`/matchingcrew`)
    setCurrentClick(e.target.id);
    ResetResult()
  };

  const MoveCallChat = (e) => {
    window.open(`https://rendev.click/`)
    setCurrentClick(e.target.id);
    ResetResult()
  };

  const MoveLogin = () => {
    navigate(`/login`)
    ResetResult()
  }

  const MoveMyPage = () => {
    navigate(`/mypage/${nickname}/apply`)
    ResetResult()
  }

  const MoveMain = () => {
    navigate(`/`)
    ResetResult()
  }


  useEffect(
      (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
          current.style.fontWeight = "bold";
          current.style.backgroundColor = "#303032";
      }
      if (prevClick !== null) {
          let prev = document.getElementById(prevClick);
          prev.style.backgroundColor = "transparent";
      }
      setPrevClick(currentClick);
      },
    [currentClick]
  );


  return (
    <BackGroundDiv>
      <HeaderWrap>
        <HeaderConWrap>
          <HeaderAlignWrap>
            <LogoWrap onClick={MoveMain}></LogoWrap>
            <HeaderLeftWrap>

              <FindProject onClick={MoveProject} id="btn1">프로젝트 찾기</FindProject>
              <FindProject onClick={MoveResume} id="btn2">팀원 찾기</FindProject>
              <FindMatching onClick={MoveMatching} id="btn3">프로젝트 매칭</FindMatching>
              <FindProject onClick={MoveCallChat} id="btn4">화상채팅(임시)</FindProject>

            </HeaderLeftWrap>
          </HeaderAlignWrap>
          <HeaderRightWrap>
            <LoginButton
              onClick={MoveLogin}
              style={{ display: !loginInfo ? "" : "none" }}>
              로그인
            </LoginButton>
            <LoginButton
              style={{ display: !loginInfo ? "none" : "" }}
              onClick={logoutClick}>
              로그아웃
            </LoginButton>

            <CircleImage
              onClick={() => {
                if (loginInfo) {
                MoveMyPage();
                } else {
                  alert("로그인을 해주세요! 🥸");
                }}}>
              <img src={BasicPhoto} />
            </CircleImage>
          </HeaderRightWrap>
        </HeaderConWrap>
      </HeaderWrap>
    </BackGroundDiv>
  );
}



const BackGroundDiv = styled.div`
    background-color: #1F1F1F;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderWrap = styled.div`
    /* border: 1px solid white; */
    width: 100%;
    max-width: 1440px;
    height: 80px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #1F1F1F;
`

const LogoWrap = styled.div`
    width: 107px;
    height: 48px;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 5px;
    /* margin: 26px 0px 26px 0px; */
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-image: url(${Logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
`

const HeaderConWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* width: 155vh; */
    width: 1189px;
    /* max-width: 1440px; */
`

const HeaderAlignWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid white; */
    width: auto;
`

const HeaderLeftWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    /* width: 108vh; */
    gap: 20px;
    margin-left: 80px;
`

const FindProject = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    color: #FFF;
    font-weight: 500;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 2px;
`

const FindMatching = styled.button`
    /* border: 1px solid white; */
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    /* margin: 10px; */
    font-size: 16px;
    color: #FFF;
    font-weight: 500;
    padding: 8px 16px 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const HeaderRightWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    
`

const LoginButton = styled.span`
    font-size: 14px;
    padding: 5px;
    font-weight: bold;
    border: none;
    outline: none;
    background-color: transparent;
    margin-right: 18px;
    cursor: pointer;
    color: #fff;
    /* border: 1px solid black; */

`


const CircleImage = styled.div`
    width: 36px;
    height:36px;
    border-radius: 100%;
    background: linear-gradient(45deg, #AE97E3, #77C3E7);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url(${BasicPhoto});
    background-position: center;
    background-size: cover;  */

    cursor: pointer;
`





export default Header



