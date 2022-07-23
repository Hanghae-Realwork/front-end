import { apis } from "../../shared/api";

//로드 액션
const LOADRESUMES = "interview/LOADRESUMES";



//이니셜 스테이트
const initialState = {
  resumes: [],

};

//로드 액션함수
export function loadResumes(payload) {
 
  return { type: LOADRESUMES, payload };
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

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // 로드 리듀서
    case "interview/LOADRESUMES": {
      return {
        resumes: action.payload,
      };
    }

    //삭제 리듀서

    default:
      return state;
  }
}
