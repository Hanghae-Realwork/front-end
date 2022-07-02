
import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";


function Header () {

    const navigate = useNavigate()
    // style={{fontWeight: ? "bold" : " "}}

    return (
        <HeaderWrap>
            <HeaderConWrap>
            <LogoWrap>
                <HeaderFix onClick={() => {navigate(`/`)}}>renDev</HeaderFix>
            </LogoWrap>
                <HeaderLeftWrap>


                    <FindProject style={{fontWeight:"bold"}} onClick={() => {navigate(`/mainrecruit`)}}>프로젝트 찾기</FindProject>
=
                    <FindProject onClick={() => {navigate(`/mainemployment`)}}>팀원 찾기</FindProject>


                </HeaderLeftWrap>
                <HeaderRightWrap>
                    <LoginButton onClick={() => {navigate(`/login`)}}>로그인</LoginButton>
                    <CircleImage onClick={() => {navigate(`/addprofile`)}}></CircleImage>
                </HeaderRightWrap>
            </HeaderConWrap>
        </HeaderWrap>
    )
}


const HeaderWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #D0D3D4;
    /* z-index: 900;
    position: fixed;
    top: 0%;
    background-color: white; */
`

const LogoWrap = styled.div`
    font-weight: bold;
    font-size: 40px;
    margin: 5px;
    cursor: pointer;
    /* border: 1px solid black; */
`

const HeaderFix = styled.span`
    color: #685BC7;
`

const HeaderConWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-end;
    width: 158vh;
`

const HeaderLeftWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    width: 120vh;
    gap: 20px;
    margin-bottom: 5px;
`

const FindProject = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    /* margin: 10px; */
    font-size: 16px;
    color: #685BC7;
    font-weight: bold;

`

const HeaderRightWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 5px;
    
`

const LoginButton = styled.button`
    font-size: 14px;
    padding: 5px;
    font-weight: bold;
    border: none;
    outline: none;
    background-color: transparent;
    margin-right: 10px;
    cursor: pointer;
    color: #685BC7;

`


const CircleImage = styled.div`
    width: 40px;
    height:40px;
    border-radius: 50px;
    background-color: #685BC7;
    cursor: pointer;
`

export default Header


