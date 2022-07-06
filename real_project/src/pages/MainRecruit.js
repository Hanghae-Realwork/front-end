import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loadRecruitsApi } from "../redux/modules/postRecruit";

import Card from "../components/CardRecruit";

import RecSelectCompo from "../components/RecSelectCompo";


const MainRecruit = (list) => {
  const navigate = useNavigate();
  // const [card_list, setCard_list] = useState()
  // 배열 출력 테스트
  const dispatch = useDispatch();
  const loadRecruits = useSelector((state) => state);
  // Array.from({ length: 25 }, (v, i) => i);
  console.log(loadRecruits.postRecruit.list.projects);
  useEffect(() => {
   
    dispatch(loadRecruitsApi());
  }, [dispatch]
  );
 
  // console.log(list);

  return (
    <>
      <RecSelectCompo />
      <CardBackGround>
        <CardContainerWrap>
        <Card />
        </CardContainerWrap>
      </CardBackGround>
    </>
  );
};

const CardContainerWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  padding: 33px 50px 0px 50px;
`

const CardBackGround = styled.div`
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(93.14deg, rgba(174, 151, 227, 0.15) 0.24%, rgba(119, 195, 231, 0.15) 34.73%, rgba(174, 151, 227, 0.15) 67.67%, rgba(119, 195, 231, 0.15) 95.47%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default MainRecruit;

{
  /* <SelectBoxButton onClick={() => {navigate(`/selectbox`)}}>보유스택</SelectBoxButton> */
}
