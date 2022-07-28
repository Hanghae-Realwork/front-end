import React from "react"
import styled from "styled-components"

function AgreementModal() {

    return(
        <>
            <AgreementBackgroundWrap>
                <JustRelative>
                    <AgreementWrap>
                        <TextWrap>
                            
                        </TextWrap>
                    </AgreementWrap>
                </JustRelative>
            </AgreementBackgroundWrap>
        </>
    )
}

const AgreementBackgroundWrap = styled.div`
    background-color: rgba(48,48,50,0.80);
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
    width: 400vh;
    height: 135vh;
    position: absolute;
    left: 0vh;
    top: 0vh;
    display: flex;
`

const JustRelative = styled.div`
    position: relative;
    left: -700px;
`

const AgreementWrap = styled.div`
    width: 685px;
    height: 522px;
    background: #303032;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    top: 150px;
    left: 1950px;
`

const TextWrap = styled.div`

`

export default AgreementModal;