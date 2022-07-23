import React, { useDebugValue, useEffect, useState } from "react"
import Moment from "react-moment"
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadApplyAxios } from "../../redux/modules/postProfile";

import TagCompoApp from "./TagCompoApp";
import EmptyCard from "./EmptyCard";

import Check from "../../image/check.svg"


const Application = () => {

    // const userId =useSelector((state)=>state)
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);
    const nickname_Info = useSelector((state) => state.user.userInfo.nickname);

    const [_nickname,setNickname]=useState('')
    const data = useSelector((state) => state.postProfile.Applications);


  

    useEffect(() => {
        if (!(nickname_Info === undefined || nickname_Info === null)) {
            dispatch(loadApplyAxios(nickname_Info));
      }
    }, [nickname_Info]);
 
  return (
 
      <RightMapingWrap>
        {
         (data.length !== 0) && data.map((list, idx) => {
            //작성시간 함수
            const nowTime = Date.now();
            const createdAt = list.createdAt;
            const startTime = new Date(createdAt);
            const thenHours = Math.floor((nowTime - startTime) / 3600000);
            const DisplayCreatedAt = () => {
              if (parseInt(startTime - nowTime) > -86400000) {
                return thenHours + "시간전";
              }
              if (parseInt(startTime - nowTime) < -86400000) {
                return <Moment format="M월 D일">{startTime}</Moment>;
              }
            };

            return (
              <RightContentWrap key={idx}>
                <RightCardWrap>
                  <CardAllWrap>
                    <CardTotalWrap>
                      <TopWrap>
                        <UserText>{list.nickname}</UserText>
                        <UserText>
                          <DisplayCreatedAt />
                        </UserText>
                      </TopWrap>
                      <TitleWrap>
                        <TitleText>{list && list.title}</TitleText>
                      </TitleWrap>
                      <TitleWrap>
                        <ContentText>{list && list.details}</ContentText>
                      </TitleWrap>
                      <RoleWrap>
                        <UserText>구하는 직군</UserText>
                        <RoleText>{list && list.role}</RoleText>
                      </RoleWrap>
                      <RoleWrap>
                        <UserText>보유 기술</UserText>
                        <RoleText>
                          {list &&
                            list.ProjectSkills.map((list, idx) => {
                              return <TagCompoApp key={idx} skills={list} />;
                            })}
                        </RoleText>
                      </RoleWrap>
                      <ProjectLimit>
                        <DateLimitText>프로젝트 러닝 기간 :</DateLimitText>
                        <DateText>
                          {list &&
                            list.start.replace("-", ".").replace("-", ".")}{" "}
                          ~{" "}
                          {list && list.end.replace("-", ".").replace("-", ".")}
                        </DateText>
                      </ProjectLimit>
                    </CardTotalWrap>
                  </CardAllWrap>
                </RightCardWrap>
                {list &&
                  list.applications.map((list, idx) => {
                    return (
                      <div key={idx}>
                        {" "}
                        <InterviewButtonWrap>
                          <ButtonWrap>
                            <InterviewButton>면접 보기</InterviewButton>
                            <InterviewDateWrap>
                              <InterviewTimeText>
                                {data && list.schedule.slice(0, 4)}년{" "}
                                {data && list.schedule.slice(5, 7)}월{" "}
                                {data && list.schedule.slice(8, 10)}일
                              </InterviewTimeText>
                              <InterviewTimeText>
                                {data && list.schedule.slice(11, 13)}시{" "}
                                {data && list.schedule.slice(14, 16)}분{" "}
                              </InterviewTimeText>
                            </InterviewDateWrap>
                          </ButtonWrap>
                          <InterviewDateWrap>
                            <CodeText>
                              면접 코드: {data && list.interviewCode}
                            </CodeText>
                          </InterviewDateWrap>
                        </InterviewButtonWrap>
                        <BeltWrap>
                          <CourseLabel>
                            지원서 접수{" "}
                            <img
                              src={Check}
                              style={{ marginLeft: "6px" }}
                            ></img>
                          </CourseLabel>
                          <ConectLine />
                          <CourseLabel>
                            면접 완료{" "}
                            <img
                              src={Check}
                              style={{ marginLeft: "6px" }}
                            ></img>
                          </CourseLabel>
                          <ConectLine />
                          <CourseLabel>
                            매칭 완료{" "}
                            <img
                              src={Check}
                              style={{ marginLeft: "6px" }}
                            ></img>
                          </CourseLabel>
                        </BeltWrap>
                      </div>
                    );
                  })}
              </RightContentWrap>
            );
          })}
      </RightMapingWrap>

  );
}
 {
   /* <EmptyCard /> */
 }

const RightMapingWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  width: 820px;

`;

const RightCardWrap = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const InterviewButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  margin-top: 15px;
  /* border: 1px solid black; */
`;

const InterviewButton = styled.button`
  padding: 8px 23px 8px 23px;
  background-color: #323230;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
`;

const InterviewDateWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const RightContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: 390px;
  margin-bottom: 40px;
`;

const CardAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 384px;
  height: 307px;
  background-color: white;
  border-radius: 4px;
`;

const TopWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  width: 350px;
  margin-top: 20px;
`;

const UserText = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  margin-top: 15px;
`;

const TitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ContentText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const RoleWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid black; */
  margin-top: 20px;
  width: 350px;
`;

const RoleText = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-top: 2px;
`;

const ProjectLimit = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  margin-top: 10px;
  width: 350px;
`;

const DateLimitText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const DateText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
`;

const CardTotalWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const InterviewTimeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 10px;
`;

const CodeText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const BeltWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  /* border: 1px solid black; */
  width: 380px;
`;

const CourseLabel = styled.label`
  padding: 8px 14px 8px 14px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: white;
`;

const ConectLine = styled.hr`
  width: 14px;
`;
export default Application;