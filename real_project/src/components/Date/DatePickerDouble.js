import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import "./TestReactDatePicker.css"
import "./TestDatePicker.css";
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);


const DatePickerDouble = ( { contextDatePicker } ) => {
    // 달력 날짜 변경 시 기준점이 되는 날짜
    const [startDate, setStartDate] = useState('');
    const today = new Date();
    const [endDate, setEndDate] = useState('');
    const [dateStart, setDateStart] =useState()
    const [DateEnd, setDateEnd] =useState()
    
  
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      console.log(start, end)
    }


    //시작/끝 시간값 JSON으로 출력
  const start = JSON.stringify(startDate).slice(1, 11)
  const start_year = start.substring(2, 4)
  const start_month = start.substring(5, 7);
  const start_day = start.substring(8);

  
  const end = JSON.stringify(endDate).slice(1, 11)
    const end_year = end.substring(2, 4);
    const end_month = end.substring(5, 7);
    const end_day = end.substring(8);
    const footerStart = start
    const footerEnd = end
    console.log(start)
    console.log(end)

    let footer = (
        <span
          style={{
            margin: "10px",
            padding: "10px",
            width: "180px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          시작날짜를 눌러주세요
        </span>
      );
      if (footerStart && footerStart) {
        if (footerEnd==="ull") {
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
              {start_year}년 {start_month}월 {start_day}일
            </p>
          );
        } else if (footerEnd && footerEnd) {
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
              {start_year}년 {start_month}월 {start_day}일 ~ {end_year}년{" "}
              {end_month}월 {end_day}일
            </p>
          );
        }
      }

      return (
        <>

          <DatePickerWrapper
            popperContainer={Popper}
            calendarContainer={Calendar}
            controls={["calendar"]}
            dateFormat="YYYY-MM-DD"
            locale="ko" // 달력 한글화
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            minDate={new Date()}
            // rangeHighlight={true}
            // showRangeLabels={false}
            endDate={endDate}
            monthsShown={2}
            selectsRange
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

  const CalenderWrap =styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
  `
  
export default DatePickerDouble