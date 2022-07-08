import { apis } from "../../shared/api";


const LOAD = 'employ/LOAD';

const initialState = {
  resumes : {
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

export function loadEmploy(load) {
  return { type: LOAD, load };
}

//middleware
export const loadEmployAxios = () => {
  return async function (dispatch) {
    await apis
      .resumesLoad()
      .then((response) => {
        let list= []
        let resumes = response.data.resumes
        list = [...resumes.reverse()];

      
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
    case 'employ/LOAD': {
      return {
        list: action.load,
      };
    }
    default:
      return state;
  }
}