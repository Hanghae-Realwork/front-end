import React, {useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { loadRecruitAxios } from "../redux/modules/postRecruit";
import "../App.css"

import Card from "../components/CardRecruit";
import TagCompoDes from "../components/Tag/TagCompoDes";
import TagCompoDev from "../components/Tag/TagCompoDev";
import NavigationBarProject from "../components/NaviBarProject";


const MainRecruit = () => {

  const dispatch = useDispatch();
  const recruit = useSelector((state) => state.postRecruit.receiveRecruit);
  const SearchResult = useSelector((state) => state.search.SearchResult);


  
  useEffect(() => {
    dispatch(loadRecruitAxios());
  }, []);



  return (
      <>
        <NavigationBarProject />
        <CardBackGround className="MainBack">
          <CardContainerWrap style={{display: SearchResult.length === 0 ? "" : "none"}}>
            <SearchWrap>
            {recruit === undefined ? null : recruit.map((list, idx) => {
              return <Card key={idx} data={list} />;
                })}
            </SearchWrap>
          </CardContainerWrap>
          <CardContainerWrap style={{display: SearchResult.length === 0 ? "none" : ""}}>
            <SearchWrap>
            {recruit === undefined ? null : SearchResult.map((list, idx) => {
              return <Card key={idx} data={list} />;
                })}
            </SearchWrap>
          </CardContainerWrap>
        </CardBackGround>
      </>
  );
};

const CardContainerWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  height: 1000px;
  overflow-y: scroll;
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
  align-items: flex-start;
  /* border: 1px solid black; */
`

const SearchWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  gap: 24px;
  width: 1200px;
`

export default MainRecruit;