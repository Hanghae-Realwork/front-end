
import styled from 'styled-components';
import Moment from "react-moment";
import "./DatePickerDouble.css"


const DatePickerDouble = ({start,end}) => { 
  console.log(start,end)
  const footerStart = Date.parse(start&&start)
  const footerEnd = Date.parse(end&&end)
 



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