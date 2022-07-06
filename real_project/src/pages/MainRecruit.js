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
  const [card_list, setCard_list] = useState()
  // 배열 출력 테스트
  const dispatch = useDispatch();
  const loadRecruits = useSelector((state) => state);
  // Array.from({ length: 25 }, (v, i) => i);
  // console.log(loadRecruits.postRecruit.list.projects);
  const Card_list = loadRecruits.postRecruit.list.projects;
  console.log(Card_list)
  useEffect(() => {
    dispatch(loadRecruitsApi());
  }, [dispatch]

  );
  // console.log(list);

  return (
    <>
      <TopCompoWrap>
        <RecSelectCompo />
      </TopCompoWrap>

      <CardContainerWrap>
        {Card_list === undefined
          ? null
          : Card_list.map((list, projectId ) => {
              return <Card key={projectId }
               />;
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
`;

const TopCompoWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 135vh;
  max-width: 1400px;
  gap: 20px;
  /* border-bottom: 3px solid #685BC7; */
`;

export default MainRecruit;

{
  /* <SelectBoxButton onClick={() => {navigate(`/selectbox`)}}>보유스택</SelectBoxButton> */
}
