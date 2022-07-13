import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const CREATE = 'recruit/CREATE'
const EDIT = 'recruit/EDIT'
const DELETE = 'recruit/DELETE'

const initialState = {
  receiveRecruit: [],
  recruit: []
};

export function loadRecruit(payload) {
  return { type: LOAD, payload };
}

export function createRecruit(payload) {
  return { type: CREATE, payload };
}

//미들믿을
export const loadRecruitAxios = () => {
  return async function (dispatch) {
    await apis
      .projectsLoad()
      .then((res) => {
        let list = [];
        let project = res.data.projects
        list = [...project]
        dispatch(loadRecruit(list));
      })
      .catch((err) => {
        console.log(err);
      });
    } 
  };

export const projectsPhotosAxios = (frm) => {
  console.log(frm)
  return async function (dispatch) {
    let success = null;
    await apis
      .projectsPhotos(frm)
      .then((res) => {
        const img = res.data.photos;
        success = img;
      }).catch((err) => {
        success = null;
      })
    return success; 
  }
}


export const createRecruitAxios = (
  title, 
  details, 
  subscript, 
  role, 
  start, 
  end, 

  skills,
  photos,
  schedule

) => {
  console.log({
    title: title,
    details: details,
    subscript: subscript,
    role: role,
    start: start,
    end: end,
    skills: skills,
    photos: photos,
    schedule: schedule,
  });
  return async function (dispatch) {
    await apis

      .projectsCreate(
        title,
        details,
        subscript,
        role,
        start,
        end,
        skills,
        photos,
        schedule
      )
      .then((res) => {
        dispatch(
          createRecruit({
            title: title,
            details: details,
            subscript: subscript,
            role: role,
            start: start,
            end: end,
            skills: skills,
            photos:photos,
            schedule: schedule,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });

};
};


//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'recruit/LOAD': {
 
      return {
        receiveRecruit : action.payload,
        recruit: state.recruit
      };
    }

    case 'recruit/CREATE': {
      console.log(action.payload)
      const writeProject = [action.payload, ...state.receiveRecruit];

      return{
        reciveRecruit : writeProject,
        recruit: state.recruit        
      }
    }

    default:
      return state;
  }
}
