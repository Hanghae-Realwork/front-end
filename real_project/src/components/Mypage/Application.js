import React, { useDebugValue, useEffect } from "react"
import styled from "styled-components";
import { useSelector } from "react-redux";
import Check from "../../image/check.svg"
import { useDispatch } from "react-redux";
import { loadApplyAxios } from "../../redux/modules/postProfile";

const Application = () => {
    // const userId =useSelector((state)=>state)
    const dispatch = useDispatch();
const userInfo_nickname = useSelector((state) => state.user.userInfo);
 const data = useSelector((state)=>state)
    const Card_list = Array.from({ length: 2 }, (v, i) => i);
  

    useEffect(() => {
        // if (userInfo_nickname >= 0 ? ) {
        //   dispatch(loadApplyAxios(nickname));
        // }
     
    },[])
    return (
      <RightMapingWrap>
        {Card_list === undefined
          ? null
          : Card_list.map((list, idx) => {
              return (
                  <RightContentWrap key={idx }>
                  <RightCardWrap>
                    <CardAllWrap>
                      <CardTotalWrap>
                        <TopWrap>
                          <UserText>사용자 이름</UserText>
                          <UserText>작성 시간</UserText>
                        </TopWrap>
                        <TitleWrap>
                          <TitleText>게시물 제목이 들어갑니다</TitleText>
                        </TitleWrap>
                        <TitleWrap>
                          <ContentText>
                            요약 된 콘텐츠 내용이 여기에 반영 됩니다
                          </ContentText>
                          <ContentText>
                            요약 된 콘텐츠 내용이 여기에 반영 됩니다
                          </ContentText>
                        </TitleWrap>
                        <RoleWrap>
                          <UserText>구하는 직군</UserText>
                          <RoleText>백엔드 엔지니어</RoleText>
                        </RoleWrap>
                        <RoleWrap>
                          <UserText>보유 기술</UserText>
                          <RoleText>백엔드 엔지니어</RoleText>
                        </RoleWrap>
                        <ProjectLimit>
                          <DateLimitText>프로젝트 러닝 기간 :</DateLimitText>
                          <DateText>2222.02.22 ~ 2222.03.22</DateText>
                        </ProjectLimit>
                      </CardTotalWrap>
                    </CardAllWrap>
                  </RightCardWrap>
                  <InterviewWrap>
                    <InterviewButtonWrap>
                      <ButtonWrap>
                        <InterviewButton>면접 보기</InterviewButton>
                        <InterviewDateWrap>
                          <InterviewTimeText>
                            0000년 00월 00일
                          </InterviewTimeText>
                          <InterviewTimeText>시간: 분 </InterviewTimeText>
                        </InterviewDateWrap>
                      </ButtonWrap>
                      <InterviewDateWrap>
                        <CodeText>면접 코드: 123-123</CodeText>
                      </InterviewDateWrap>
                    </InterviewButtonWrap>
                  </InterviewWrap>
                  <BeltWrap>
                    <CourseLabel>
                      지원서 접수{" "}
                      <img src={Check} style={{ marginLeft: "6px" }}></img>
                    </CourseLabel>
                    <ConectLine />
                    <CourseLabel>
                      면접 완료{" "}
                      <img src={Check} style={{ marginLeft: "6px" }}></img>
                    </CourseLabel>
                    <ConectLine />
                    <CourseLabel>
                      매칭 완료{" "}
                      <img src={Check} style={{ marginLeft: "6px" }}></img>
                    </CourseLabel>
                  </BeltWrap>
                </RightContentWrap>
              );
            })}
      </RightMapingWrap>
    );
}

const RightMapingWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RightCardWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
 
`;

const InterviewWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 450px;
`;

const InterviewButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 384px;
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
  margin-top: 15px;
`;

const RightContentWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  width: 390px;
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