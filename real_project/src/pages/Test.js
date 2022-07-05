import styled from "styled-components"

import Tag from "../components/TagCompo"


function Test () {

    return(

        <>
        <AllWrap className="Recipiet">
            <AllTopWrap>
                <CardTopInfo>
                    <CardWriteName>[작성자명]</CardWriteName>
                    <CardWriteTime>[nn 시간 전]</CardWriteTime>
                </CardTopInfo>
                <CardTitleInfo>
                    <CardTitleText>[게시글 제목이 들어갑니다]</CardTitleText>
                </CardTitleInfo>
                <CardMainTextInfo>
                    <CardMainText>
                        [여기에 내용이 노출 됩니다]
                        <br/>
                        [여기에 내용이 노출 됩니다]
                    </CardMainText>
                </CardMainTextInfo>
                <CardJobTextWrap>
                    <CardJobTitle>[구하는 직군]</CardJobTitle>
                    <div style={{marginTop:"4px"}}><CardJobMainTitle>[구하는 직군 명]</CardJobMainTitle></div>
                </CardJobTextWrap>
                <CardTagWrap>
                    <CardJobTitle>[원하는 보유 기술]</CardJobTitle><br/>
                    <div style={{marginTop:"4px"}}><Tag/><Tag/><Tag/><Tag/></div>
                </CardTagWrap>
            </AllTopWrap>
            <CircleWrap>
                <AllMidWrap/>
                    <DashedLine/>
                <AllMidWrap/>
            </CircleWrap>
            <AllBotWrap>
                <CardBotTopWrap>
                    <CardBotTextDate>프로젝트 러닝 기간:</CardBotTextDate>
                    <CardBotTextDateInfo>22.06.20 ~ 22.08.15</CardBotTextDateInfo>
                </CardBotTopWrap>
                <CardViewButton>프로젝트 보러 가기</CardViewButton>
            </AllBotWrap>
        </AllWrap>

        </>
    )
}


//// 카드 전체 틀 관련 CSS 뭉치

const AllWrap = styled.div`
    margin: 60px;
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
    width: 394px;
    height: 445px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    clip-path: inset(0 5px 0 5px);
    /* position: absolute; */
    /* clip: rect(300 500 10% 10%)  */
`

const AllTopWrap = styled.div`
    border-bottom: none;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 384px;
    height: 305px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: -5px;
`

const CircleWrap = styled.div`
    /* border: 1px solid black; */
    width: 460px;
    height: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const AllMidWrap = styled.div`
    border: 1px solid black;
    width: 49px;
    height: 32px;
    border-radius: 15px;
`

const AllBotWrap = styled.div`
    /* border: 1px solid black; */
    border-top: none;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 384px;
    height: 118.5px;
    margin-top: -5px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`



//// 카드 내용 관련 CSS 뭉치

const CardTopInfo = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    height: 18px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin: 23px 20px 0px 20px;
`

const CardWriteName = styled.span`
    font-size: 12px;
    width: 54px;
    height: 18px;
`

const CardWriteTime = styled.span`
    font-size: 12px;
    width: 65px;
    height: 18px;
`

const CardTitleInfo = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 16px 20px 0px 20px;
`

const CardTitleText = styled.span`
    font-size: 18px;
    font-weight: 700;
`

const CardMainTextInfo = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    height: 44px;
    margin: 20px 20px 0px 20px;
`

const CardMainText = styled.span`
    font-size: 14px;
    line-height: 21px;
`

const CardJobTextWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    margin: 26px 20px 0px 20px;
    height: 50px;
`

const CardJobTitle = styled.span`
    font-size: 12px;
    margin-bottom: 4px;
`

const CardJobMainTitle = styled.span`
    margin-top: 4px;
    font-weight: 700;
    font-size: 14px;
`

const CardTagWrap = styled.div`
    /* border: 1px solid black; */
    width: 344px;
    height: 52px;
    margin-top: 8px;
    margin-bottom: 20px;
`

//// 센터 대쉬라인
const DashedLine = styled.hr`
    width: 320px;
    border: 0.5px dashed #8A8D8F;
`



const CardBotTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 340px;
    height: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 18px;
`

const CardBotTextDate = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
`

const CardBotTextDateInfo = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
`


const CardViewButton = styled.button`
    width: 340px;
    height: 40px;
    padding: 8px;
    margin-top: 20px;
    margin-bottom: 12.5px;
    background-color: black;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 14px;
`

export default Test