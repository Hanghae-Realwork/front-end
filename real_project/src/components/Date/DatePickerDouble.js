import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import "./TestReactDatePicker.css"
import "./TestDatePicker.css";
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);


const DatePickerDouble = ({ start,end }) => {


  const start_year = start.substring(2, 4)
  const start_month = start.substring(5, 7);
  const start_day = start.substring(8);

    const end_year = end.substring(2, 4);
    const end_month = end.substring(5, 7);
    const end_day = end.substring(8);
    const footerStart = start
    const footerEnd = end
 

    let footer = (
        <span
          style={{
            margin: "10px",
            padding: "10px",
            width: "180px",
            textAlign: "center",
            fontSize: "14px",
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
                fontSize: "14px",
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
                fontSize: "14px",
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

          {/* <CalendarWrap>
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
          </CalendarWrap> */}
          <CalendarInfoWrap>

          {footer}
          </CalendarInfoWrap>
        </>
      );

}


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

  const CalendarWrap =styled.div`
    /* border: 1px solid black; */
    margin-top: 30px;
    margin-bottom: 30px;
    width: 570px;
    height: 325px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `

  const CalendarInfoWrap = styled.div`
    border: 1px solid black;
    width: 297px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

  `
  
export default DatePickerDouble