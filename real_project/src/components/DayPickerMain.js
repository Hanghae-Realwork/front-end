import React, { useRef, useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import "react-day-picker/dist/style.css";
import "./day-picker.css";

import up from "../image/toggle_up.svg";
import down from "../image/toggle_down.svg";
import calender from "../image/calender.svg"

const DayPickerMain = () => {
  const [selected, setSelected] = useState("");
  const today = new Date();
  const [toggle, setToggle] = useState(false);

  // console.log("날짜", selected);
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  let footer = (
    <Container1 className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
      <ContainerStartDateDiv1>
        <DateFirstViewWrap>
          <DateWrap>
            <img src = {calender}/>
            <ButtonName>프로젝트 기간</ButtonName>
          </DateWrap> 
            <img src = {down}/>
        </DateFirstViewWrap>
      </ContainerStartDateDiv1>
    </Container1>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <img src = {calender}/>
            <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
            <img src = {down}/>
          </ContainerStartDateDiv1>
        </Container1>
      );
    } else if (selected?.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <img src = {calender}/>
              <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
              <SelectedDateWave>{' ~ '}</SelectedDateWave>
              <SelectedDate>{format(selected.to,  "MM월 dd일")}</SelectedDate>
          </ContainerStartDateDiv1>
        </Container1>
      );
    }
  }

  return (
    <DivDayPicker>
      {footer}
      {toggle ? (
        <DayPicker className="dayPicker_container__divMain"
          styles={{caption: { fontSize: "13px", margin: "20px 0px 20px 0px"}}}
          mode="range" selected={selected} onSelect={setSelected} locale={ko} numberOfMonths={2} disabled={{ before: today }}>
          </DayPicker>
      ) : ("")}
    </DivDayPicker>
  );
};

// 프로젝트 기간 버튼
const Container1 = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 9px 12px 9px 10px;
  border-right: 1px solid black;
  width: 215px;
`;

//시작날짜, 끝날짜 따로따로
const ContainerStartDateDiv1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const DateWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`

//시작날짜 폰트
const ButtonName = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`;

//선택날짜 폰트
const SelectedDate = styled.span`
  font-size: 13px;
  margin-left: 5px;
  margin-right: 10px;
`;

const SelectedDateWave = styled.div`
  font-size: 14px;
  margin-left: 3px;
  margin-right: 3px;
  font-weight: 500;
`

//전체
const DivDayPicker = styled.div`
  position: relative;
`;

const DateFirstViewWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width:160px;
`

export default DayPickerMain;
