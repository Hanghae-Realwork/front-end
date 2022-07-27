import { resolvePath } from "react-router-dom";
import { apis } from "../../shared/api";

//로드 액션
const LOADRESUMES = "interview/LOADRESUMES";
const LOADPROJECTS = "interview/LOADPROJECTS";

const PROJECTINTERVIEW = "interview/PROJECTINTERVIEW";
const PERPOSEUSERPROJECT = "interview/PERPOSEUSERPROJECT";
//인터뷰 status 관리
const INTERVIEWINDSTATUS = "interview/INTERVIEWINDSTATUS";
const INTERVIEWMATCHSTATUS = "interview/INTERVIEWMATCHSTATUS";
//이니셜 스테이트
const initialState = {
  resumes: [],
  projects:[],
};

//로드 액션함수
export function loadResumes(payload) {
 
  return { type: LOADRESUMES, payload };
}

export function loadProjects(payload) {
  return { type: LOADPROJECTS, payload };
}

export function projectInterview(payload) {
  return { type: PROJECTINTERVIEW ,payload};
}

export function proposalUserProjects(payload) {
  return { type: PERPOSEUSERPROJECT, payload };
}

export function interviewEndStatus(payload) {
  return { type: INTERVIEWINDSTATUS, payload };
}

export function interviewMatchStatus(payload) {
  return { type: INTERVIEWMATCHSTATUS, payload };
}
//미들웨어
export const loadResumesAxios = () => {
  return async function (dispatch) {
    await apis
      .applicationsResumes()
        .then((res) => {
 
            dispatch(loadResumes(res.data.resumes));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loadProjectsAxios = () => {
  return async function (dispatch) {
    await apis
      .proposalsProjects()
      .then((res) => {
        console.log(res.data.projects);
        dispatch(loadProjects(res.data.projects))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const projectInterviewAxios = (applcationId,resumeId) => {
  return async function (dispatch) {
    await apis
      .projectInterview(applcationId, resumeId)
      .then((res) => {

       
          alert("성공적으로 예약되었습니다. 🥸");
      
      })
      .catch((err) => {
        console.log(err)
        if (err) {
          alert(err.response.data.errorMessage);
        }
        // console.log(err.response.status);
       
        // else if (err.message === "Request failed with status code 404") {
        //   alert("소개글도 같이 선택해주세요!");
        // }
      });
  }
}

//23. 지원서에 면접 제안시 내 프로젝트 목록 조회
export const proposalUserProjectsAxios = (resumeId, projectId) => {
  return async function (dispatch) {
    await apis
      .proposalUserProjects(resumeId, projectId)
      .then((res) => {

        alert(res.data.message);
   
      })
      .catch((err) => {
     
        alert(err.response.data.errorMessage);
        // if (err.response.status === 400) {
        //   alert(err.response.data.errorMessage);
        // }
        // else if (err.message === "Request failed with status code 404") {
        //   alert("소개글도 같이 선택해주세요!");
        // }
      });
  };
};
  //24.인터뷰 완료 상태 업데이트 
export const interviewEndStatusAxios = (applicationId) => {
  return async function (dispatch) {
    let success = null;
    await apis
      .interviewEndStatus(applicationId)
      .then((res) => {
        success = true;
        alert(res.data.message);
      })
      .catch((err) => {
        success = false;
        alert(err.response.data.errorMessage);
      
      }); return success;
  };
};
 // 24 - 2. 매칭 결과 상태 
export const interviewMatchStatusAxios = (applicationId,matching) => {
  return async function (dispatch) {
    let success = null;
    await apis
      .interviewMatchStatus(applicationId,matching)
      .then((res) => {
        success = true;
        alert(res.data.message);
      })
      .catch((err) => {
        success = false;
        alert(err.response.data.errorMessage);
      });
    return success;
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // 로드 리듀서
    case "interview/LOADRESUMES": {
       
      return {
        resumes: action.payload,
        projects: state.projects,
      };
    }
    case "interview/LOADPROJECTS": {
      return {
        resumes: state.resumes,
        projects: action.payload,
      };
    }
    
    //삭제 리듀서

    default:
      return state;
  }
}
