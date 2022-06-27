import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";


function Header () {

    const navigate = useNavigate()

    return (
        <HeaderWrap>
            <LogoWrap>
                <p onClick={() => {navigate(`/`)}}>LOGO</p>
            </LogoWrap>
            <HeaderConWrap>
                <HeaderLeftWrap>
                    <FindProject style={{fontWeight:"bold"}} onClick={() => {navigate(`/mainemployment`)}}>프로젝트 찾기</FindProject>
                    <FindProject onClick={() => {navigate(`/recruit`)}}>팀원 찾기</FindProject>
                </HeaderLeftWrap>
                <HeaderRightWrap>
                    <CircleImage></CircleImage>
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
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #D0D3D4;
`

const LogoWrap = styled.div`
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
    /* border: 1px solid wrap; */
`

const HeaderConWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 100vh;

`

const HeaderLeftWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;

`

const FindProject = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin-right: 10px;
    margin-left: 60px;
    margin-top: 30px;
    font-size: 25px;
`

const HeaderRightWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;

`

const CircleImage = styled.div`
    width: 70px;
    height:70px;
    border-radius: 100px;
    background-color: aliceblue;
`

export default Header