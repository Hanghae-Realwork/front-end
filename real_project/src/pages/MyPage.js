import React from "react";
import styled from "styled-components";

import astroman from "../image/astroman.svg"
import email from "../image/letter.svg"
import phone from "../image/phone.svg"

import RecCard from "../components/CardRecruit"

function MyPage() {

    const My_card = Array.from({ length: 1 }, (v, i) => i);



  return (
    <>
      <MypageAllWrap>
          <MypageBackGround>
            <MyPageLeftWrap>
                <MyPageProfileWrap>
                    <MyPagePhotoWrap>
                        <CircleProfile>
                            <PictureCircle>
                                <BasicImg src = {astroman}></BasicImg>
                            </PictureCircle>
                        </CircleProfile>
                    </MyPagePhotoWrap>
                    <NameMyPage>
                        <NameText>[유저 닉네임]</NameText>
                    </NameMyPage>
                    <AdressWrap>
                        <MypageTextWrap>
                            <img src = {email} style={{marginRight:"13px"}}></img>
                            <Mycall>email@email.com</Mycall>
                        </MypageTextWrap>
                        <MypageTextWrap>
                            <img src = {phone} style={{marginRight:"13px"}}></img>
                            <Mycall>010-0000-0000</Mycall>
                        </MypageTextWrap>
                    </AdressWrap>
                    <MyPagePasswordWrap>
                        <Mycall>비밀번호 변경</Mycall>
                        <Mycall>회원 탈퇴</Mycall>
                    </MyPagePasswordWrap>
                </MyPageProfileWrap>
            </MyPageLeftWrap>
            <MyPageRightWrap>
                <RightTopWrap>
                    <MyMenuButton>내 지원 현황</MyMenuButton>
                    <MyMenuButton>내 모집 현황</MyMenuButton>
                    <MyMenuButton>내 이력서</MyMenuButton>
                </RightTopWrap>
                <RightCardWrap>
                {My_card === undefined
                    ? null
                    : My_card.map((list, idx) => {
                        return <RecCard key={idx} />;
                    })}
                </RightCardWrap>
                <div></div>
                <div></div> 
            </MyPageRightWrap>
        </MypageBackGround>          
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
    justify-content: space-between;
    align-items: center;
    width: 100%
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
