import { apis } from "../../shared/api";

const LOADAPPLY = "userpage/LOADAPPLY";
const LOADPROJECT = "userpage/LOADPROJECT"
const LOADRESUMES = "userpage/LOADRESUMES";
const LOAPROJECTS = "userpage/LOAPROJECTS";
const USERPHOTOS = "userpage/USERPHOTOS ";

const initialState = {
  Applications: [],
  Myprojects: [],
  Myresumes: [],
  Myproject:[]
};

export function loadApply(payload) {
  return { type: LOADAPPLY, payload };
}

export function loadProject(payload) {
  return { type: LOADPROJECT, payload };
}
export function loadResumes(payload) {
  return { type: LOADRESUMES, payload };
}
export function loadProjects(payload) {
  return { type: LOAPROJECTS, payload };
}
export function loadPhoto(payload) {
  return { type: USERPHOTOS, payload };
}

//middleware

//내 지원정보 조회
export const loadApplyAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userApply(nickname)
      .then((response) => {
      dispatch(loadApply(response.data));
      })
      .catch((err) => {

      });
  };
};

//내 모집현황 조회
export const loadProjectAxios = (nickname) => {

  return async function (dispatch) {
    await apis
      .userRecruit(nickname)
      .then((response) => {
      dispatch(loadProject(response.data));
      })
      .catch((err) => {
      });
  };
};
//내 resumes 조회
export const loadResumesAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userResumes(nickname)
      .then((response) => {
        dispatch(loadResumes(response.data));
      })
      .catch((err) => {
      });
  };
};
  //  - 10. 내 Project 조회
export const loadProjectsAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userProjects(nickname)
      .then((response) => {
        dispatch(loadProjects(response.data));
      })
      .catch((err) => {
      });
  };
};


//프로필 업로드
export const userPhotoAxios = (nickname,frm) => {
  return async function (dispatch) {
    let success = null;
    await apis
      .userPhoto(nickname,frm)
      .then((response) => {
        const img = response;
        success = img;
      })
      .catch((err) => {
        success = null;
      });
   
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "userpage/LOADAPPLY": {
      return {
        Applications: action.payload,
        Myprojects: state.Myprojects,
        Myresumes: state.Myresumes,
        Myproject: state.Myproject,
      };
    }

    case "userpage/LOADPROJECT": {
      return {
        Applications: state.Applications,
        Myprojects: action.payload,
        Myresumes: state.Myresumes,
        Myproject: state.Myproject,
      };
    }
    case "userpage/LOADRESUMES": {
      return {
        Applications: state.Applications,
        Myprojects: state.Myprojects,
        Myresumes: action.payload,
        Myproject: state.Myproject,
      };
    }
    case "userpage/LOAPROJECTS": {
      return {
        Applications: state.Applications,
        Myprojects: state.Myprojects,
        Myresumes: state.Myresumes,
        Myproject: action.payload,
      };
    }

    default:
      return state;
  }
}
