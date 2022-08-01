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


export default Projects;
