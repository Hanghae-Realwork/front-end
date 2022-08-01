import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { interviewEndStatusAxios, interviewMatchStatusAxios } from "../../redux/modules/interview";
import { loadProjectAxios } from "../../redux/modules/postProfile";

import check from "../../image/check.svg"


function RecruitTag({list}) {

  const dispatch = useDispatch();

  return (
    <LoadWrap>
      {list.status === "matched" || list.status === "unmatched" ? (
        <>
          <ApplyStatusLabel
            style={{
              fontWeight: "600",
              border: "1.5px solid black",
              backgroundColor: "ghostwhite",
            }}
          >
            지원서 접수
            <img src={check} />
          </ApplyStatusLabel>
          <ApplyLine />
          <InterviewStatusLabel
            style={{
              fontWeight: "600",
              border: "1.5px solid black",
              backgroundColor: "ghostwhite",
            }}
          >
            인터뷰 완료
            <img src={check} />
          </InterviewStatusLabel>

          <ApplyLine />
          <RecruitmentStatusLabel
            style={{
              fontWeight: "600",
              border: "1.5px solid black",
              backgroundColor: "ghostwhite",
            }}
          >
            {list.status === "matched" ? "매칭 완료" : "다음 기회에"}
            <img src={check} />
          </RecruitmentStatusLabel>
        </>
      ) : (
        <>
          <ApplyStatusLabel
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
            지원서 접수
            <img src={check} />
          </ApplyStatusLabel>
          <ApplyLine />
          <InterviewStatusLabel
            style={
              list.status === "interviewed"
                ? {
                    fontWeight: "600",
                    border: "1.5px solid black",
                    backgroundColor: "ghostwhite",
                  }
                : {}
            }
            onClick={() => {
              if (list.status === "interviewed") {
                {
                  alert("인터뷰가 완료되었습니다.");
                }
              } else {
                if (window.confirm("인터뷰를 완료하시나요?")) {
                  dispatch(interviewEndStatusAxios(list.applicationId)).then(
                    (success) => {
                      if (success) {
                        dispatch(loadProjectAxios());
                      } else {
                        return;
                      }
                    }
                  );
                } else {
                  return;
                }
              }
            }}
          >
            인터뷰 완료
            <img src={check} />
          </InterviewStatusLabel>
          <ApplyLine />

          <RecruitmentStatusLabel
            onClick={() => {
              if (window.confirm("함께 하실건가요? 취소 시 불합격")) {
                dispatch(
                  interviewMatchStatusAxios(list.applicationId, "matched")
                ).then((success) => {
                  if (success) {
                    dispatch(loadProjectAxios());
                  } else {
                    return;
                  }
                });
              } else {
                //매칭실패시
                //unmatched
                dispatch(
                  interviewMatchStatusAxios(list.applicationId, "unmatched")
                ).then((success) => {
                  if (success) {
                    dispatch(loadProjectAxios());
                  } else {
                    return;
                  }
                });
              }
            }}
          >
            모집 완료
            <img src={check} />
          </RecruitmentStatusLabel>
        </>
      )}
    </LoadWrap>
  );
}

const LoadWrap = styled.div`
  width: 120px;
  height: 307px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const RecruitmentStatusLabel = styled.label`
  padding: 8px 15px 8px 15px;
  width: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  font-size: 13px;
`;

const ApplyLine = styled.hr`
  border: 1px solid #000; 
  height: 30px;
  margin-top: -1px;
  margin-bottom: -1px;
`;

const ApplyStatusLabel = styled.label`
  padding: 8px 15px 8px 15px;
  width: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  font-size: 13px;
`;

const InterviewStatusLabel = styled.label`
  padding: 8px 15px 8px 15px;
  width: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  font-size: 13px;

`;

export default RecruitTag