import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import {loadResumesAxios} from "../../redux/modules/postProfile";

import TagDes from "../../components/Tag/TagCompoDes"
import TagDev from "../../components/Tag/TagCompoDev"
import CardEmpol from "../CardEmpol";

import letter from "../../image/letter.svg"
import EmptyMyCard from "../Mypage/EmptyMyCard";


const Resumes = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  const data = useSelector((state) => state.postProfile.Myresumes);

  useEffect(() => {
    if (nickname && nickname) {
       dispatch(loadResumesAxios(nickname));
    }
},[loadResumesAxios])
   return (
     <>
       <MyPageResumeBackWrap>
         {data && data.length <= 0 ? (
           <EmptyMyCard />
         ) : (
           data &&
           data?.map((list, idx) => {
             return <CardEmpol key={idx} data={list} />;
           })
         )}
       </MyPageResumeBackWrap>
     </>
   );
};

//대형 틀
const MyPageResumeBackWrap = styled.div`
  border-radius: 4px;
  width: 792px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export default Resumes;
