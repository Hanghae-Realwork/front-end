import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployAxios, loadSingleEmployAxios} from "../redux/modules/postEmploy";
import { checkUserValidation } from "../redux/modules/user";
import { loadProjectsAxios, proposalUserProjectsAxios } from "../redux/modules/interview";
import TagDev from "../components/Tag/TagCompoDev"
import letter from "../image/letter.svg"

import resumeback from "../image/resumeBackground.svg"

import down from "../image/down.svg"
import astroman from "../image/astroman.svg";
import MiniProject from "../components/MiniProject";



function EmploymentProfile() {
  
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const loginInfoName = useSelector((state) => state.user.userInfo.userId);
  const data = useSelector((state) => state.postEmploy.resumes);
  const [projectId,setProjectId] =useState("")
  
  const myProject = useSelector((state) => state.interview.projects);


  let href = ""

  // 아코디언 뷰 state
  const [Arcodian, setArcodian] = useState(false);


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
   
  const deleteOnclick = () => {
    
    if (window.confirm("❗️정말 삭제하시는 건가요?")) {
      dispatch(deleteEmployAxios(resumeId))
      .then(() => navigate("/mainemployment"))
     } else {
       return false;
     }
  }

  const applyOnClick = () => {
      dispatch(proposalUserProjectsAxios(resumeId, projectId));
  }

 //undefined일때 null 처리 나머지 return 
 if(!data[0]) return null 



  return (
    <>
      <BackColorTestWrap>
        <BackGround>
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
                <MidTitle>자기소개</MidTitle>
                <MidSelfText>
                  {data.length > 0 ? data[0].content3 : ""}
                </MidSelfText>
              </MidTxetWrap>
              <MidTxetWrap>
                <MidTitle>포트폴리오 링크(URL)</MidTitle>
                <UrlWrap>
                <MidContentText>
                  <a href={data.length > 0 ? data[0].content2 : ""} target="_blank">
                    {data.length > 0 ? data[0].content2 : ""}</a>
                </MidContentText>
                </UrlWrap>
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
                  {data &&
                    data[0].skills.map((list, idx) => {
                      return <TagDev key={idx} skills={list} />;
                    })}
                </MidTagWrap>
              </MidTxetWrap>
            </MidWrap>
            

            {loginInfoName === data[0]?.userId ? (
              <>
              <BotHr />
              <BotWrap>
                <FixedBtn onClick={() => {navigate("/editprofile/" + `${data[0].resumeId}`);}}>
                  수정하기
                </FixedBtn>
                <DelBtn onClick={deleteOnclick}>삭제하기</DelBtn>
              </BotWrap>
              </>
            ) : (
              <>
              <BotHr />
              <TestWrap>
                <PropseText onClick={() => {setArcodian(!Arcodian);}}>
                  모집중인 프로젝트에 초대할까요?
                  <DownIcon src={down} style={{transform: Arcodian === false ? "rotate(0deg)" : "rotate(180deg)"}}/>
                </PropseText>
                
                <MiniProjectWrap style={{ display: Arcodian === true ? "" : "none" }}>
                <TestText><ColorSpan>Step.01_ </ColorSpan>모집중인 프로젝트를 선택해 주세요</TestText>
                  <CardWrap>
                  <MiniProject data={myProject} setProjectId={setProjectId} />
                  </CardWrap>
                <TestText><ColorSpan>Step.02_ </ColorSpan>인터뷰를 제안합니다! 좋은 팀원 만나실 거예요!</TestText>  
                  <SubmitButton style={projectId !== "" ? { background: "" } : { opacity: "0.5", pointerEvents: "none" }} onClick={applyOnClick}>
                  면접 제안하기 </SubmitButton>
                </MiniProjectWrap>
              </TestWrap>
              </>
            )}
          </PageAllWrap>
        </BackGround>
      </BackColorTestWrap>
    </>
  );
}



const TestWrap = styled.div`
  width: 989px;
  margin-top: 25px;
  border: 1px solid black;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: none; 
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 60px;
  /* z-index: 5; */
`

const PropseText = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`

const DownIcon = styled.img`
  margin-left: 10px;  
`

const BackGround = styled.div`
  width: 991px;
  height: 900px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 80px;
  background-image: url(${resumeback});
  background-position: center;
  background-size: contain;
  position: absolute;
  top: 30px;
  /* border: 5px solid black; */

`

const PageAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 994px;
  margin-top: 40px;
  /* border: 5px solid black; */
`

//내부 틀
const TopWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 129px 30px 75px;
  width: 588px;
  `

const MidWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 50px 50px 50px 75px;
  gap: 48px;
`

const BotWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 988.5px;
  background-color: white;
  /* height: 80px; */
  /* margin: 30px 240px 30px 240px; */
  gap: 10px;
  margin-top: 15px;
  border-top: none;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

//세부 틀
const LeftTopWrap = styled.div`
  width: 200px;
  height: 200px;
`

const RightTopWrap = styled.div`
  width: 344px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const MidTxetWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 8px;
  /* border: 1px solid black; */
  width: 800px;
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
  margin-top: 28px;
`

const MidTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`

const MidSelfText = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 580px;
  /* border: 1px solid black; */
  width: 800px;
  line-height: 21px;
  height: 55px;
  overflow: scroll;
`

const MidContentText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

const MidTagWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 8px;
  gap: 4px;
  /* border: 1px solid black; */
`

const FixedBtn = styled.button`
  padding: 12px 20px 12px 20px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 140px;
  margin-bottom: 30px;
  /* margin-bottom: 20px; */
  /* height: 40px; */
  /* margin-top: -30px; */
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
  margin-bottom: 30px;
  /* margin-top: -20px; */
  /* height: 40px; */
  border: 1px solid #303032;
  outline: none;
  cursor: pointer;
`

const TopHr = styled.hr`
  border: 0.5px dashed #8D8D8D;
  width: 990px;
`

const BotHr = styled.hr`
  border: 0.5px solid #8D8D8D;
  width: 990px;
`

const MiniProjectWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

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
  margin-top: 40px;
  margin-bottom: 40px;
`;

const BackColorTestWrap = styled.div`
  width: 100%;
  /* margin-bottom: 80px; */
  height: 185vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), 
  rgba(217, 217, 217, 0.1)), linear-gradient(93.14deg, rgba(174, 151, 227, 0.15) 0.24%, 
  rgba(119, 195, 231, 0.15) 34.73%, rgba(174, 151, 227, 0.15) 67.67%, rgba(119, 195, 231, 0.15) 95.47%);
  background-size: cover;
  `

  const UrlWrap = styled.div`
  /* border: 1px solid black; */
  line-height: 21px;
  overflow: hidden;
  width: 800px;
  height: 25px;
  /* width: 900px; */
  `

const CardWrap = styled.div`
  width: 800px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-bottom: 20px;
  height: 350px;
  overflow: scroll;
  margin-top: 30px;
  /* border: 1px solid black; */
`

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




export default EmploymentProfile