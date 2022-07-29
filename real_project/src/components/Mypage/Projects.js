import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {loadProjectsAxios} from "../../redux/modules/postProfile";

import CardRecruit from "../CardRecruit";
import EmptyMyProject from "./EmptyMyProject";
const Projects = () => {
    const dispatch = useDispatch();
    const nickname = useSelector((state) => state.user.userInfo.nickname);
    const data = useSelector((state) => state.postProfile.Myproject);

  useEffect(() => {
    if (nickname && nickname) {
      dispatch(loadProjectsAxios(nickname));
    }
  }, [loadProjectsAxios]);

  return (
    <>
      <MyPageResumeBackWrap>
        {data.length <= 0 ? (
          <EmptyMyProject />
        ) : (
          data &&
          data?.map((list, idx) => {
            return <CardRecruit key={idx} data={list} />;
          })
        )}
      </MyPageResumeBackWrap>
    </>
  );
};

//대형 틀
const MyPageResumeBackWrap = styled.div`
  border-radius: 4px;
  background-color: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

// const PageAllWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: column nowrap;
// `;

// //내부 틀
// const TopWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   margin: 30px 129px 30px 75px;
// `;

// const MidWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: flex-start;
//   margin: 50px 129px 50px 75px;
//   gap: 48px;
// `;

// const BotWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   margin: 30px 240px 30px 240px;
//   gap: 10px;
// `;

// //세부 틀
// const LeftTopWrap = styled.div`
//   /* border: 1px solid black; */
//   width: 200px;
//   height: 200px;
// `;

// const RightTopWrap = styled.div`
//   /* border: 1px solid black; */
//   width: 344px;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   align-items: flex-start;
// `;

// const MidTxetWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   align-content: flex-start;
// `;

// //상세 틀
// const PhotoCircle = styled.div`
//   border: 1px solid black;
//   width: 200px;
//   height: 200px;
//   border-radius: 100%;
// `;

// const RightNameText = styled.span`
//   font-size: 24px;
//   font-weight: 700;
// `;

// const RightRoleText = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   margin-top: 4px;
// `;

// const RightAdressText = styled.span`
//   font-size: 16px;
//   font-weight: 400;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 12px;
// `;

// const RightSelfText = styled.div`
//   font-size: 14px;
//   font-weight: 400;
//   height: 42px;
//   width: 344px;
//   /* border: 1px solid black; */
//   margin-top: 28px;
// `;

// const MidTitle = styled.span`
//   font-size: 16px;
//   font-weight: 700;
// `;

// const MidSelfText = styled.div`
//   /* border: 1px solid black; */
//   font-size: 14px;
//   font-weight: 400;
//   width: 580px;
// `;

// const MidContentText = styled.span`
//   font-size: 14px;
//   font-weight: 400;
// `;

// const MidTagWrap = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: flex-start;
//   margin-top: 5px;
//   gap: 3px;
// `;

// const FixedBtn = styled.button`
//   padding: 12px 20px 12px 20px;
//   background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
//   border-radius: 4px;
//   color: white;
//   font-size: 16px;
//   font-weight: 700;
//   width: 140px;
//   height: 40px;
//   border: none;
//   outline: none;
//   cursor: pointer;
// `;

// const DelBtn = styled.button`
//   padding: 12px 20px 12px 20px;
//   background: #fff;
//   border-radius: 4px;
//   font-size: 16px;
//   font-weight: 700;
//   width: 140px;
//   height: 40px;
//   border: 1px solid #303032;
//   outline: none;
//   cursor: pointer;
// `;

export default Projects;
