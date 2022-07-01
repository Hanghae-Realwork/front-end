import styled from "styled-components";



function Main () {

    return(
        <>
            <MainAllWrap className="MainBack">
                <MaininTitleTopWrap>
                    <div><TitleMain>renDev를 설명하는 메인글입니다. 캐치프라이즈를 작성해주십셔</TitleMain></div>
                    <SubWrap><SubMain>여기에는 renDev를 설명하는 핵심 캐치프라이즈 문구가 들어갑니다.
                        약 세줄 정도가 들어갈 것 같은데 세줄이라고 말하니 좀 많다고 느껴지면서 적다고도 느껴지는 지금
                        이 상황은 뭔가 ㅈ</SubMain></SubWrap>
                    <MainButtonWrap>
                        <PageButton>프로젝트 페이지로 가기</PageButton>
                        <PageButton2>팀원 페이지로 가기</PageButton2>
                        </MainButtonWrap>
                </MaininTitleTopWrap>
            </MainAllWrap>
                
            <MainBotWrap>
                <MainBotText>
                    <MainTextTitle>
                        <TitleSpan>renDev는 이런 서비스 입니다</TitleSpan>
                        <ContentSpan>여기에는 renDev의 서비스를 길고 장황하게 설명합니다. 길게 말하면 끝도 없이 나오겠지만 ㅈ</ContentSpan>

                    </MainTextTitle>
                </MainBotText>
            </MainBotWrap>
        </>

    )
}


const MainAllWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 60vh;
    padding: 20px;
    background-color: #9595D2;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
`

const MaininTitleTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 400px;
    height:350px;
    margin-left: 100px;
    margin-bottom: 70px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const TitleMain = styled.span`
    font-size: 35px;
    font-weight: bolder;
    color: white;
`

const SubWrap = styled.div`
    margin-top: 20px;
`

const SubMain = styled.span`
    font-size: 15px;
    color: white;
`

const PageButton = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    padding: 12px;
    background-color: #2E008B;
    color: white;
    cursor: pointer;
`

const PageButton2 = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    padding: 12px;
    background-color: #B884CB;
    color: white;
    cursor: pointer;
`

const MainButtonWrap = styled.div`
    /* border: 1px solid black; */
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`

const MainBotWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 25vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const MainBotText = styled.div`
    /* border: 1px solid black; */
    width: 155vh;
    height: 110px;
`

const MainTextTitle = styled.div`

`

const TitleSpan = styled.p`
    font-weight: bold;
    font-size: 16px;
`

const ContentSpan = styled.span`
    font-size: 14px;
`


export default Main