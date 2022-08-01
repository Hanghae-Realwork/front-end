import React,{useEffect} from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {checkUserValidation} from "../redux/modules/user"

import "../App.css"

import Footer from "../components/Footer";

import Sample from "../image/mainSample.svg"
import Space from "../image/space.svg"
import banner from "../image/banner_com_edit.svg"
import spacebackground from "../image/editspace.svg"
import emptyspace from "../image/justspace.svg"
import cloud from "../image/spacecloud.svg"
import shuttle from "../image/editshuttle.svg"
import planet from "../image/rotationplanet.svg"




function Main() {

    const navigate = useNavigate();
    console.log('빌드 1.2.7')

    return(
        <>
            <BackGroundDiv >
                <MainAllWrap >
                    <MaininTitleTopWrap>
                        <HeadTitleWrap><TitleMain>사람과 아이디어의 조우,<span style={{fontSize:"49px", fontWeight:"bold"}}> renDev</span></TitleMain></HeadTitleWrap>
                        <SubWrap><SubMain>우주항공용어로 랑데부(Rendez-Vous)란, 드넓은 우주를 유영하던 두 물체의 만남을 말합니다.
                            개발자들은 물론, 디자이너까지, 아이디어의 우주를 헤엄치며 함께할 팀원을 찾는 여러분께 renDev가 협업을 위한 랑데부 포인트가 되어드리겠습니다.</SubMain></SubWrap>
                        <MainButtonWrap>
                            <PageButton onClick={() => {navigate(`/mainrecruit`)}}>프로젝트 페이지로 가기</PageButton>
                            <PageButton2 onClick={() => {navigate(`/mainemployment`)}}>팀원 구하러 가기</PageButton2>
                        </MainButtonWrap>
                    </MaininTitleTopWrap>
                            <Planet src={planet} className="AnimationPlanet"/>
                    <MainBackgroundWrap>
                        <Shuttle src={shuttle} className="AnimationShuttle"></Shuttle>
                        <CloudImg src={cloud} className="AnimationCloud"/>
                    </MainBackgroundWrap>
                </MainAllWrap>
            </BackGroundDiv>

            <BackgroundBot>
                <MainTextTitle>
                    <CircleMainIcon> 
                        <CircleImage />
                    </CircleMainIcon>
                    <ContentSpan>저 멀리 시대에 뒤쳐진 은하계 서쪽 소용돌이의 끝, 
                        지도에도 나와 있지 않은 그 변두리 지역에 아무도 주목하지 않는 작은 노란색 항성이 하나 있다.<SubSpan> ~은하수를 여행하는 히치하이커를 위한 안내서~ (더글라스 애덤스)</SubSpan></ContentSpan>
                    <ContentSpan>은하수를 여행하는 히치하이커 라는 작품을 아시나요?
                        프로젝트를 함께할 사람들을 기다리는 히치하이커들을 위한 공간, 신선한 아이디어의 프로젝트와 준비된 팀원들이 모이는 이곳은 renDev입니다.</ContentSpan>
                </MainTextTitle>
            </BackgroundBot>
            <Footer/>
        </>

    )

}


const BackGroundDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303032;
    /* className="MainBack" */
`

const MainAllWrap = styled.div`
  /* border: 1px solid white; */
  width: 1440px;
  height: 602px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url(${emptyspace});
  /* background-image: url(${spacebackground}); */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
`;

const MainBackgroundWrap = styled.div`
    /* border: 1px solid white; */
    width: 815px;
    height: 600px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    position: relative;
    right: -625px;
`

const CloudImg = styled.img`
    height: 610px;
    z-index: 2;
`

const Shuttle = styled.img`
    width: 300px;
    z-index: 3;
`

const Planet = styled.img`
    width: 365px;
    position: absolute;
    top: 350px;
    right: 500px;
`


const MaininTitleTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 500px;
  height: 350px;
  margin: 144px 0px 200px 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
`;

const TitleMain = styled.span`
  font-size: 33px;
  font-weight: bolder;
  color: white;
`;

const HeadTitleWrap = styled.div`
    /* border: 1px solid black; */
    text-align: justify;
`

const SubWrap = styled.div`
    margin-top: 20px;
    /* border: 1px solid black; */
    text-align: justify;
`

const SubMain = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: white;
    font-weight: bold;
`
const PageButton = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24.5px 12px 24.5px;
  background-color: #AE97E3;
  width: 200px;
  color: white;
  cursor: pointer;
`;

const PageButton2 = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24.5px 12px 24.5px;
  width: 200px;
  background-color: #77C3E7;
  color: white;
  cursor: pointer;
`;

const MainButtonWrap = styled.div`
    /* border: 1px solid black; */
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`

const MainTextTitle = styled.div`
    /* color: white; */
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const ContentSpan = styled.span`
    font-size: 14px;
`

const SubSpan = styled.span`
    font-size: 12px;
    color: #B4B5DF;
`

const CircleMainIcon = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 100%;
    /* border: 1px solid black; */
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F3F3F3;
`

const CircleImage = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    /* border: 1px solid black; */
    background-image: url(${Space});
`

const BackgroundBot = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin-bottom: 127px;
    margin-top: 127px;
`


export default Main
