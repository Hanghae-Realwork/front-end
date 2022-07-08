import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import BasicPhoto from "../image/astro-white.svg"



function Header() {
  const navigate = useNavigate();
  // style={{fontWeight: ? "bold" : " "}}

  return (
    <BackGroundDiv>
      <HeaderWrap>
        <HeaderConWrap>
          <HeaderAlignWrap>
            <LogoWrap>
              <HeaderFix onClick={() => {navigate(`/`);}}>ren<span style={{ color: "#AE97E3" }}>D</span>ev</HeaderFix></LogoWrap>
            <HeaderLeftWrap>
              <FindProject style={{ fontWeight: "bold" }} onClick={() => {navigate(`/mainrecruit`);}}>프로젝트 찾기</FindProject>
              <FindProject onClick={() => {navigate(`/mainemployment`);}}>팀원 찾기</FindProject>
            </HeaderLeftWrap>
          </HeaderAlignWrap>
          <HeaderRightWrap>
            <LoginButton onClick={() => {navigate(`/login`);}}>로그인</LoginButton>
            <CircleImage onClick={() => {navigate(`/mypage`);}}><img src = {BasicPhoto} /></CircleImage>
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
    /* margin: 26px 0px 26px 0px; */
    cursor: pointer;
    /* border: 1px solid white; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const HeaderFix = styled.label`
    color: #fff;
    cursor: pointer;
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
    width: 410px;
`

const HeaderLeftWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    /* width: 108vh; */
    gap: 20px;
    margin-bottom: 5px;
`

const FindProject = styled.label`
    /* border: 1px solid white; */
    outline: none;
    cursor: pointer;
    background-color: transparent;
    /* margin: 10px; */
    font-size: 16px;
    color: #FFF;
    font-weight: 500;
    padding: 8px 16px 8px 16px;
    border-radius: 2px;
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



