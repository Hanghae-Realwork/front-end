import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const CREATE = 'recruit/CREATE'
const EDIT = 'recruit/EDIT'
const DELETE = 'recruit/DELETE'

const initialState = {
  reciveRecruit: [],
  recruit: []
};

export function loadRecruit(loadfunction) {
  return { type: LOAD, loadfunction };
}

export function createRecruit(postfunction) {
  return { type: CREATE, postfunction };
}

export function editRecruit(editfunction) {
  return { type: EDIT, editfunction };
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
        const img = res.data.projectsPhotos;
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
  schedule,
  photos
) => {
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
    schedule,
    photos
    )
  .then((res) => {
    dispatch(createRecruit({
      title: title,
      details: details,
      subscript: subscript,
      role: role,
      start: start,
      end: end,
      skills: skills,
      schedule: schedule,
      photos: photos
    }))
  })
  .catch((err) => {
    console.log(err)
  })

};
};


//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'recruit/LOAD': {
      return {
        reciveRecruit : action.loadfunction,
        recruit: state.recruit
      };
    }

    case 'recruit/CREATE' :{
      const writeProject = [
        action.postfunction,
        ...state.reciveRecruit
      ]

      return{
        reciveRecruit : writeProject,
        recruit: state.recruit        
      }
    }

    case "employ/MODIFY": {   
      return {
        reciveRecruit: state.reciveRecruit,
        recruit: action.editfunction,
      };
    }

    default:
      return state;
  }
}
