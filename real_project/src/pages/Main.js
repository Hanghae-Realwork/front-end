import styled from "styled-components";
import { useNavigate } from "react-router-dom";




function Main () {

    const navigate = useNavigate()

    return(
        <>
            <MainAllWrap className="MainBack">
                <MaininTitleTopWrap>
                    <HeadTitleWrap><TitleMain>프로젝트와 사람이 만나는 곳,<br/>여기는 renDev입니다</TitleMain></HeadTitleWrap>
                    <SubWrap><SubMain>우주 공간을 초속 수십킬로로 유영하는 두 개발자의 상대속도가 0이 되어 마주치는 순간을 
                        우리는 renDev라고 부르기로 했어요. <br/>개발자들은 물론, 디자이너 까지. 
                        프로젝트에 필요한 모든 사람의 도킹을 도와드리는 renDev에서 새로운 방식의 협업을 시작해 보세요.</SubMain></SubWrap>
                    <MainButtonWrap>
                        <PageButton onClick={() => {navigate(`/mainrecruit`)}}>프로젝트 페이지로 가기</PageButton>
                        <PageButton2 onClick={() => {navigate(`/mainemployment`)}}>팀원 페이지로 가기</PageButton2>
                        </MainButtonWrap>
                </MaininTitleTopWrap>
            </MainAllWrap>
                
            <MainBotWrap>
                <MainBotText>
                    <MainTextTitle>
                        <TitleSpan>renDev는 이런 서비스 입니다</TitleSpan>
                        <ContentSpan>저 멀리 시대에 뒤쳐진 은하계 서쪽 소용돌이의 끝, 
                            지도에도 나와 있지 않은 그 변두리 지역에 아무도 주목하지 않는 작은 노란색 항성이 하나 있다.
                            <SubSpan> ~은하수를 여행하는 히치하이커를 위한 안내서~ (더글라스 애덤스)</SubSpan>
                            <br/>은하수를 여행하는 히치하이커 라는 작품을 아시나요?
                            여기는 획기적인 아이디어의 프로젝트가 준비 되어 있는데, 
                            팀원을 어떻게 구할지 고민하시는 히치하이커들을 위해 준비 된 공간 renDev 입니다.
                            
                        </ContentSpan>

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

const HeadTitleWrap = styled.div`
    /* border: 1px solid black; */
    text-align: justify;
`

const SubWrap = styled.div`
    margin-top: 20px;
    /* border: 1px solid black; */
    text-align: justify;
`

const SubMain = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: white;
    font-weight: bold;
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

const SubSpan = styled.span`
    font-size: 12px;
    color: #B4B5DF;
`


export default Main