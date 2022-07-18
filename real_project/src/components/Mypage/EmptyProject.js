import React from "react"
import styled from "styled-components"

import EmptySolaSystem from "../../image/solasystem.svg"

function EmptyProject() {

    return(
        <>
            <EmptyBackWrap>
                <EmptyCardInnerWrap>
                    <EmptyCardTop>
                        <EmptyText>아직 모집중인 프로젝트가 없어요...ㅠㅠ</EmptyText>
                        <EmptyText>뛰어난 아이디어의 프로젝트를 등록해보세요!</EmptyText>
                    </EmptyCardTop>
                    <EmptyCardBot>
                        <img src={EmptySolaSystem}/>
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
    margin: 50px 20px 30px 20px;
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

export default EmptyProject
