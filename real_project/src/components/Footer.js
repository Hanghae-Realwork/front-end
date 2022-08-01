import React from "react"
import styled from "styled-components"

import Logo from "../image/Logo_black.svg"


function Footer (){

    return(
        <>
            <AllFooterWrap>
                <FooterWrap>
                    <LogoWrap/>
                    <TextDiv>
                        <AgreeText>이용약관</AgreeText>
                        <CopyText>Copyright(c)2022 renDev랑데브 All Rights Reserved.</CopyText>
                    </TextDiv>
                </FooterWrap>
            </AllFooterWrap>

        </>
    )
}

const AllFooterWrap = styled.div`
    width: 100%;
    height: 120px;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterWrap = styled.div`
    width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const LogoWrap = styled.div`
    width: 150px;
    height: 40px;
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

const TextDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-end;
`

const CopyText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`

const AgreeText = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`


export default Footer