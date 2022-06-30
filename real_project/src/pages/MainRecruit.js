
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Card from "../components/CardRecruit";
import SelectCompo from "../components/SelectCompo"

const MainRecruit = () => {
  

  const navigate = useNavigate();

  // 배열 출력 테스트
  const Card_list = Array.from({ length: 12 }, (v, i) => i);
  console.log(Card_list);

  return (
    <>
    <SelectCompo />
      <CardContainerWrap>
        {Card_list.map((list, idx) => {
          return (
            <>
              <Card data={list} key={idx} />
            </>
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
  width: 1400px;
`


export default MainRecruit;
