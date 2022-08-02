import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LoadDetailAxios } from "../redux/modules/postRecruit";

import { deleteRecruitAxios } from "../redux/modules/postRecruit";

import TagDev from "../components/Tag/TagCompoDev";

import MiniResume from "../components/MiniProfile";

import letter from "../image/letter.svg";
import astroman from "../image/astroman.svg";
import down from "../image/down.svg";
import { projectInterviewAxios } from "../redux/modules/interview";
import { loadResumesAxios } from "../redux/modules/interview";

function ReadProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const [Arcodian, setArcodian] = useState(false);

  const userName_Info = useSelector((state) => state.user.userInfo.userId);
  const profileImage = useSelector((state) => state.user.userInfo.profileImage);
  // 예약기능
  const [applicationId, setApplicationId] = useState("");
  const [resumeId, setResumeId] = useState("");
  const image = useSelector((state) => state.user);

  const data = useSelector((state) => state.interview.resumes);
  const Value = useSelector((state) => state.postRecruit.project);

  //예약 button 색깔처리
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  //buttonbackground
  useEffect(() => {
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      current.style.backgroundColor = "#EAF3FB";
    }
    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.backgroundColor = "transparent";
    }
    setPrevClick(currentClick);
  }, [currentClick]);

  useEffect(() => {
    dispatch(LoadDetailAxios(projectId));
  }, []);

  useEffect(() => {
    dispatch(loadResumesAxios());
  }, []);

  const deleteOnclick = async () => {
    if (window.confirm("정말 삭제하시는 건가요?")) {
      try {
        await dispatch(deleteRecruitAxios(projectId)).then((res) => {
          if (res) {
            alert("삭제되었습니다!🥸");
            navigate("/mainrecruit");
          } else {
            alert("페이지 오류입니다.🥸");
          }
        });
      } catch (err) {
        alert(err);
      }
    } else {
      return false;
    }
  };
  const applyOnClick = () => {
    if (applicationId === "" || resumeId === "") {
      alert("날짜와 소개서를 선택해주세요!");
    } else {
      dispatch(projectInterviewAxios(applicationId, resumeId));
    }
  };

  return (
    <>
      <AllWrap>
        <TopWrap>
          <TopTitle>{Value && Value[0]?.title}</TopTitle>
          <TopDateLimit>
            <>프로젝트 기간 : </>
            {Value && Value[0]?.start}~ {Value && Value[0]?.end}
          </TopDateLimit>
        </TopWrap>

        <DivideLine />

        <MainTextWrap>
          <MainText>
            <MainTextSpan>{Value && Value[0]?.details}</MainTextSpan>
          </MainText>
        </MainTextWrap>
        <FindRoleWrap>
          <div>
            <RoleTitle>찾는 직군</RoleTitle>
          </div>
          <div>
            <span>{Value && Value[0]?.role}</span>
          </div>
        </FindRoleWrap>
        <FindSkillWrap>
          <div>
            <RoleTitle>필요한 스킬 및 스텍</RoleTitle>
          </div>
          <TagGapWrap>
            {Value &&
              Value[0]?.skills.map((list, idx) => {
                return <TagDev key={idx} skills={list} />;
              })}
          </TagGapWrap>
        </FindSkillWrap>

        <DivideLine />

        <ProfileWrap>
          <ProfileTitleWrap>
            <RoleTitle>작성자 프로필</RoleTitle>
          </ProfileTitleWrap>

          <ProfileDetailWrap>
            {Value && Value[0]?.profileImage ? (
              <ProfilePhoto
                style={{
                  backgroundImage: `url(${Value && Value[0]?.profileImage})`,
                }}
              />
            ) : (
              <ProfilePhoto />
            )}

            <UserAllWrap>
              <UserNameWrap>
                <UserText>{Value && Value[0]?.nickname}</UserText>
              </UserNameWrap>
              <UserMailWrap>
                <LetterImg src={letter}></LetterImg>
                <UserMailAdress>{Value && Value[0]?.email}</UserMailAdress>
              </UserMailWrap>
            </UserAllWrap>
          </ProfileDetailWrap>
        </ProfileWrap>

        <DivideLine />

        <ButtonWrap>
          {Value && userName_Info === Value[0]?.email ? (
            <>
              {" "}
              <SubmitButton
                onClick={() => {
                  navigate("/findprojectstep2/" + `${Value[0].projectId}`);
                }}
              >
                수정하기
              </SubmitButton>
              <SubmitButton onClick={deleteOnclick}>삭제하기</SubmitButton>
            </>
          ) : (
            <ArcodianWrap>
              <ArcodianTextWrap
                onClick={() => {
                  setArcodian(!Arcodian);
                }}
              >
                <ArcodianText>이 프로젝트에 지원하기</ArcodianText>
                <DownIcon
                  src={down}
                  style={{
                    transform:
                      Arcodian === false ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              </ArcodianTextWrap>

              

              <MiniResumeWrap style={{ display: Arcodian === true ? "" : "none" }}>
                 <StepOneWrap>
                    <TestText><ColorSpan>Step.01 _ </ColorSpan>자기소개글을 선택해 주세요</TestText>

                      {Value && userName_Info !== Value[0]?.email ? (
                        <MiniResume data={data} setResumeId={setResumeId} />
                      ) : (
                        ""
                      )}
                </StepOneWrap>   
                <DateWrap>
                  <ViewDateWrap>
                    <TestText><ColorSpan>Step.02_ </ColorSpan>인터뷰 일정을 선택해 주세요</TestText>
                    <InputMainTextWrap>
                      <EditDateWrap>
                        {Value &&
                          Value[0]?.applications.map((list, idx) => {
                            return (
                              <EditLabel
                                style={
                                  list.available
                                    ? { backgroundColor: "" }
                                    : {
                                        backgroundColor: "#d9d9d9",
                                        pointerEvents: "none",
                                      }
                                }
                                event={list}
                                key={list.applicationId}
                                id={idx}
                                onClick={(e) => {
                                  setApplicationId(list.applicationId);
                                  setCurrentClick(e.target.id);
                                }}
                              >
                                {list.schedule.slice(0, 16)}
                              </EditLabel>
                            );
                          })}
                      </EditDateWrap>
                    </InputMainTextWrap>
                  </ViewDateWrap>
                </DateWrap>

                <BtnWrap>
                <TestText><ColorSpan>Step.03_ </ColorSpan>프로젝트에 지원합니다! 좋은 결과 기대할게요!</TestText>
                  <SubmitButton
                    style={
                      applicationId !== "" && resumeId !== ""
                        ? {}
                        : { opacity: "0.5", pointerEvents: "none" }
                    }
                    onClick={applyOnClick}
                  >
                    지원하기
                  </SubmitButton>
                </BtnWrap>
              </MiniResumeWrap>
            </ArcodianWrap>
          )}
        </ButtonWrap>
      </AllWrap>
    </>
  );
}


const AllWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const TopWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 55px;
  margin-bottom: 24px;
  gap: 12px;
`;

const MainTextWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const FindRoleWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 77px;
  gap: 12px;
`;

const FindSkillWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 12px;
`;

const DateWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 30px;
  gap: 12px;
`;

const ProfileWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const ButtonWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 80px;
  gap: 20px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
  border-radius: 4px;
  color: white;
  padding: 10px 45px 10px 45px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
`;

const DivideLine = styled.hr`
  width: 1200px;
  border: 0.5px solid #d9d9d9;
`;

const TopTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const TopDateLimit = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const MainText = styled.div`
  width: 1200px;
`;

const MainTextSpan = styled.pre`
  font-size: 16px;
  font-weight: 400;
`;

const RoleTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const ProfileDetailWrap = styled.div`
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ProfilePhoto = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${astroman});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

const UserNameWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const UserMailWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const UserAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

const UserText = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
`;
const UserMailAdress = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const LetterImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const ProfileTitleWrap = styled.div`
  margin-bottom: 15px;
`;

const MiniResumeWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 15px;
`;

const ViewDateWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

const TagGapWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const ArcodianWrap = styled.div`
  display: flex;
  width: 1200px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const ArcodianTextWrap = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const DownIcon = styled.img`
  margin-left: 10px;
`;

const ArcodianText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const InputMainTextWrap = styled.div`
  margin: 20px 0px 25px 0px;
  width: 1200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const EditDateWrap = styled.div`
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`;

const EditLabel = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  width: 170px;
  font-weight: 400;
  border: 0.5px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px 12px 10px 12px;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TestText = styled.span`
  font-size: 19px;
  font-weight: 700;
  line-height: 21px;
  margin-top: 30px;
`;

const ColorSpan = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 21px;
  color: #d9d9d9;
`

const StepOneWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`


export default ReadProject;
