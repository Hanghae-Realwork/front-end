import styled from "styled-components"
import "./Footer.css"


const Footer = ({ start, end }) => {

    let footer = (
        <SpanTag>
          시작날짜를 눌러주세요
        </SpanTag>
      );
  if (start && start) {
    if (end === null) {
      footer = (
        <Ptag>
          {start.getFullYear()}년 {start.getMonth() + 1}월 {start.getDate()}일
        </Ptag>
          );
  } else if (end && end) {
      footer = (
        <Ptag>
          {start.getFullYear()}년 {start.getMonth() + 1}월 {start.getDate()}일 ~{" "}
          {end.getFullYear()}년 {end.getMonth() + 1}월 {end.getDate()}일
        </Ptag>
        );
     }
  }

      return (
        <>
          {footer}
        </>
      );

}

const Ptag = styled.p`
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
`

const SpanTag = styled.span`
  margin: 10px;
  padding: 10px;
  width: 180px;
  text-align: center;
  font-size: 14px;
`


export default Footer;