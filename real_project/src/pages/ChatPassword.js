import React, { useRef, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useHref } from "react-router-dom";
import io from "socket.io-client"
import styled from "styled-components"


function ChatPassword() {

    const navigate = useNavigate()




    return(
        <>
            <ChatAllWrap>
                <ChatTextWrap>
                    <GuideText>닉네임 님과의 면접창입니다. 면접 코드를 입력 해주세요</GuideText>
                    <GuideText>면접 코드는 내 지원현황에서 확인하실 수 있습니다</GuideText>
                </ChatTextWrap> 
                <InputCodeWrap>
                    <NumberInput name="Num1" maxLength={1} autoFocus/>
                        <NumberLine/>
                    <NumberInput name="Num2" maxLength={1} />
                        <NumberLine/>
                    <NumberInput name="Num3" maxLength={1} />
                    <NumberLineWhite/>
                    <NumberInput name="Num4" maxLength={1} />
                        <NumberLine/>
                    <NumberInput name="Num5" maxLength={1} />
                        <NumberLine/>
                    <NumberInput name="Num6" maxLength={1} />
                </InputCodeWrap>
                <div>
                    <ChatSubmitButton onClick={() => {navigate(`/displaychatview`);}}>입장하기</ChatSubmitButton>
                </div>
            </ChatAllWrap>

        </>
    )
}


const ChatAllWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const ChatTextWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 160px 0px 60px 0px; 
`

const NumberInput = styled.input`
    width: 78px;
    height: 78px;
    text-align: center;
    padding: 10px;
    font-size: 50px;
    font-weight: 700;
    border-radius: 5px;
    outline: none;
`

const NumberLine = styled.hr`
    width: 24px;
`

const InputCodeWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const NumberLineWhite = styled.hr`
    border: 1px solid transparent;
    width: 24px;
`

const ChatSubmitButton = styled.button`
    background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
    border-radius: 4px;

    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: 700;
    padding: 8px 24px 8px 24px;
    margin-top: 87px;
`

const GuideText = styled.span`
    font-size: 24px;
    font-weight: 700;
`

export default ChatPassword