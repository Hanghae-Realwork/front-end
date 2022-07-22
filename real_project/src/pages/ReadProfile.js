import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployAxios, loadSingleEmployAxios } from "../redux/modules/postEmploy";
import { checkUserValidation } from "../redux/modules/user";

import TagDev from "../components/Tag/TagCompoDev"
import letter from "../image/letter.svg"



function EmploymentProfile() {
  
  
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const loginInfoName = useSelector((state) => state.user.userInfo.userId);
  const data = useSelector((state) => state.postEmploy.resumes);


  let href = ""
  useEffect(() => {
   if (loginInfo === false) {
     dispatch(checkUserValidation());
   }}, [loginInfo]);
  
  useEffect(() => {
  dispatch(loadSingleEmployAxios(resumeId))
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

      <BackGroundOnlyWrap>
        {/* <HoldWrap> */}
        {/* <BackGround1/> */}
        {/* <BackGround2/> */}
        <BackGround3>
          <PageAllWrap>
            <TopWrap>
              <LeftTopWrap>
                {data[0].resumeImage ? <PhotoCircle
                  style={{ backgroundImage: `url(${data[0].resumeImage})` }}
                ></PhotoCircle> : "사진이 들어가야해요 ! "}
                
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
                  <a
                    href={data.length > 0 ? data[0].content2 : ""}
                    target="_blank"
                  >
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

            <BotWrap>
              {loginInfoName === data[0]?.userId ? (
                <FixedBtn
                  onClick={() => {
                    navigate("/editprofile/" + `${data[0].resumeId}`);
                  }}
                >
                  수정하기
                </FixedBtn>
              ) : (
                <></>
              )}
              {loginInfoName === data[0]?.userId ? (
                <DelBtn
                  onClick={() => {
                    dispatch(deleteEmployAxios(resumeId));
                    alert("❗️ 정말 삭제하시는 겁니까?");
                    navigate("/mainemployment");
                  }}
                >
                  삭제하기
                </DelBtn>
              ) : (
                <></>
              )}
            </BotWrap>
          </PageAllWrap>
        </BackGround3>
        {/* </HoldWrap> */}
      </BackGroundOnlyWrap>
    </>
  );
}




const BackGroundOnlyWrap = styled.div`
border: 1px solid black;
  background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -4;
  background-size: cover;

`

const HoldWrap = styled.div`
  /* border: 1px solid black; */
  /* width: 1000px; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BackGround1 = styled.div`
  border: 1px solid black;
  width: 996px;
  height: 906px;
  position: relative;
  z-index: -5;
  top: 40px;
  left: 50px;
  border-radius: 4px;
`

const BackGround2 = styled.div`
  border: 1px solid black;
  width: 996px;
  height: 906px;
  position: absolute;
  z-index: -2;
  top: 65px;
  left: 20px;
  background: #F3F3F3;
  border: 1px solid #303032;
  border-radius: 4px;
`

const BackGround3 = styled.div`
  border: 1px solid black;
  width: 996px;
  height: 906px;
  /* position: absolute;
  z-index: -1;
  top: 100px;
  left: -15px; */
  background-color: white;
  border: 1px solid #303032;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin-bottom: 80px; */
`

const PageAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
  width: 996px;
`

const BotHr = styled.hr`
  border: 0.5px solid #8D8D8D;
  width: 996px;
`

export default EmploymentProfile