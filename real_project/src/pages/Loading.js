import React from "react";
import styled from "styled-components";

import pacman from "../image/Bean Eater-0.5s-200px.svg"
// import dot from "../image/Ellipsis-1.6s-114px.svg"


export const Loading = () => {
  return (
    <BackgroundLoading>
        <LoadingText>Loading...</LoadingText>
        <img src = {pacman} alt='로딩중' width="5%" />
    </BackgroundLoading>
    )
}


const BackgroundLoading = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  top: 0;
  left: 0;
  background: #685BC7b5;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled.div`
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
    justify-content: center;
`


export default Loading;
