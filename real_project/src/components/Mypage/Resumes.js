import React, { useEffect , useState  } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployAxios, loadSingleEmployAxios } from "../../redux/modules/postEmploy";
import { checkUserValidation } from "../../redux/modules/user";
import { useNavigation } from "react-day-picker";
import { loadApplyAxios } from "../../redux/modules/postProfile";

import TagDes from "../../components/Tag/TagCompoDes"
import TagDev from "../../components/Tag/TagCompoDev"

import letter from "../../image/letter.svg"

const Resumes = () => {

  const dispatch = useDispatch();
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const loginInfoName = useSelector((state) => state.user.userInfo.userId);
  const nickname_Info = useSelector((state) => state.user.userInfo.nickname);

  const data = useSelector((state) => state.postEmploy.resumes);

  //id와 userId 비교하여 버튼 보이게 하기
  // const modify = (loginInfoName === data[0]?.userId);

  const [modify, setModify] = useState(false);
  
  let start =""
  let end = ""
  let href = ""


  useEffect(() => {
   if (loginInfo === false) {
     dispatch(checkUserValidation());
   }}, [loginInfo]);
  
  useEffect(() => {
  dispatch(loadSingleEmployAxios(resumeId))
  }, [])

    useEffect(() => {
      if (loginInfoName && data) {
        if (loginInfoName === data[0]?.userId) {
         setModify(true)
       }
      }
      if (data) {
        start = data[0]?.start.replace("-", ".").replace("-", ".");
        end = data[0]?.end.replace("-", ".").replace("-", ".");

        href = data.length > 0 ? data[0].content2 : "";
      }
    }, [loginInfoName, data]);

    useEffect(() => {
      if (!(nickname_Info === undefined || nickname_Info === null)) {
          dispatch(loadApplyAxios(nickname_Info));
    }
    }, [nickname_Info]);
  
useState(data[0]?.role)
 //undefined일때 null 처리 나머지 return 

 if(!data[0]) return null 


 
  return (
    <>
      <MyPageResumeBackWrap>

        <PageAllWrap>
          <TopWrap>
            <LeftTopWrap>
              <PhotoCircle style={{backgroundImage: `url(${data[0].resumeImage})`}}></PhotoCircle>
            </LeftTopWrap>
            <RightTopWrap>
              <RightNameText>{data.length > 0 ? data[0].nickname : ""}</RightNameText>
              <RightRoleText>{data.length > 0 ? data[0].role : ""}</RightRoleText>
              <RightAdressText><img src={letter} style={{marginRight:"8px"}}/>{data.length > 0 ? data[0].userId : ""}</RightAdressText>
              <RightSelfText>{data.length > 0 ? data[0].content : ""}</RightSelfText>
            </RightTopWrap>
          </TopWrap>

          <MidWrap>
            <MidTxetWrap>
              <MidTitle>소개글</MidTitle>
              <MidSelfText>{data.length > 0 ? data[0].content3 : ""}</MidSelfText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>홈페이지</MidTitle>
              <MidContentText>
                <a href={data.length > 0 ? data[0].content2 : ""} target="_blank">
                  {data.length > 0 ? data[0].content2 : ""}
                </a></MidContentText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>프로젝트 가능 기간</MidTitle>
              <MidContentText>
                {data[0]?.start.replace("-", ".").replace("-", ".")}~
                {data[0]?.end.replace("-", ".").replace("-", ".")}
              </MidContentText>
            </MidTxetWrap>
            <MidTxetWrap>
              <MidTitle>{data.length > 0 ? data[0].nickname : ""}님의 보유 스킬</MidTitle>
              <MidTagWrap>
                {data.length > 0
                ? data[0].resumeskills.map((list, idx) => {
                    return <TagDev key={idx} skills={list} />;
                  })
                : ""}
              </MidTagWrap>
            </MidTxetWrap>
          </MidWrap>

          <BotWrap>
            <FixedBtn onClick={() => {navigate("/editprofile/" + `${data[0].resumeId}`);}}>수정하기</FixedBtn>
            <DelBtn onClick={() => {
              dispatch(deleteEmployAxios(resumeId));
              alert("❗️ 정말 삭제하시는 겁니까?")
              navigate("/mainemployment");}}>삭제하기</DelBtn>
          </BotWrap>
        </PageAllWrap>

      </MyPageResumeBackWrap>
    </>
  )
};

//대형 틀
const MyPageResumeBackWrap = styled.div`
  background: #FFFFFF;
  border: 1px solid #303032;
  border-radius: 4px;
  width: 792px;
  height: 877px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
`

//내부 틀
const TopWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 129px 30px 75px;
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
  margin-top: 5px;
  gap: 3px;
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

export default Resumes;
