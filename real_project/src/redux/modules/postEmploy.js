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
console.log(response)
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

export const projectsPhotosAxios = (frm) => {
  return async function (dispatch) {
    let success = null;
    await apis
      .projectsPhotos(frm)
      .then((response) => {
        const img = response.data.resumeImage;
        success = img;
      }).catch((err) => {
        success = null;
      })
    return success; 
  }
}

export const resumesCreateAxios = (
  content,
  resumeImage,
  start,
  end,
  role,
  skills,
  content2,
  content3
) => {
  return async function (dispatch) {
    await apis
      .resumesCreate(
        content,
        resumeImage,
        start,
        end,
        role,
        skills,
        content2,
        content3
      )
      .then((response) => {
       
        dispatch(createEmploy({content:content,resumeImage:resumeImage,start:start,end:end,role:role,skill:skills,content2:content2,content3:content3}));
      });
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "employ/LOAD": {
  
      return {returnResumes: action.payload};
    }
    case "employ/CREATE": {

      const newResumes = [action.payload, ...state.returnResumes];
  
      return {returnResumes: newResumes}
    }
    default:
      return state;
  }
}