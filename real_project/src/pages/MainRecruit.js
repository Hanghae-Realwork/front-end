import React, {useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRecruitAxios } from "../redux/modules/postRecruit";

import Card from "../components/CardRecruit";
import TagCompoDes from "../components/Tag/TagCompoDes";
import TagCompoDev from "../components/Tag/TagCompoDev";
import NavigationBarProject from "../components/NaviBarProject";


const MainRecruit = () => {

  const dispatch = useDispatch();
  const recruit = useSelector((state) => state.postRecruit.receiveRecruit);

  useEffect(() => {
    dispatch(loadRecruitAxios());
  }, []);

  return (
      <>
        <NavigationBarProject />
        <CardBackGround>
          <CardContainerWrap>
            {recruit === undefined ? null : recruit.map((list, idx) => {
              return <Card key={idx} data={list} />;
                })}
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
  width: 1200px;
  /* padding: 33px 50px 0px 50px; */
  /* border:1px solid black; */
  gap: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const CardBackGround = styled.div`
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(93.14deg, rgba(174, 151, 227, 0.15) 0.24%, rgba(119, 195, 231, 0.15) 34.73%, rgba(174, 151, 227, 0.15) 67.67%, rgba(119, 195, 231, 0.15) 95.47%);
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`

export default MainRecruit;