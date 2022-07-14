import { apis } from "../../shared/api";

const LOADAPPLY = "userpage/LOADAPPLY";

const initialState = {
  Applications: [],
};

export function loadApply(payload) {
  return { type: LOADAPPLY, payload };
}

//middleware
//내 지원정보 조회
export const loadApplyAxios = () => {
  return async function (dispatch) {
    await apis
      .resumesLoad()
      .then((response) => {
        let list = [];
        let resumes = response.data.returnResumes;
        list = [...resumes];

        
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
      return { Applications: action.payload };
    }

    default:
      return state;
  }
}
