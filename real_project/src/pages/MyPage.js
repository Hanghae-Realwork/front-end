import React, { useEffect } from "react";
import styled from "styled-components";

import astroman from "../image/astroman.svg"
import email from "../image/letter.svg"
import phone from "../image/phone.svg"

import { useSelector, useDispatch } from "react-redux"; 
import { checkUserValidation } from "../redux/modules/user";
import { useNavigate } from "react-router-dom";



function MyPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const MyCard = Array.from({ length: 2 }, (v, i) => i);
    
//     const isLogin = useSelector((state) => state.user.userInfo.is_login);
//    console.log(isLogin)
    
//     useEffect(() => {
//         if (isLogin === null) { 
//  dispatch(checkUserValidation());
//  return;
//         }
//         if (!isLogin) {
//             navigate("/")
//         }
       
// },[])
  return (
    <>
      <MypageAllWrap>
         
      </MypageAllWrap>
    </>
  );
}


const MypageAllWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const MypageBackGround = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:713px;
    z-index: -1;
    background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
`

const MyPageMainWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 1200px;
`


const MyPageLeftWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 306px;
    height: 710px;
`

const MyPageRightWrap = styled.div`
    border: 1px solid black; 
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
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
    /* border: 1px solid black; */
    width: 160px;
    height: 160px;
    border-radius: 100%;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CircleProfile = styled.div`
    border: 1px solid black;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PictureCircle = styled.div`
    /* border: 1px solid black; */
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
`

const BasicImg = styled.img`
    width: 136px;
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
    
`
const Mycall = styled.span`
    font-size: 16px;
    font-weight: 400;
`
const AdressWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 60px;
    margin-bottom: 178px;
`
const MyPagePasswordWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
`


// 우측 프로필 CSS
const RightTopWrap = styled.div`
    border: 1px solid black;
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
`

const RightCardWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export default MyPage;
