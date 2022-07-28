import React from "react"
import styled from "styled-components"

import EmptyAstroman from "../../image/emptyAstroman.svg"

function EmptyMyProject() {

    return(
        <>
            <EmptyBackWrap>
                <EmptyCardInnerWrap>
                    <EmptyCardTop>
                        <EmptyText>아직 작성한 프로젝트가 없어요...ㅠㅠ</EmptyText>
                        <EmptyText>renDev의 다양한 아이디어로 <br/>프로젝트를 시작해보세요!</EmptyText>
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
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 30px 20px 30px 20px;
`

const EmptyCardBot = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const EmptyText = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export default EmptyMyProject;
