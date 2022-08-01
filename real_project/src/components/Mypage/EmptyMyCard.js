import React from "react"
import styled from "styled-components"

import EmptyAstroman from "../../image/emptyAstroman.svg"

function EmptyMyCard() {

    return(
        <>
            <EmptyBackWrap>
                <EmptyCardInnerWrap>
                    <EmptyCardTop>
                        <EmptyText>아직 작성한 지원서가 없어요...ㅠㅠ</EmptyText>
                        <EmptyText>renDev에서 다양한 프로젝트에</EmptyText>
                        <EmptyText>팀원으로 동참해보세요!</EmptyText>
                    </EmptyCardTop>
                    <EmptyCardBot>
                        <img src={EmptyAstroman}/>
                    </EmptyCardBot>
                </EmptyCardInnerWrap>
            </EmptyBackWrap>
        </>
    )
}

const EmptyBackWrap = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    width: 384px;
    height: 307px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const EmptyCardInnerWrap = styled.div`
    border: 1px dashed #8D8D8D;
    width: 364px;
    height: 290px;
`

const EmptyCardTop = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 30px 20px 30px 20px;
`

const EmptyCardBot = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const EmptyText = styled.span`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`

export default EmptyMyCard;
