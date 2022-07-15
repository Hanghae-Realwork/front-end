import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserValidation, logOut } from "../redux/modules/user";

import BasicPhoto from "../image/astro-white.svg"
import Logo from "../image/Logo_vertical.svg"


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
   const nickname = useSelector((state) => state.user.userInfo.nickname);

  
  React.useEffect(() => {
    if (loginInfo === false) {
      dispatch(checkUserValidation());
    }
  });

  // style={{fontWeight: ? "bold" : " "}}

  const logoutClick = () => {
    const result = window.confirm("정말 로그아웃 하시겠습니까 ?");
    if (result) {
      alert("로그아웃 되었습니다.")
       navigate("/");
       dispatch(logOut());
    }
   

   
  }
  return (
    <BackGroundDiv>
      <HeaderWrap>
        <HeaderConWrap>
          <HeaderAlignWrap>

            <LogoWrap onClick={() => {navigate(`/`);}}></LogoWrap>
            <HeaderLeftWrap>
              <FindProject onClick={() => {navigate(`/mainrecruit`);}}>프로젝트 찾기</FindProject>
              <FindProject onClick={() => {navigate(`/mainemployment`);}}>팀원 찾기</FindProject>
              <FindMatching onClick={() => {navigate(`/`);}}>프로젝트 매칭</FindMatching>
              <FindProject onClick={() => {navigate(`/chatjoin`);}}>화상채팅(임시)</FindProject>

            </HeaderLeftWrap>
          </HeaderAlignWrap>
          <HeaderRightWrap>
            <LoginButton
              onClick={() => {
                navigate(`/login`);
              }}
              style={{ display: !loginInfo ? "" : "none" }}
            >
              로그인
            </LoginButton>
            <LoginButton
              style={{ display: !loginInfo ? "none" : "" }}
              onClick={logoutClick}
            >
              로그아웃
            </LoginButton>
            <CircleImage
              onClick={() => {
                navigate(`/mypage/${nickname}/apply`);
              

              }}
            >
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
    align-items: center;
    /* width: 108vh; */
    gap: 20px;
    margin-left: 80px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

const FindMatching = styled.label`
    /* border: 1px solid white; */
    outline: none;
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
    margin-top: 10px;
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



