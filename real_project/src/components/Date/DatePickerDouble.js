import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import styled from 'styled-components';
import "./DatePickerDouble.css"
import ko from 'date-fns/locale/ko';



const DatePickerDouble = () => {

  registerLocale('ko', ko);

  const [startDate, setStartDate] = useState(""); 
  const [endDate, setEndDate] = useState("");

  const onChange = (dates) => { 
  const [start, end] = dates; setStartDate(start); setEndDate(end); 

    console.log(start, end); }; 

  const start = JSON.stringify(startDate).slice(1, 11); 
  const end = JSON.stringify(endDate).slice(1, 11);

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
          }}>
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
          
        </>
      );

}


  
export default DatePickerDouble