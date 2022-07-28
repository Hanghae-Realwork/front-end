import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import pacman from "../image/Bean Eater-0.5s-200px.svg"
import planet from "../image/rotationplanet.svg"
// import dot from "../image/Ellipsis-1.6s-114px.svg"


export const Loading = () => {

    const loginInfo = useSelector((state) => state.user.userInfo.is_login);

    React.useEffect(() => {
        if (loginInfo === true) {
            setTimeout(() => {
                window.location.replace(`/`)}, 300)
          }
    })  


  return (
    <BackgroundLoading>
        <RelativeWrap>
            <AbsoluteWrap>
                <LoadingText>Loading...</LoadingText>
                <LodGuideText>사용자 정보를 불러오는 중입니다</LodGuideText>
                <LoadingImg src = {planet} className="AnimationPlanet" />
            </AbsoluteWrap>
        </RelativeWrap>
    </BackgroundLoading>
    )
}


const BackgroundLoading = styled.div`
  background-color: #1f1f1f;
  position: absolute;
  width: 1000vh;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingImg = styled.img`
    margin-top: 50px;
    width: 300px;
    height: 300px;
`

const LoadingText = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    justify-content: center;
`

const RelativeWrap = styled.div`
    position: relative;
`

const AbsoluteWrap = styled.div`
    position: absolute;
    top: 180px;
    left: -150px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const LodGuideText = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: white;
    margin-top: 40px;
`


export default Loading;
