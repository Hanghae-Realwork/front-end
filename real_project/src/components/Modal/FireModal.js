import React, { useRef } from "react"
import styled from "styled-components"

import Logo from "../../image/Logo_vertical.svg"
import close from "../../image/closeIcon.svg"

import { useDispatch ,useSelector} from "react-redux"
import { userDeleteAxios } from "../../redux/modules/user"
import { useNavigate } from "react-router-dom"
function FireModal(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nickname = useSelector((state) => state.user.userInfo.nickname);
    const password = useRef(null)
    const CloseModal = () => {
        props.close(false);
      };
    const fireOnClick = () => {
        dispatch(userDeleteAxios(nickname, password.current.value)).then(() => {
            alert("랑데브는 언제나 이 자리에 있습니다. 🥸")
            navigate("/")
        })
      }
    return(
        <>
            <BackGroundWrap>
                <JustRelative>
                    <FireModalWrap>
                        <CloseWrap><CloseBtn src={close} onClick={() => {CloseModal()}}/></CloseWrap>
                        <LogoBox />
                        <LoginGuide>탈퇴하려면 비밀번호를 다시 입력해주세요</LoginGuide>
                        <FireInput ref={password}></FireInput>
                        <GotoJoinBtn onClick={fireOnClick}>탈퇴하기</GotoJoinBtn>
                    </FireModalWrap>
                </JustRelative>
            </BackGroundWrap>

        </>
    )
}

const FireModalWrap = styled.div`
    width: 685px;
    height: 407px;
    background: #303032;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    top: 35vh;
    left: 170vh;
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
    margin-bottom: 25px;
`

const CloseBtn = styled.img`
    cursor: pointer;
`

const BackGroundWrap = styled.div`
    position: relative;
    width: 400vh;
    height: 135vh;
    background-color: rgba(48,48,50,0.80);
    top: -100px;
    margin-bottom: -150px;
`

const JustRelative = styled.div`
    position: relative;
`

const FireInput = styled.input`
    margin-top: 30px;
    margin-bottom: 20px;
    width: 240px;
    background-color: transparent;
    color: white;
    outline: none;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 10px 14px 10px 14px;
`



export default FireModal