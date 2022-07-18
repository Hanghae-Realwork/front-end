
import "./Footer.css"


const Footer = ({ start, end }) => {

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
  if (start && start) {
   
        if (end === null) {
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
              {start.getFullYear()}년 {start.getMonth()}월 {start.getDate()}일
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
                fontSize: "14px",
              }}
            >
              {start.getFullYear()}년 {start.getMonth()}월 {start.getDate()}일 ~{" "}
              {end.getFullYear()}년 {end.getMonth()}월 {end.getDate()}일
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


export default Footer;