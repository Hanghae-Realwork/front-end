import styled from "styled-components";
import { useNavigate } from "react-router-dom";





function Main () {

    const navigate = useNavigate()

    return(
        <>
            <BackGroundDiv className="MainBack">
                <MainAllWrap >
                    <MaininTitleTopWrap>
                        <HeadTitleWrap><TitleMain>사람과 아이디어의 조우<span style={{fontSize:"49px", fontWeight:"bold"}}>, renDev</span></TitleMain></HeadTitleWrap>
                        <SubWrap><SubMain>우주항공용어로 랑데부(Rendez-Vous)란, 드넓은 우주를 유영하던 두 물체의 만남을 말합니다.
                            개발자들은 물론, 디자이너까지, 아이디어의 우주를 헤엄치며 함께할 팀원을 찾는 여러분께 renDev가 협업을 위한 랑데부 포인트가 되어드리겠습니다.</SubMain></SubWrap>
                        <MainButtonWrap>
                            <PageButton onClick={() => {navigate(`/mainrecruit`)}}>프로젝트 페이지로 가기</PageButton>
                            <PageButton2 onClick={() => {navigate(`/mainemployment`)}}>크루원 구하러 가기</PageButton2>
                            </MainButtonWrap>
                    </MaininTitleTopWrap>
                </MainAllWrap>
            </BackGroundDiv>
                
            <BottomBackGround>    
            <MainTextBotWrap>
                <MainBotText>
                    <MainTextTitle>
                        {/* <TitleSpan>renDev는 이런 서비스 입니다</TitleSpan> */}
                        <ContentSpan>저 멀리 시대에 뒤쳐진 은하계 서쪽 소용돌이의 끝, 
                            지도에도 나와 있지 않은 그 변두리 지역에 아무도 주목하지 않는 작은 노란색 항성이 하나 있다.
                            <SubSpan> ~은하수를 여행하는 히치하이커를 위한 안내서~ (더글라스 애덤스)</SubSpan>
                            <br/>은하수를 여행하는 히치하이커 라는 작품을 아시나요?
                            프로젝트를 함께할 사람들을 기다리는 히치하이커들을 위한 공간, 신선한 아이디어의 프로젝트와 준비된 크루원들이 모이는 이곳은 renDev입니다.
                            
                        </ContentSpan>

                    </MainTextTitle>
                </MainBotText>
            </MainTextBotWrap>
            </BottomBackGround>
        </>

    )

}


const BackGroundDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainAllWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  max-width: 1440px;
  height: 670px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

const MaininTitleTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 500px;
  height: 350px;
  margin-bottom: 205px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const TitleMain = styled.span`
  font-size: 35px;
  font-weight: bolder;
  color: white;
`;

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
  background-color: #AE97E3;
  color: white;
  cursor: pointer;
`;

const PageButton2 = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 12px;
  background-color: #77C3E7;
  color: white;
  cursor: pointer;
`;

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

const BottomBackGround = styled.div`
    background-color: #303032;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainTextBotWrap = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 25vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #303032;
`

const MainBotText = styled.div`
    /* border: 1px solid black; */
    width: 155vh;
    height: 110px;
`

const MainTextTitle = styled.div`
    color: white;
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
