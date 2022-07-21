import React from "react"
import styled from "styled-components"

function MatchingBtn(){

    return(
        <>
            <MatchingBtnWrap>
                <BtnWrap>
                    <TopBtn1>내가 모집중인 프로젝트</TopBtn1>
                    <TopBtn2>내 이력서</TopBtn2>
                </BtnWrap>

            </MatchingBtnWrap>
        </>
    )
}


const MatchingBtnWrap = styled.div`
    width: 100%;
    height: 66px;
    background-color: #303032;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;

`

const BtnWrap = styled.div`
    width: 1300px;
    margin-left:100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid white; */
`



const TopBtn1 = styled.button`
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    width: 246px;
    height: 40px;
    padding: 9px 46px 9px 46px;
    font-weight: 700;
    font-size: 16px;
    border: none;
    border-bottom: none;
    outline: none;
    cursor: pointer;
    background-color: white;
    z-index: 2;
`

const TopBtn2 = styled.button`
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    width: 180px;
    height: 40px;
    padding: 9px 60px 9px 60px;
    font-weight: 700;
    font-size: 16px;
    color: #d9d9d9;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    cursor: pointer;
    margin-left: -44px;
    background-color: white;
`


export default MatchingBtn