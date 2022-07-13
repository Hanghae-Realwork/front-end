import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import "./TestReactDatepicker.css"
// import"./TestDatepicker.css";
import ko from 'date-fns/locale/ko';
import { format, isValid, parse, isAfter } from "date-fns";
registerLocale('ko', ko);

function TestDatePicker() {
  // 달력 날짜 변경 시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState(new Date());
  const today = new Date();
 
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    console.log(JSON.stringify(start),JSON.stringify(end))
  }

  console.log(startDate, endDate)

  const [selected, setSelected] = useState(new Date());
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [beforeDay, setBeforeDay] = useState("");
  console.log(selected)

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
  if (selected?.from) {
    if (!selected.to) {
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
          {format(selected.from, "yyyy년 MM월 dd일")}
        </p>
      );
    } else if (selected?.to) {
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
          {format(selected.from, "yyyy년 MM월 dd일 ")}~
          {format(selected.to, " yyyy년 MM월 dd일")}
        </p>
      );
    }
  }

  return (
    <>


      <DatePicker
        locale="ko" // 달력 한글화
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        disabled={today}
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
      />

      <DatePickerWrapper
        
        popperContainer={Popper}
        calendarContainer={Calendar}
        // dayClassName={Daystring}
        controls={['calendar']}
        dateFormat="YYYY-MM-DD"
        locale="ko" // 달력 한글화
        selected={startDate}
        // onSelect={setSelected}
        onChange={onChange}
        startDate={startDate}
        rangeHighlight={true}
        showRangeLabels={false}
        // rangeStartHelp="Set dates"
        // rangeEndHelp="Set dates"
        endDate={endDate}
        monthsShown={2}
        selectsRange
        // filterDate={filterPassedDay}
        // disabled={today}
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