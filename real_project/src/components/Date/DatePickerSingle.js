import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import styled from 'styled-components';
import ko from 'date-fns/locale/ko';

registerLocale('ko', ko);

const DatePickerSingle = ( props ) => {
    // 달력 날짜 변경 시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  let copy = [];


  const onChange = (date) => {
    setStartDate(date)
   copy.push(date);
  }
 
 

      return (
        <>
        <DatePickerWrapper
        popperContainer={Popper}  
        dateFormat="YYYY-MM-DD"
        locale="ko" // 달력 한글화
        selected={startDate}
        onChange={onChange}
        minDate={new Date()}
        inline
      />
</>
);
}


const DatePickerWrapper = styled(({ TestClass, ...props }) => (
    <DatePicker {...props} wrapperClassName={TestClass} />
  ))`
    width: 100%;
  `;
  
  const Daystring = styled.div`
  `
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

const CalendarInfoWrap = styled.div`
width: 150px;
height: 43px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;

`
  
export default DatePickerSingle