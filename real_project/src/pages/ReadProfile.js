import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { deleteEmployAxios, loadSingleEmployAxios } from "../redux/modules/postEmploy";
import { checkUserValidation } from "../redux/modules/user";
import { useNavigation } from "react-day-picker";

import TagDes from "../components/Tag/TagCompoDes"
import TagDev from "../components/Tag/TagCompoDev"



function EmploymentProfile() {
  const dispatch = useDispatch();
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
 
  const loginInfoName = useSelector((state) => state.user.userInfo.userId);

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
  
useState(data[0]?.role)
 //undefined일때 null 처리 나머지 return 

 if(!data[0]) return null 
  return (
    <>
      <EmploProfile>
        <NameFieldWrap>
          <ProfileTopWrap>
            <ProfileCircleWrap>
              <ProfileCircle
                style={{backgroundImage: `url(${data[0].resumeImage})`}}></ProfileCircle>
            </ProfileCircleWrap>
            <NameWrap>
              <NameTitle>
                <TitleName>{data.length > 0 ? data[0].nickname : ""}</TitleName>
              </NameTitle>
              <NameTitle>
                <SubName>{data.length > 0 ? data[0].role : ""}</SubName>
              </NameTitle>
              <NameTitle>
                <TextField>{data.length > 0 ? data[0].userId : ""}</TextField>
              </NameTitle>
              <NameTitle>
                <TextField>{data.length > 0 ? data[0].content : ""}</TextField>
              </NameTitle>
            </NameWrap>
          </ProfileTopWrap>
          <TitleTextWrap>
            <SubName>소개글</SubName>
            <SelfText>{data.length > 0 ? data[0].content3 : ""}</SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>홈페이지</SubName>
            <SelfText>
              <a href={data.length > 0 ? data[0].content2 : ""} target="_blank">
                {data.length > 0 ? data[0].content2 : ""}
              </a>
            </SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <SubName>프로젝트 참여 가능 기간</SubName>
            <SelfText>
              {data[0]?.start.replace("-", ".").replace("-", ".")}~
              {data[0]?.end.replace("-", ".").replace("-", ".")}
            </SelfText>
          </TitleTextWrap>
          <TitleTextWrap>
            <StacTextWrap>
              <StacText>
                {data.length > 0 ? data[0].nickname : ""}님이 보유한 스택
              </StacText>
            </StacTextWrap>
            <StacTagWrap>
              {data.length > 0
                ? data[0].resumeskills.map((list, idx) => {
                    return <TagDev key={idx} skills={list} />;
                  })
                : ""}
            </StacTagWrap>
          </TitleTextWrap>
          <div>
            <DucButton>면접 신청하기</DucButton>
            {modify ? (
              <DucButton onClick={() => {navigate("/editprofile/" + `${data[0].resumeId}`);}}>
                수정하기
              </DucButton>
            ) : (<></>)}
            {modify ? <DucButton onClick={() => {
              dispatch(deleteEmployAxios(resumeId));
              alert("정말 삭제하시는 겁니까 ?")
              navigate("/mainemployment");}}>삭제하기</DucButton> : <></>}
          </div>
        </NameFieldWrap>
      </EmploProfile>
    </>
  );
}



const EmploProfile = styled.div`
    /* border: 1px solid black; */
    width: 700px;
    margin-top: 70px;
    margin-bottom: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`

const NameFieldWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`

const ProfileTopWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const ProfileCircleWrap = styled.div`
  /* border: 1px solid black; */
  width: 150px;
  height: 150px;
  margin-right: 40px;
 
  overflow: hidden;
  position: relative;
`;

const ProfileCircle = styled.div`
  /* width: 150px;
  height: 150px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  /* object-fit: cover; */

  /* background-size: 100%; */
  /* background-position: center; */
  border-radius: 50%;
  /* background-repeat: no-repeat; */

  /* display: inline-block;
  width: 100%;
  height: 100px;
  overflow: hidden;
  object-fit: cover; */
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center;
`;

const NameWrap = styled.div`
    /* border: 1px solid black; */
    width: 500px;
`

const NameTitle = styled.div`
    /* border: 1px solid black; */
    margin: 12px;
`

const TitleName = styled.span`
    font-weight: bold;
    font-size: 20px;
`

const SubName = styled.span`
    font-size: 16px;
    font-weight: bold;
`

const TextField = styled.div`
    font-size: 14px;
`

const TitleTextWrap = styled.div`
    font-size: 14px;
    /* border: 1px solid black; */
    width: 600px;
    height: 100px;
    margin-top: 50px;
`

const StacTextWrap = styled.div`
    /* border: 1px solid black; */
    margin-bottom: 20px;
`

const StacText = styled.div`
  font-size: 15px;
  font-weight: bold;
`

const StacTagWrap = styled.div`
    margin-bottom: 50px;
    /* border: 1px solid black; */
`

const DucButton = styled.button`
    border: none;
    outline: none;
    background-color: #5B6770;
    color: white;
    padding: 10px;
    border-radius: 10px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    margin-top:  80px;
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;

`

const SelfText = styled.div`
  margin-top: 20px;
`

export default EmploymentProfile