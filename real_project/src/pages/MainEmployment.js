
import React, { useEffect,useState } from "react";
import styled from "styled-components";


import CardEmpol from "../components/CardEmpol";
import SelectCompo from "../components/SelectCompo"
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { loadEmployAxios } from "../redux/modules/postEmploy";

const MainEmployment = () => {
  const [updata, setUpdate] = useState();
  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.postEmploy.returnResumes);

  useEffect(() => {
    dispatch(loadEmployAxios());
  }, []);

  //수정중
  return (
    <>
      <SelectCompo />
      <CardBackGround>
        <CardContainerWrap>
          {resumes===undefined ? null : resumes.map((list, idx) => {
            return <CardEmpol key={idx} data={list} />;
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


export default MainEmployment