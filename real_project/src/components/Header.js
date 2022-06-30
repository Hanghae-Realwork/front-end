
import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";


function Header () {

    const navigate = useNavigate()

    return (
        <HeaderWrap>
            <LogoWrap>
                <HeaderFix onClick={() => {navigate(`/`)}}>renDev</HeaderFix>
            </LogoWrap>
            <HeaderConWrap>
                <HeaderLeftWrap>

                    <FindProject style={{fontWeight:"bold"}} onClick={() => {navigate(`/mainrecruit`)}}>프로젝트 찾기</FindProject>
                    <FindProject onClick={() => {navigate(`/mainemployment`)}}>팀원 찾기</FindProject>
                    <FindProject onClick={() => {navigate(`/recruitwrite`)}}>지원자 모집 (임시)</FindProject>


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
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid #D0D3D4;
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
    width: 140vh;
`

const HeaderLeftWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: flex-end;

`

const FindProject = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin: 10px;
    font-size: 16px;
`

const HeaderRightWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items: flex-end;
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
`


const CircleImage = styled.div`
    width: 40px;
    height:40px;
    border-radius: 50px;
    background-color: #685BC7;
    cursor: pointer;
`

export default Header
