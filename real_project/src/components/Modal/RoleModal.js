import React from "react"
import styled from "styled-components"


function RoleModal (props) {

    return(
        <>
            <RoleWrap>
                <RoleLabel>FrontEnd 개발자</RoleLabel>
                <RoleLabel>BackEnd 개발자</RoleLabel>
                <RoleLabelEnd>UX/UI 디자이너</RoleLabelEnd>
            </RoleWrap>
        </>
    )
}

const RoleWrap = styled.div`
    width: 187px;
    height: 136px;
    border: 0.5px solid #303032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 5;
    background-color: white;
    top: 160px;
`

const RoleLabel = styled.label`
    width: 155px;
    /* border: 1px solid black; */
    padding: 10px 30px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid black;
    cursor: pointer;
`

const RoleLabelEnd = styled.label`
    width: 155px;
    /* border: 1px solid black; */
    padding: 10px 30px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default RoleModal