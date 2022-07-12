import { apis } from "../../shared/api";

const LOAD = "userEmploy/LOAD";

const initialState = {
  resumes: {
    resumeId: null,
    userId: null,
    nickname: null,
    content: null,
    resumeImage: null,
    start: null,
    end: null,
    Stringrole: null,
    skill: null,
    content2: null,
    content3: null,
  },
};



export function userEmploy(payload) {
  return { type: LOAD, payload };
}


//middleware
export const userEmployAxios = () => {
  return async function (dispatch) {
    await apis
      .resumesLoad()
      .then((response) => {
       
        let list = [];
        let resumes = response.data.returnResumes;
        list = [...resumes];
        // dispatch(loadEmploy(list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "userEmploy/LOAD": {
      return { resumes: action.payload };
    }

    default:
      return state;
  }
}
