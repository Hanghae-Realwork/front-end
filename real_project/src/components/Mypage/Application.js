import React, { useDebugValue, useEffect, useState } from "react"
import Moment from "react-moment"
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loadApplyAxios } from "../../redux/modules/postProfile";

import TagCompoApp from "./TagCompoApp";
import EmptyCard from "./EmptyCard";
import ApplyTag from "../../components/Tag/ApplyTag"

const Application = () => {
  
  const dispatch = useDispatch();

  const [_nickname, setNickname] = useState('')

  const nickname_Info = useSelector((state) => state.user.userInfo.nickname);
  const data = useSelector((state) => state.postProfile.Applications);
     
    useEffect(() => {
      if (!(nickname_Info === undefined || nickname_Info === null)) {
        dispatch(loadApplyAxios(nickname_Info));
      }
    }, [nickname_Info, loadApplyAxios]);
 
  return (
    <RightMapingWrap>
      {data.length > 0 ? (
        data.length !== 0 &&
        data.map((list, idx) => {
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
                    <DetailWrap>
                      <ContentText>{list && list.details}</ContentText>
                    </DetailWrap>
                    <RoleWrap>
                      <UserText>구하는 직군</UserText>
                      <RoleText>{list && list.role}</RoleText>
                    </RoleWrap>
                    <RoleWrap>
                      <UserText>보유 기술</UserText>
                      <RoleTextWrap>
                        {list &&
                          list.ProjectSkills.map((list, idx) => {
                            return <TagCompoApp key={idx} skills={list} />;
                          })}
                      </RoleTextWrap>
                    </RoleWrap>
                    <ProjectLimit>
                      <DateLimitText>프로젝트 러닝 기간 :</DateLimitText>
                      <DateText>
                        {list && list.start.replace("-", ".").replace("-", ".")}{" "}
                        ~ {list && list.end.replace("-", ".").replace("-", ".")}
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
                          <InterviewButton
                            onClick={() => {
                              window.open(`https://rendev.click/`);
                            }}
                          >
                            인터뷰 보기
                          </InterviewButton>
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
                            인터뷰 코드: {data && list.interviewCode}
                          </CodeText>
                        </InterviewDateWrap>
                      </InterviewButtonWrap>
                      <ApplyTag list={list} />
                    </div>
                  );
                })}
            </RightContentWrap>

          );
        })
      ) : (
        <EmptyCard />
      )}
    </RightMapingWrap>
  );
}

//  


const RightMapingWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
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
  width: 385px;
  margin-top: 20px;
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
`;

const RightContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
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
  width: 350px;
  margin-top: 20px;
`;

const UserText = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 350px;
  margin-top: 15px;
  overflow: hidden;
  height: 20px;
  line-height: 21px;
`;

const DetailWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 350px;
  height: 40px;
  margin-top: 15px;
  overflow: hidden;
  line-height: 21px;
`


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
  margin-top: 7px;
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

const RoleTextWrap = styled.div`
  margin-top: 4px;    
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  width: 350px;
  height: 33px;
  line-height: 21px;
`



export default Application;