import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployAxios, loadSingleEmployAxios} from "../redux/modules/postEmploy";
import { checkUserValidation } from "../redux/modules/user";
import { loadProjectsAxios } from "../redux/modules/interview";
import TagDev from "../components/Tag/TagCompoDev"
import letter from "../image/letter.svg"

import resumeback from "../image/resumeBackground.svg"
import flip from "../image/flip.svg"
import down from "../image/down.svg"
import astroman from "../image/astroman.svg";
import MiniResume from "../components/MiniProfile";
import MiniProject from "../components/MiniProject";

function EmploymentProfile() {
  
  
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const loginInfoName = useSelector((state) => state.user.userInfo.userId);
  const data = useSelector((state) => state.postEmploy.resumes);

  const myProject = useSelector((state) => state.interview.projects);
  console.log(myProject)
  let href = ""
  useEffect(() => {
   if (loginInfo === false) {
     dispatch(checkUserValidation());
   }}, [loginInfo]);
  
  useEffect(() => {
  dispatch(loadSingleEmployAxios(resumeId))
  }, [])
  //프로젝트 카드
  useEffect(() => {
    dispatch(loadProjectsAxios())
  }, [])

    useEffect(() => {
      if (data) {
        href = data.length > 0 ? data[0].content2 : "";
      }
    }, [loginInfoName, data]);
  
  
 //undefined일때 null 처리 나머지 return 
 if(!data[0]) return null 
  return (
    <>
        <BackGround>
          <PageFlipWrap><img src={flip}/></PageFlipWrap>

          <PageAllWrap>
            <TopWrap>
              <LeftTopWrap>
                {data[0].resumeImage ? (
                  <PhotoCircle
                    style={{ backgroundImage: `url(${data[0].resumeImage})` }}
                  ></PhotoCircle>
                ) : (
                  <PhotoCircle></PhotoCircle>
                )}
              </LeftTopWrap>
              <RightTopWrap>
                <RightNameText>
                  {data.length > 0 ? data[0].nickname : ""}
                </RightNameText>
                <RightRoleText>
                  {data.length > 0 ? data[0].role : ""}
                </RightRoleText>
                <RightAdressText>
                  <img src={letter} style={{ marginRight: "8px" }} />
                  {data.length > 0 ? data[0].userId : ""}
                </RightAdressText>
                <RightSelfText>
                  {data.length > 0 ? data[0].content : ""}
                </RightSelfText>
              </RightTopWrap>
            </TopWrap>

            <TopHr />

            <MidWrap>
              <MidTxetWrap>
                <MidTitle>소개글</MidTitle>
                <MidSelfText>
                  {data.length > 0 ? data[0].content3 : ""}
                </MidSelfText>
              </MidTxetWrap>
              <MidTxetWrap>
                <MidTitle>홈페이지</MidTitle>
                <MidContentText>
                  <a href={data.length > 0 ? data[0].content2 : ""}
                    target="_blank">
                    {data.length > 0 ? data[0].content2 : ""}
                  </a>
                </MidContentText>
              </MidTxetWrap>
              <MidTxetWrap>
                <MidTitle>프로젝트 가능 기간</MidTitle>
                <MidContentText>
                  {data[0]?.start.replace("-", ".").replace("-", ".")}~
                  {data[0]?.end.replace("-", ".").replace("-", ".")}
                </MidContentText>
              </MidTxetWrap>
              <MidTxetWrap>
                <MidTitle>
                  {data.length > 0 ? data[0].nickname : ""}님의 보유 스킬
                </MidTitle>
                <MidTagWrap>
                  {data.length > 0
                    ? data[0].skill.map((list, idx) => {
                        return <TagDev key={idx} skills={list} />;
                      })
                    : ""}
                </MidTagWrap>
              </MidTxetWrap>
            </MidWrap>

            <BotHr />


              {loginInfoName === data[0]?.userId ? (
              <BotWrap>
                <FixedBtn
                  onClick={() => {navigate("/editprofile/" + `${data[0].resumeId}`);}}>
                  수정하기
                </FixedBtn>

                <DelBtn
                  onClick={() => {dispatch(deleteEmployAxios(resumeId));
                    alert("❗️ 정말 삭제하시는 겁니까?"); navigate("/mainemployment");}}>
                  삭제하기
                </DelBtn>
              </BotWrap>
          ) : (
              
              <TestWrap>
                <PropseText>우주선에 태우고 싶으신가요?<DownIcon src={down}/></PropseText>
                <MiniProject data={myProject} />
              </TestWrap>
              )}

          </PageAllWrap>
        </BackGround>

    </>
  );
}



const TestWrap = styled.div`
  width: 994px;
  margin-top: 25px;
  /* margin-bottom: 30px; */
  border: 1px solid black;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: none; 
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const PropseText = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const DownIcon = styled.img`
  margin-left: 10px;
`


const BackGroundOnlyWrap = styled.div`
/* border: 1px solid black; */
  background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const BackGround = styled.div`
  width: 996px;
  /* height: 904px; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  background-image: url(${resumeback});

`

const PageFlipWrap = styled.div`
  /* border: 1px solid black; */
  width: 1000px;
  height: 37px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const PageAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 994px;
`

//내부 틀
const TopWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 129px 30px 75px;
  width: 588px;
  `

const MidWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 129px 50px 75px;
  gap: 48px;
`

const BotWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 240px 30px 240px;
  gap: 10px;
`

//세부 틀
const LeftTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 200px;
  height: 200px;
`

const RightTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 344px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const MidTxetWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;

`


//상세 틀
const PhotoCircle = styled.div`
  border: 1px solid black;
  width: 200px;
  height:200px;
  border-radius: 100%;
  background-image: url(${astroman});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const RightNameText = styled.span`
  font-size: 24px;
  font-weight: 700;
`

const RightRoleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 4px;
`

const RightAdressText = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

const RightSelfText = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  width: 344px;
  /* border: 1px solid black; */
  margin-top: 28px;
`

const MidTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`

const MidSelfText = styled.div`
  /* border: 1px solid black; */
  font-size: 14px;
  font-weight: 400;
  width: 580px;
`

const MidContentText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MidTagWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`

const FixedBtn = styled.button`
  padding: 12px 20px 12px 20px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 140px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
`

const DelBtn = styled.button`
  padding: 12px 20px 12px 20px;
  background: #FFF;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  width: 140px;
  height: 40px;
  border: 1px solid #303032;
  outline: none;
  cursor: pointer;
`
const TopHr = styled.hr`
  border: 0.5px dashed #8D8D8D;
  width: 994px;
`

const BotHr = styled.hr`
  border: 0.5px solid #8D8D8D;
  width: 994px;
`

// const ProfilePhoto = styled.div`
//   width: 100px;
//   height: 100px;
//   background-image: url(${});
//   background-position: center;
//   background-size: cover;
//   /* border: 1px solid black; */
// `;
export default EmploymentProfile