import React from "react"
import styled from "styled-components"

import MatchingBtn from "../components/Matching/MatchingBtn"

function MatchingResume(){

    return(
        <>
        <MatchingBtn/>
            <MatchingCrewWrap>   
                <MatchingText>맞는 상대를 찾고 싶은 지원자를 선택해주세요</MatchingText>
                <MatchingCardWrap></MatchingCardWrap>
            </MatchingCrewWrap>

        </>
    )
}


const MatchingCrewWrap = styled.div`
    width: 1200px;
    height: 500px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const MatchingText = styled.span`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 24px;
`

const MatchingCardWrap = styled.div`
    height: 384px;
    width: 200%;
    border: 1px solid black;
    overflow-x: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

`

export default MatchingResume