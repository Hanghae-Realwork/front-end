import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const CREATE = 'recruit/CREATE'

const initialState = {
  list: {
    title: null,
    details: null,
    subscript: null,
    role: null,
    start: null,
    end: null,
    skills: null,
    email: null,
    phone: null,
    schedule: null,
  },
};

export function loadRecruits(discription) {
  return { type: LOAD, discription };
}

export function createRecruit(post) {
  return { type: CREATE, post };
}

//api연결

export const loadRecruitsApi = () => {
  return async function (dispatch) {
    await apis
      .projectsLoad()
      .then((response) => {
       
        let list = [];
        let projects = response.data.projects;
       
        list = [...projects.reverse()]

        
       
        dispatch(loadRecruits(list));
      })
      .catch((err) => {
        console.log(err);
      });
    } 
  };

  
// export const createRecruitApi = (post, userEmail) => {
//   // const token = localStorageGet("token");
//   // console.log("토큰", token);
//   return async function (dispatch, getState) {
//     // const user = getState().users.user;
//     // console.log("정보", getState().users.user);
//     const body = {
//       // users: user,
//       email: userEmail,
//     };
//     console.log(body);
//     try {
//       console.log("프로젝트 생성 완료");
//       const data = await apis.projectsCreate(post);
//       // const data = { id: docRef.id, ...post };
   
//       dispatch(createRecruit(data));
//     } catch (e) {
//       console.log(`프로젝트 오류 발생!${e}`);
//     }
//   };
// };

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'recruit/LOAD': {
        
      return {projects : action.discription};
    }
    // case 'recruit/CREATE': {
    //   const new_project_list = [...state, action.post];
    //   return { list: new_project_list };
    // }


    default:
      return state;
  }
}
