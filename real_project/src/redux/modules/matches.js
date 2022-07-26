import { resolvePath } from "react-router-dom";
import { apis } from "../../shared/api";

//로드 액션
const MATCHRESUMES = "matches/MATCHRESUMES";
const MATCHPROJECT = "matches/MATCHPROJECT";




//이니셜 스테이트
const initialState = {
  resumes: [],
  projects: [],
};

//로드 액션함수
export function matchesResumes(payload) {
  return { type: MATCHRESUMES, payload };
}

export function matchesProjects(payload) {
  return { type: MATCHPROJECT, payload };
}




//미들웨어
//프로젝트에 맞는 이력서 조회
export const matchesResumesAxios = (projectId) => {
  return async function (dispatch) {
    await apis
      .matchResumes(projectId)
        .then((res) => {
          console.log(res)
        dispatch(matchesResumes(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//이력서에 맞는 프로젝트 조회
export const matchesProjectsAxios = (resumeId) => {
  return async function (dispatch) {
    await apis
      .matchProjects(resumeId)
      .then((res) => {
        dispatch(matchesProjects(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};





export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // 로드 리듀서
    case "matches/MATCHRESUMES": {
      return {
        resumes: action.payload,
        projects: state.projects,
      };
    }
    case "matches/MATCHPROJECT": {
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
