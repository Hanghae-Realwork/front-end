import React from "react"
import styled from "styled-components"

function EmptyCard() {

    return(
        <>
            <EmptyBackWrap>
                <EmptyCardInnerWrap></EmptyCardInnerWrap>
            </EmptyBackWrap>
        </>
    )
}

const EmptyBackWrap = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    width: 384px;
    height: 307px;
`

const EmptyCardInnerWrap = styled.div``

export default EmptyCard
