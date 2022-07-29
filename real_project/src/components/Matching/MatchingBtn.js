import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import "../../App.css"

function MatchingBtn(){
  const navigate = useNavigate()

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const MoveChapter = () => {
    navigate(`/matchingcrew`)
  };

  const MoveResume = () => {
    navigate(`/matchingresume`)
  };


    return (
      <></>
        
    );
}




const LeftTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid transparent;
  border-right: 17px solid white;
  pointer-events: none;
`

const SecondCenterDiv = styled.label`
    width: 120px;
    height: 34px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    /* color: #d9d9d9; */
    cursor: pointer;
`

const RightTriangleDivtwo = styled.div`
  width: 0;
  height: 0;
  border-bottom: 17px solid white;
  border-top: 17px solid transparent;
  border-left: 17px solid white;
  border-right: 17px solid transparent;
  pointer-events: none;
`

const BtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: -1px;
`

const SecondBtnDivWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const PositionWrap = styled.div`
    position: relative;
    /* border: 1px solid white; */
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    left: -350px;
`



export default MatchingBtn;



