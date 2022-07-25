import { apis } from "../../shared/api";

//로드 액션
const LOADRESUMES = "interview/LOADRESUMES";
const LOADPROJECTS = "interview/LOADPROJECTS";

const PROJECTINTERVIEW = "interview/PROJECTINTERVIEW";

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status===404) { 
          alert("이미 해당 프로젝트에 지원하셨습니다!🥸");
        }
      });
  }
}


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
