import { apis } from "../../shared/api";


const LOAD = 'employ/LOAD';
const CREATE = "employ/CREATE";

const initialState = {
  list: {
    resumeId: null,
    resumeImage: null,
    nickname: null,
    content: null,
    start: null,
    end: null,
    role: null,
    skills: null,
  },
};

export function loadEmploy(payload) {
  return { type: LOAD, payload };
}
export function createEmploy(payload) {
  return { type: CREATE, payload };
}

//middleware
export const loadEmployAxios = () => {
  return async function (dispatch) {
    await apis
      .resumesLoad()
      .then((response) => {

        let list= []
        let resumes = response.data.returnResumes;
        list = [...resumes];
        dispatch(loadEmploy(list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "employ/LOAD": {
      return {
        returnResumes: action.payload,
      };
    }
    case "employ/CREATE": {
      console.log(action.payload)
      return {state};
    }
    default:
      return state;
  }
}