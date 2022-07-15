import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const DatePickerSingle = ( props ) => {
    // 달력 날짜 변경 시 기준점이 되는 날짜
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState("");
  
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      console.log(JSON.stringify(start), JSON.stringify(end))
    }
  
    //시작/끝 시간값 JSON으로 출력
    const start = JSON.stringify(startDate)
    const end = JSON.stringify(endDate)
  
    // console.log(start)
    // console.log(end)

    let footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
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
                width: "260px",
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              {start.slice(3,11)}~
              {end.slice(3,11)}
            </p>
          );
        }
      }

      return (
        <>
        <DatePickerWrapper
        popperContainer={Popper}
        calendarContainer={Calendar}
        controls={['calendar']}
        dateFormat="YYYY-MM-DD"
        locale="ko" // 달력 한글화
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        minDate={new Date()}
        // rangeHighlight={true}
        // showRangeLabels={false}
        endDate={endDate}
        
        selectsRange
        inline
      />
      <CalendarInfoWrap>
       {footer}
      </CalendarInfoWrap>
</>
);
}


const DatePickerWrapper = styled(({ TestClass, ...props }) => (
    <DatePicker {...props} wrapperClassName={TestClass} />
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

const CalendarInfoWrap = styled.div`
border: 1px solid black;
width: 297px;
height: 43px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;

`
  
export default DatePickerSingle