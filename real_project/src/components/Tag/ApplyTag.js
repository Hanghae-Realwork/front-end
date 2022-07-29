import React from "react"
import styled from "styled-components"

import Check from "../../image/check.svg"

function ApplyTag({list}) {

  return (
    <BeltWrap>
      {list.status === "matched" || list.status === "unmatched" ? (
        <>
          {" "}
          <CourseLabel
            style={
              list.available
                ? ""
                : {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
            }
          >
            지원서 접수 <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>
          <ConectLine />
          <CourseLabel
            style={
              list.available
                ? ""
                : {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
            }
          >
            면접 완료 <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>
          <ConectLine />
          <CourseLabel
            style={
              list.available
                ? ""
                : {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
            }
          >
            {list.status === "matched" ? "매칭 완료" : "다음 기회에"}{" "}
            <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>{" "}
        </>
      ) : (
        <>
          {" "}
          <CourseLabel
            style={
              list.available
                ? ""
                : {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
            }
          >
            지원서 접수 <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>
          <ConectLine />
          <CourseLabel
            style={
              list.status === "interviewed"
                ? {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
                : {}
            }
          >
            인터뷰 완료 <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>
          <ConectLine />
          <CourseLabel>
            매칭 완료
            <img src={Check} style={{ marginLeft: "6px" }}></img>
          </CourseLabel>{" "}
        </>
      )}
   
    </BeltWrap>
  );
}

const BeltWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  /* border: 1px solid black; */
  width: 389px;
`;

const CourseLabel = styled.label`
  padding: 8px 14px 8px 14px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: white;
`;

const ConectLine = styled.hr`
  width: 14px;
`;



export default ApplyTag;