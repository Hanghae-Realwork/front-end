import React from "react"
import styled from "styled-components"

import Logo from "../../image/Logo_vertical.svg"
import close from "../../image/closeIcon.svg"

function LoginModal (props) {

    const CloseModal = () => {
        props.close(false);
      };

    return(
        <>
            <LoginModalWrap>
                <CloseWrap><CloseBtn src={close} onClick={CloseModal}/></CloseWrap>
                <LogoBox />
                <LoginGuide>서비스를 이용하기 위해 로그인이 필요합니다</LoginGuide>
                <GotoJoinBtn>확인</GotoJoinBtn>
            </LoginModalWrap>
        </>
    )
}

const LoginModalWrap = styled.div`
    width: 685px;
    height: 331px;
    background: #303032;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
`

const LogoBox = styled.div`
    background-image: url(${Logo});
    width: 200px;
    height: 45px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    /* border: 1px solid white; */
`

const LoginGuide = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin-top: 54px;
`

const GotoJoinBtn = styled.button`
    color: white;
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border-radius: 4px;
    padding: 6.5px 33.5px 6.5px 33.5px;
    font-size: 18px;
    font-weight: 700;
    border: none;
    outline: none;
    margin-top: 20.79px;
    cursor: pointer;
`

const CloseWrap = styled.div`
    width: 620px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -40px;
    margin-bottom: 40px;
`

const CloseBtn = styled.img`
    cursor: pointer;
`

export default LoginModal