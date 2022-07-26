import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { checkUserValidation, login } from "../redux/modules/user";
import { userPhotoAxios } from "../redux/modules/postProfile";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import Application from "../components/Mypage/Application";
import Recruitment from "../components/Mypage/Recruitment";
import MyButton from "../components/Mypage/MyPageButton";

import astroman from "../image/pluastroman.svg";
import email from "../image/letter.svg";
import Check from "../image/check.svg";
import LeftBackground from "../image/mypagBackground.svg"
import Plus from "../image/plus.svg";

function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const loginInfo = useSelector((state) => state.user.userInfo);
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  const [files, setFiles] = React.useState("");
  const [filesImg, setFilesImg] = React.useState("");

  const frm = new FormData();
  const reader = new FileReader();


  const onChange = (e) => {
    console.log("들어옴");
    const file = e.target.files;
    console.log(e.target.files);
    setFiles(file);

    //fileReader
    setFilesImg(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setFilesImg(reader.result);
        resolve();
      };
    });
  };
  const plusImgOnclick = () => {
    if (files === "" || null) {
      alert("사진을 올려볼까요 🥸")
    } 
    console.log(files[0])
    frm.append("profileImage", files[0]);
    console.log(frm)
    dispatch(userPhotoAxios(nickname, frm)).then((res) => {
      console.log(res);
    });
  }


  return (
    <>
      <MyButton />
      <AllMyWrap>
        <MypageBackGround>
          <MyPageLeftWrap>
            <LeftBackgroundWrap>
              <MyPageProfileWrap>
                
                <Label>
                  {filesImg ? (<MyPagePhotoIn src={filesImg} />) : (<MyPagePhotoWrap />)}
                  <input
                    name="imgUpload"
                    type="file"
                    id="add_img"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                  />
                </Label>

                <ProfilePhotoSpan onClick={plusImgOnclick}>
                  사진 업로드 완료하기
                </ProfilePhotoSpan>

                <NameMyPage>
                  <NameText>{loginInfo.nickname}</NameText>
                </NameMyPage>
              </MyPageProfileWrap>
              <MypageTextWrap>
                <Mycall>{loginInfo.userId}</Mycall>
              </MypageTextWrap>
              <MyPagePasswordWrap>
                <span>비밀번호 변경</span>
                <span>회원 탈퇴</span>
              </MyPagePasswordWrap>
            </LeftBackgroundWrap>
          </MyPageLeftWrap>

          <MyPageMainWrap>
            <Outlet />
          </MyPageMainWrap>
        </MypageBackGround>
      </AllMyWrap>
    </>
  );
}


const AllMyWrap = styled.div`
    background: linear-gradient(
    115.2deg,
    rgba(174, 151, 227, 0.3) 0%,
    rgba(119, 195, 231, 0.3) 77.66%
  );
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MypageBackGround = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 1440px;
`;

const MyPageMainWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  /* margin-top: -50px; */
  position: relative;
  /* top: -200px; */
  left: 30px;
  width: 820px;
  gap: 20px;
  height: 1000px;
  overflow-y: scroll;
`;

const MyPageLeftWrap = styled.div`
  border: 0.5px solid black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 627px;
  border-radius: 4px;
  background-color: white;
  margin-top: -120px;
  position: relative;
  top: -230px;
  left: -25px;
`;

const LeftBackgroundWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 306px;
  height: 615px;
  background-image: url(${LeftBackground});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

// 좌측 프로필 CSS
const MyPageProfileWrap = styled.div`
  /* border: 1px solid black; */
  width: 200px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

const MyPagePhotoWrap = styled.img`
  /* border: 1px solid black; */
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${astroman});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const MyPagePhotoIn = styled.img`
  /* border: 1px solid black; */
  width: 160px;
  height: 160px;
  border-radius: 100%;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProfilePhotoSpan = styled.button`
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  background-color: #303032;
  border-radius: 4px;
  color: white;
  padding: 6px 12px 6px 12px;
  border: none;
  outline: none;
`

const NameMyPage = styled.div`
  margin-top: 36px;
`;

const NameText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

const MypageTextWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Mycall = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const MyPagePasswordWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 150px;
`;


const Label = styled.label`

top:90px;
right: 90px;
`

// // 우측 프로필 CSS
// const RightTopWrap = styled.div`
//   /* border: 1px solid black; */
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 44px;
//   margin-bottom: 48px;
// `;

// const MyMenuButton = styled.button`
//   padding: 8px 20px 8px 20px;
//   width: 120px;
//   height: 40px;
//   font-size: 15px;
//   font-weight: 700;
//   border-radius: 20px;
//   background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
//   border: none;
//   outline: none;
//   cursor: pointer;
//   margin-bottom: 17px;
//   color: white;
// `;

// const RightCardWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
// `;

// const InterviewWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: flex-start;
//   width: 450px;
// `;

// const InterviewButtonWrap = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   /* border: 1px solid black; */
//   width: 384px;
//   margin-top: 20px;
// `;

// const InterviewButton = styled.button`
//   padding: 8px 23px 8px 23px;
//   background-color: #323230;
//   color: white;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   border-radius: 4px;
//   font-size: 14px;
// `;

// const InterviewDateWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: center;
//   /* border: 1px solid black; */
// `;

// const ButtonWrap = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   /* border: 1px solid black; */
// `;

// const RightContentWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: flex-start;
//   width: 385px;
//   /* border: 1px solid black; */
// `;

// const CardAllWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: flex-start;
//   align-items: center;
//   width: 384px;
//   height: 307px;
//   background-color: white;
//   border-radius: 4px;
// `;

// const TopWrap = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   /* border: 1px solid black; */
//   width: 350px;
//   margin-top: 20px;
// `;

// const UserText = styled.span`
//   font-size: 12px;
//   font-weight: 400;
// `;

// const TitleWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: flex-start;
//   width: 350px;
//   /* border: 1px solid black; */
//   margin-top: 12px;
// `;

// const TitleText = styled.span`
//   font-size: 18px;
//   font-weight: 700;
// `;

// const ContentText = styled.span`
//   font-size: 14px;
//   font-weight: 400;
// `;

// const RoleWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: flex-start;
//   /* border: 1px solid black; */
//   margin-top: 10px;
//   width: 350px;
// `;

// const RoleText = styled.span`
//   font-size: 14px;
//   font-weight: 700;
//   margin-top: 2px;
// `;

// const ProjectLimit = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-start;
//   align-items: center;
//   /* border: 1px solid black; */
//   margin-top: 10px;
//   width: 350px;
// `;

// const DateLimitText = styled.span`
//   font-size: 14px;
//   font-weight: 400;
// `;

// const DateText = styled.span`
//   font-size: 14px;
//   font-weight: 500;
//   margin-left: 12px;
// `;

// const CardTotalWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: center;
// `;

// const InterviewTimeText = styled.span`
//   font-size: 12px;
//   font-weight: 400;
//   margin-left: 10px;
// `;

// const CodeText = styled.span`
//   font-size: 14px;
//   font-weight: 500;
// `;

// const BeltWrap = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   margin-top: 35px;
//   /* border: 1px solid black; */
//   width: 380px;
// `;

// const CourseLabel = styled.label`
//   padding: 8px 14px 8px 14px;
//   font-size: 14px;
//   font-weight: 500;
//   border-radius: 20px;
//   background-color: white;
// `;

// const ConectLine = styled.hr`
//   width: 14px;
// `;

// const RightMapingWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
// `;

export default MyPage;
