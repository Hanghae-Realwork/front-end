import { apis } from "../../shared/api";

const LOADAPPLY = "userpage/LOADAPPLY";
const LOADPROJECT = "userpage/LOADPROJECT"

const initialState = {
  Applications: [],
  Myprojects: []
};

export function loadApply(payload) {
  return { type: LOADAPPLY, payload };
}

export function loadproject(payload) {
  return { type: LOADPROJECT, payload };
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
        console.log(err);
      });
  };
};

//내 모집현황 조회
export const loadProjectAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userRecruit(nickname)
      .then((response) => {
      dispatch(loadproject(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


//프로필 업로드
// export const applyPhotosAxios = (frm) => {
//   return async function (dispatch) {
//     let success = null;
//     await apis
//       .userPhotos(frm)
//       .then((response) => {
//         const img = response;
//         success = img;
//       })
//       .catch((err) => {
//         success = null;
//       });
//     return success;
//   };
// };

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "userpage/LOADAPPLY": {
      return {
        Applications: action.payload,
        Myprojects: state.Myprojects
      };
    }

    case "userpage/LOADPROJECT": {
      return {
        Applications: state.Applications,
        Myprojects: action.payload
      };
    }

    default:
      return state;
  }
}
