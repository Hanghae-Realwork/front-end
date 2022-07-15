import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import "./TestReactDatepicker.css"
import "./TestDatepicker.css";
import ko from 'date-fns/locale/ko';
import { format, isValid, parse, isAfter } from "date-fns";
import { useRef } from 'react';


import Timeit from "react-timeit";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

registerLocale('ko', ko);
let timeInit = 0;
let minInit = 0;
const TestDatePicker = ({ contextDatePicker }) => {
  // 달력 날짜 변경 시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();

  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(JSON.stringify(start), JSON.stringify(end))
  }

  //시작/끝 시간값 JSON으로 출력
  const start = JSON.stringify(startDate)
  const end = JSON.stringify(endDate)

  console.log(start)
  console.log(end)

  const [selected, setSelected] = useState(new Date());
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [beforeDay, setBeforeDay] = useState("");
  console.log(selected)




  //timeit 테스트
  const [time, setTime] = useState(0);
  const [minite, setMinite] = useState(0)
  // const 

  const timeIncrease = () => {
    setTime(time + 1);
  }
  const timeDecrease = () => {
    setTime(time - 1);
  }
  const minIncrease = () => {
    setMinite(minite + 1);
  }
  const minDecrease = () => {
    setMinite(minite - 1);
  }
  console.log(time, minite)

  const timeHandle = (e) => {
    console.log(e)
    console.log('timeHandle: ' + e.target.value)
    timeInit = e.target.value
  }
  const minHandle = (e) => {
    console.log(e)
    console.log('minHandle: ' + e.target.value)
    minInit = e.target.value
  }

  // https://reactdatepicker.com/ 참고

  let footer = (
    <p
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "180px",
        textAlign: "center",
        fontSize: "13px",
      }}
    >
      시작날짜를 눌러주세요
    </p>
  );
  if (start && start) {
    if (!end) {
      footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "150px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {start}
        </p>
      );
    } else if (end && end) {
      footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "260px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {start}~
          {end}
        </p>
      );
    }
  }


  return (
    <>


      {/* <DatePicker
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

        inline />

      <DatePicker
        locale="ko" // 달력 한글화
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        showTimeSelect
        dateFormat="Pp"
        inline
      /> */}

      {/* <TimeContainer /> */}


      <DatePickerWrapper
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
        inline



      />


      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="Time"
        dateFormat="hh"
        inline
      />



      {footer}

     

      

    </>


  );
}

const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 100%;
`;

const Daystring = styled.div`
/* font-size: large; */
`
const Calendar = styled.div`
  /* width : 706px; */
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

export default TestDatePicker