import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadEmployAxios } from "../redux/modules/postEmploy";

import CardEmpol from "../components/CardEmpol";
import TagCompoDes from "../components/Tag/TagCompoDes";
import TagCompoDev from "../components/Tag/TagCompoDev";
import NavigationBarResume from "../components/NaviBarResume";

const MainEmployment = () => {
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.postEmploy.returnResumes);
  const ResumeResult = useSelector((state) => state.search.SearchResume);
  

  useEffect(() => {
    dispatch(loadEmployAxios());
  }, [loadEmployAxios]);

  //수정중
  return (
    <>
      <NavigationBarResume />
        <CardBackGround className="MainBack">
          <CardContainerWrap style={{display: ResumeResult.length === 0 ? "" : "none"}}>
          <SearchWrap>
              {resumes === undefined ? null : resumes.map((list, idx) => {
                return <CardEmpol key={idx} data={list} />;
                  })}
          </SearchWrap>
        </CardContainerWrap>
          <CardContainerWrap style={{display: ResumeResult.length === 0 ? "none" : ""}}>
            <SearchWrap>
            {resumes === undefined ? null : ResumeResult.map((list, idx) => {
              return <CardEmpol key={idx} data={list} />;
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
  gap: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
  /* border: 1px solid black; */
`

const CardBackGround = styled.div`
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)), linear-gradient(93.14deg, rgba(174, 151, 227, 0.15) 0.24%, rgba(119, 195, 231, 0.15) 34.73%, rgba(174, 151, 227, 0.15) 67.67%, rgba(119, 195, 231, 0.15) 95.47%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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


export default MainEmployment