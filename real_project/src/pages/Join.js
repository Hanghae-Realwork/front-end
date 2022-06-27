import React from "react"
import styled from "styled-components"

function Join () {
    return (
      <>
        
        <JoinWrap>
            <AlignWrap>
                <LogoWrap>
                    <p>로고</p>
                </LogoWrap>
                <InpuJoinWrap>
                    <IdWrap>
                        <InputBar placeholder="아이디"></InputBar>
                    </IdWrap>
                    <IdWrap>
                        <InputBar placeholder="닉네임"></InputBar>
                    </IdWrap>
                    <IdWrap>
                        <InputBar placeholder="이름"></InputBar>
                    </IdWrap>
                    <IdWrap>
                        <InputBar placeholder="생년월일 / 0000-00-00"></InputBar>
                    </IdWrap>
                    <PwWrap>
                        <InputBar placeholder="비밀번호"></InputBar>
                    </PwWrap>
                    <PwWrap>
                        <InputBar placeholder="비밀번호 확인"></InputBar>
                    </PwWrap>
                    <PolicyWrap>
                        <ServicePolicy>서비스 정책</ServicePolicy>
                        <ServicePolicy>전체 동의 <CheckBox type={"checkbox"} /></ServicePolicy>
                    </PolicyWrap>
                </InpuJoinWrap>
                    <ButtonWrap>
                        <JoinButton>회원가입</JoinButton>
                    </ButtonWrap>
            </AlignWrap>
        </JoinWrap>
        
        </>
    );

}



const JoinWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const AlignWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const LogoWrap = styled.div`
    /* border: 1px solid black; */
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
`

const InpuJoinWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const IdWrap = styled.div`
    /* border: 1px solid black; */
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
`

const PwWrap = styled.div`
    /* border: 1px solid black; */
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
`

const PolicyWrap = styled.div`
    /* border: 1px solid black; */
    width: 400px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px;
`

const InputBar = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 7px;
    width: 400px;
`

const ServicePolicy = styled.span`

`

const CheckBox = styled.input`

`

const ButtonWrap = styled.div`
    /* border:1px solid black; */
    width: auto;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const JoinButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    width: 400px;
    height: 60px;
    margin: 30px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    background-color: #25282A;
`

export default Join;

