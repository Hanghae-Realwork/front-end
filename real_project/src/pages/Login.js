import styled from "styled-components"


function Login () {
    return (
        <>
        
        <LoginWrap>
            <AlignWrap>
                <LogoWrap>
                    <p>로고</p>
                </LogoWrap>
                <InpuLoginWrap>
                    <IdWrap>
                        <InputBar placeholder="아이디"></InputBar>
                    </IdWrap>
                    <PwWrap>
                        <InputBar placeholder="패스워드"></InputBar>
                    </PwWrap>
                </InpuLoginWrap>
                    <ButtonWrap>
                        <LoginButton>로그인</LoginButton>
                    </ButtonWrap>
            </AlignWrap>
        </LoginWrap>
        
        </>
    )

}



const LoginWrap = styled.div`
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

const InpuLoginWrap = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: auto;
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

const InputBar = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 7px;
    width: 400px;
`

const ButtonWrap = styled.div`
    /* border:1px solid black; */
    width: auto;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginButton = styled.button`
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

export default Login