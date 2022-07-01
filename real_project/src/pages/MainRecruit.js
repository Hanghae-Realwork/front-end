
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Card from "../components/CardRecruit";
import RecSelectCompo from "../components/RecSelectCompo"

const MainRecruit = () => {
  

  const navigate = useNavigate();

 


  // 배열 출력 테스트
  const Card_list = Array.from({ length: 24 }, (v, i) => i);
  console.log(Card_list);

  return (
    <>
        <TopCompoWrap>
            <RecSelectCompo /> 
        </TopCompoWrap>
      <CardContainerWrap>
        {Card_list === undefined ? null 
        :Card_list.map((list, idx) => {
          return (
              <Card key={idx} />
          );
        })}
      </CardContainerWrap>
    </>
  );
};


const CardContainerWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  max-width: 1400px;
  margin-top: 30px;

`

const TopCompoWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 135vh;
    max-width: 1400px;
    gap: 20px;
    border-bottom: 3px solid #685BC7;
`




export default MainRecruit;



{/* <SelectBoxButton onClick={() => {navigate(`/selectbox`)}}>보유스택</SelectBoxButton> */}
