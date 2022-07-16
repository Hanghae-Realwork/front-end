
import styled from 'styled-components';
import Moment from "react-moment";
import "./DatePickerDouble.css"


const DatePickerDouble = ({ start, end }) => {
  
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
             <Moment format="YY년 M월 D일">{footerStart}</Moment>;
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
              <Moment format="YY년 M월 D일">{footerStart}</Moment> ~ 
              <Moment format="YY년 M월 D일">{footerEnd}</Moment>
            </p>
          );
        }
      }

      return (
        <>
          {footer}
        </>
      );

}


export default DatePickerDouble