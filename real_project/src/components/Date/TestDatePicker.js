import React, { useState, useRef } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import { format, isValid, parse, isAfter } from "date-fns";

import styled from 'styled-components';
import "./TestReactDatePicker.css"
import "./TestDatePicker.css";

import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";



const TestDatePicker = ({ contextDatePicker }) => {

  registerLocale('ko', ko);
  let timeInit = 0;
  let minInit = 0; 

  // 달력 날짜 변경 시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

    //시작/끝 시간값 JSON으로 출력
    const start = JSON.stringify(startDate)
    const end = JSON.stringify(endDate)

    // const test1 = start.substring(1,11) 
    // const test2 = end.substring(1,11)

    // console.log(test1)
    // console.log(test2)

    const [selected, setSelected] = useState(new Date());
    console.log(selected)


  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(JSON.stringify(start), JSON.stringify(end))
  }

  // https://reactdatepicker.com/ 참고

  let footer = (
    <p style={{margin: "10px", textAlign: "center", fontSize: "13px"}}>
      시작날짜를 눌러주세요
    </p>);
  if (start && start) {
    if (!end) {
      footer = (
        <span
          style={{padding: "10px", textAlign: "center", fontSize: "13px"}}>
          {start}
        </span>
      );
    } else if (end && end) {
      footer = (
        <span
          style={{padding: "10px", textAlign: "center", fontSize: "13px"}}>
          {start}~
          {end}
        </span>
      );
    }
  }


  return (
    <>
    <TestWrap>
      <DatePickerWrap
        popperContainer={Popper}
        calendarContainer={Calendar}
        controls={['calendar']}
        dateFormat="YYYY-MM-DD"
        locale="ko" // 달력 한글화
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        rangeHighlight={true}
        showRangeLabels={false}
        endDate={endDate}
        monthsShown={2}
        selectsRange
        inline/>
     </TestWrap>
     <TimeWrap>   
        {footer}
     </TimeWrap>
    </>
  );
}

const DatePickerWrap = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 100%;
`;

const Calendar = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Popper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
  z-index: 2;
`;

const TestWrap = styled.div`
   /* border: 1px solid black; */
   margin-bottom: 30px;
   margin-top: 30px;
`

const TimeWrap = styled.div`
    border: 1px solid black;
    width: 279px;
    height: 44px;
    border-radius: 4px;

`

export default TestDatePicker