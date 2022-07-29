import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { checkUserValidation, login } from "../redux/modules/user";
import { userPhotoAxios } from "../redux/modules/postProfile";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import Application from "../components/Mypage/Application";
import Recruitment from "../components/Mypage/Recruitment";
import MyButton from "../components/Mypage/MyPageButton";
import FireModal from "../components/Modal/FireModal"

import astroman from "../image/pluastroman.svg";
import email from "../image/letter.svg";
import Check from "../image/check.svg";
import LeftBackground from "../image/mypagBackground.svg"
import Plus from "../image/plus.svg";



function MyPage() {
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.user.userInfo);
  const loginCheck = useSelector((state) => state.user.userInfo.is_login);
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  const [files, setFiles] = React.useState("");
  const [filesImg, setFilesImg] = React.useState("");
  const frm = new FormData();
  const reader = new FileReader();
  const [uploadEnd,setUploadEnd] = useState({status:false,msg:""})
  useEffect(() => {
    if (!loginCheck) dispatch(checkUserValidation());
  },[])
  const [fireModal, setfireModal] = useState(false)

  const onChange = (e) => {
    const file = e.target.files;
    setFiles(file);

    //fileReader
    if (filesImg !== e.target.files[0]) {
      setUploadEnd({ status: false, msg: "" })
      document.getElementById("uploadEnd").disabled = false;
    } setFilesImg(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setFilesImg(reader.result);
        resolve();
      };
    });
  };

  const plusImgOnclick = () => {
    
    frm.append("profileImage", files[0]);
    dispatch(userPhotoAxios(nickname, frm));
    setUploadEnd({ status: true, msg: "업로드 완료!" })
    document.getElementById("uploadEnd").disabled = true;
   

  }


  return (
    <>
      <ModalWrap style={{ display: !fireModal ? "none" : "" }}>
        {fireModal === true ? <FireModal close={setfireModal} /> : null}
      </ModalWrap>
      <MyButton />
      <AllMyWrap>
        <MypageBackGround>
          <MyPageLeftWrap>
            <LeftBackgroundWrap>
              <MyPageProfileWrap>
                <Label>
                  {filesImg ? (
                    <MyPagePhotoIn src={filesImg} />
                  ) : loginInfo?.profileImage === "" ? (
                    <MyPagePhotoWrap />
                  ) : (
                    <MyPagePhotoIn src={loginInfo.profileImage} />
                  )}

                  <input
                    name="imgUpload"
                    type="file"
                    id="add_img"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={onChange}
                  />
                </Label>

                <ProfilePhotoSpan
                  style={
                    files !== ""
                      ? { backgroundColor: "" }
                      : { backgroundColor: "#D9D9D9", pointerEvents: "none" }
                  }
                  onClick={plusImgOnclick}
                  id="uploadEnd"
                >
                  {uploadEnd.status ? uploadEnd.msg : "사진 업로드 완료하기"}
                </ProfilePhotoSpan>

                <NameMyPage>
                  <NameText>{loginInfo.nickname}</NameText>
                </NameMyPage>
              </MyPageProfileWrap>
              <MypageTextWrap>
                <Mycall>{loginInfo.userId}</Mycall>
              </MypageTextWrap>

              <MyPagePasswordWrap>
                <PassWordText
                  onClick={() => {
                    setfireModal(true);
                  }}
                >
                  회원 탈퇴
                </PassWordText>
                <UserWordText
                  target="_blank"
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSdyRGjMuu-Fn3WUgz5xLdg_45vzYxUmy8Rwxnqs1aUhfpQG-Q/viewform"
                  }
                >
                  고객 센터
                </UserWordText>
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
  flex-direction: column;

  /* flex-flow: row wrap; */
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  /* border: 1px solid black; */
`;


const Label = styled.label`
  top:90px;
  right: 90px;
`

const PassWordText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 10px;
  cursor: pointer;
`
const UserWordText = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 10px;
  text-decoration-line: none;
  cursor: pointer;
  color: black;
`;
const ModalWrap = styled.div`
  /* border: 4px solid white; */
  z-index: 4;
  position: absolute;
  /* margin-bottom: -100px; */
`


export default MyPage;
