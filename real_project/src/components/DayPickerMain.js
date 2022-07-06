import React, { useRef, useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import "react-day-picker/dist/style.css";
import "./day-picker.css";

import up from "../image/up-fill.svg";
import down from "../image/down-fill.svg";

const DayPickerMain = () => {
  const [selected, setSelected] = useState("");
  const today = new Date();
  const [toggle, setToggle] = useState(false);

  console.log("날짜", selected);
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  let footer = (
    <Container1 className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
      <ContainerStartDateDiv1>
        <DateFirstViewWrap>
          <DateWrap>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.69238 7.03857H5.53854V8.88473H3.69238V7.03857Z" fill="black"/>
              <path d="M5.53854 11.4231H3.69238V13.2692H5.53854V11.4231Z" fill="black"/>
              <path d="M8.07715 7.03857H9.9233V8.88473H8.07715V7.03857Z" fill="black"/>
              <path d="M9.9233 11.4231H8.07715V13.2692H9.9233V11.4231Z" fill="black"/>
              <path d="M12.4619 7.03857H14.3081V8.88473H12.4619V7.03857Z" fill="black"/>
              <path d="M14.3081 11.4231H12.4619V13.2692H14.3081V11.4231Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.76923 3H0V17.3077H18V3H15.2308V0H13.8462V3H4.15385V0H2.76923V3ZM1.38462 4.38461V15.9231H16.6154V4.38461H1.38462Z" fill="black"/>
              </svg>
            <ButtonName>프로젝트 기간</ButtonName>
          </DateWrap> 
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.7375 0.737549L8 6.46255L2.2625 0.737549L0.5 2.50005L8 10L15.5 2.50005L13.7375 0.737549Z" fill="#303032"/>
            </svg>
        </DateFirstViewWrap>
      </ContainerStartDateDiv1>
    </Container1>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.69238 7.03857H5.53854V8.88473H3.69238V7.03857Z" fill="black"/>
              <path d="M5.53854 11.4231H3.69238V13.2692H5.53854V11.4231Z" fill="black"/>
              <path d="M8.07715 7.03857H9.9233V8.88473H8.07715V7.03857Z" fill="black"/>
              <path d="M9.9233 11.4231H8.07715V13.2692H9.9233V11.4231Z" fill="black"/>
              <path d="M12.4619 7.03857H14.3081V8.88473H12.4619V7.03857Z" fill="black"/>
              <path d="M14.3081 11.4231H12.4619V13.2692H14.3081V11.4231Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.76923 3H0V17.3077H18V3H15.2308V0H13.8462V3H4.15385V0H2.76923V3ZM1.38462 4.38461V15.9231H16.6154V4.38461H1.38462Z" fill="black"/>
            </svg>
            <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
          </ContainerStartDateDiv1>
        </Container1>
      );
    } else if (selected?.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.69238 7.03857H5.53854V8.88473H3.69238V7.03857Z" fill="black"/>
              <path d="M5.53854 11.4231H3.69238V13.2692H5.53854V11.4231Z" fill="black"/>
              <path d="M8.07715 7.03857H9.9233V8.88473H8.07715V7.03857Z" fill="black"/>
              <path d="M9.9233 11.4231H8.07715V13.2692H9.9233V11.4231Z" fill="black"/>
              <path d="M12.4619 7.03857H14.3081V8.88473H12.4619V7.03857Z" fill="black"/>
              <path d="M14.3081 11.4231H12.4619V13.2692H14.3081V11.4231Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.76923 3H0V17.3077H18V3H15.2308V0H13.8462V3H4.15385V0H2.76923V3ZM1.38462 4.38461V15.9231H16.6154V4.38461H1.38462Z" fill="black"/>
            </svg>
              <SelectedDate>{format(selected.from, "MM월 dd일 " + ' \ ' + ' ~ ' )}</SelectedDate>
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
          styles={{caption: { fontSize: "13px", color: "white", padding: "5px", backgroundColor:"#AE97E3" }}}
          mode="range" selected={selected} onSelect={setSelected} locale={ko} numberOfMonths={2} disabled={{ before: today }}></DayPicker>
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
  /* border: 1px solid black; */
  padding: 9px 12px 9px 10px;
  border-right: 1px solid black;
  /* width: 267px; */
`;

//시작날짜, 끝날짜 따로따로
const ContainerStartDateDiv1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
  /* width: 267px; */
  /* padding: 5px; */
  /* border: 1px solid black; */
  /* max-width: 490px; */
`;

const DateWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  /* border: 1px solid black; */
  /* height: auto; */
`

//시작날짜 폰트
const ButtonName = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  /* border-right: 1px solid black; */
`;

//선택날짜 폰트
const SelectedDate = styled.span`
  /* min-width: 110px; */
  font-size: 13px;
  margin-left: 5px;
`;

//전체
const DivDayPicker = styled.div`
  position: relative;
`;

const DateFirstViewWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  width:160px;
`


export default DayPickerMain;
