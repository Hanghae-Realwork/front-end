import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux"; 
import { checkUserValidation } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";

import astroman from "../image/astroman.svg"
import email from "../image/letter.svg"
import phone from "../image/phone.svg"
import Check from "../image/check.svg"


function MyPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const MyCard = Array.from({ length: 2 }, (v, i) => i);
    

  return (
    <>
         <MypageBackGround>
         <MyPageMainWrap>
            <MyPageLeftWrap>
                <MyPageProfileWrap>
                    <MyPagePhotoWrap></MyPagePhotoWrap>
                    <NameMyPage>
                        <NameText>사용자 이름</NameText>
                    </NameMyPage>
                </MyPageProfileWrap>
                <MypageTextWrap>
                        <Mycall>Email@Email.com</Mycall>
                </MypageTextWrap>
                <MyPagePasswordWrap>
                    <span>비밀번호 변경</span>
                    <span>회원탈퇴</span>
                </MyPagePasswordWrap>
            </MyPageLeftWrap>
            <MyPageRightWrap>
                <RightTopWrap>
                    <MyMenuButton>내 지원 현황</MyMenuButton>
                    <MyMenuButton>내 모집 현황</MyMenuButton>
                    <MyMenuButton>내 이력서</MyMenuButton>
                </RightTopWrap>
                <div>
                <RightContentWrap>
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
                                <ContentText>요약 된 콘텐츠 내용이 여기에 반영 됩니다</ContentText>
                                <ContentText>요약 된 콘텐츠 내용이 여기에 반영 됩니다</ContentText>
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
                                <InterviewTimeText>0000년 00월 00일</InterviewTimeText>
                                <InterviewTimeText>시간: 분 </InterviewTimeText>
                            </InterviewDateWrap>
                            </ButtonWrap>
                            <InterviewDateWrap>
                                <CodeText>면접 코드: 123-123</CodeText>
                            </InterviewDateWrap>
                        </InterviewButtonWrap>
                    </InterviewWrap>
                    <BeltWrap>
                        <CourseLabel>지원서 접수 <img src={Check} style={{marginLeft:"6px"}}></img></CourseLabel>
                        <ConectLine />
                        <CourseLabel>면접 완료 <img src={Check} style={{marginLeft:"6px"}}></img></CourseLabel>
                        <ConectLine />
                        <CourseLabel>매칭 완료 <img src={Check} style={{marginLeft:"6px"}}></img></CourseLabel>
                    </BeltWrap>
                </RightContentWrap>
                </div>
            </MyPageRightWrap>
        
        </MyPageMainWrap>
        </MypageBackGround>
    </>
  );
}



const MypageBackGround = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 730px;
    z-index: -10;
    background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
    margin-top: 107px;
    position: relative;
`

const MyPageMainWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 1200px;
    position: absolute;
    margin-top: -150px;
`

const MyPageLeftWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 306px;
    height: 710px;
    border-radius: 4px;
    background-color: white;
`

const MyPageRightWrap = styled.div`
    /* border: 1px solid black;  */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
`


// 좌측 프로필 CSS
const MyPageProfileWrap = styled.div`
    /* border: 1px solid black; */
    width:200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
`

const MyPagePhotoWrap = styled.div`
    border: 1px solid black;
    width: 160px;
    height: 160px;
    border-radius: 100%;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NameMyPage = styled.div`
    margin-top: 24px;
`

const NameText = styled.span`
    font-size: 24px;
    font-weight: 700;
`

const MypageTextWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`
const Mycall = styled.span`
    font-size: 16px;
    font-weight: 400;
`

const MyPagePasswordWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 178px;
`


// 우측 프로필 CSS
const RightTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 44px;
    margin-bottom: 48px;
`

const MyMenuButton = styled.button`
    padding: 8px 20px 8px 20px;
    width: 120px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border: none;
    outline: none;
    cursor: pointer;
    margin-bottom: 17px;
    color: white;
`

const RightCardWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const InterviewWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 450px;
`

const InterviewButtonWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    width: 384px;
    margin-top: 20px;
`

const InterviewButton = styled.button`
    padding: 8px 23px 8px 23px;
    background-color: #323230;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
`

const InterviewDateWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

const ButtonWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

const RightContentWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 390px;
    /* border: 1px solid black; */
`

const CardAllWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 384px;
    height: 307px;
    background-color: white;
    border-radius: 4px;
`

const TopWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    width: 350px;
    margin-top: 20px;
`

const UserText = styled.span`
    font-size: 12px;
    font-weight: 400;
`

const TitleWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    width: 350px;
    /* border: 1px solid black; */
    margin-top: 12px;
`

const TitleText = styled.span`
    font-size: 18px;
    font-weight: 700;
`

const ContentText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const RoleWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    /* border: 1px solid black; */
    margin-top: 10px;
    width: 350px;
`

const RoleText = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-top: 2px;
`

const ProjectLimit = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid black; */
    margin-top: 10px;
    width: 350px;
`

const DateLimitText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const DateText = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-left: 12px;
`

const CardTotalWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const InterviewTimeText = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 10px;
`

const CodeText = styled.span`
    font-size: 14px;
    font-weight: 500;
`

const BeltWrap =styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    /* border: 1px solid black; */
    width: 380px;
`

const CourseLabel = styled.label`
    padding: 8px 14px 8px 14px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 20px;
    background-color: white;
`

const ConectLine = styled.hr`
    width: 14px;
`

export default MyPage;
