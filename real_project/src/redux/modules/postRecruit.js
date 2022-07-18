import { sk } from "date-fns/locale";
import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const CREATE = 'recruit/CREATE';
const EDIT = 'recruit/EDIT';
const DETAIL = 'recruit/DETAIL';
const DELETE = 'recruit/DELETE';
const APPOINT = 'recruit/APPOINT';

const initialState = {
  receiveRecruit: [],
  project: []
};

export function loadRecruit(payload) {
  return { type: LOAD, payload };
}

export function createRecruit(payload) {
  return { type: CREATE, payload };
}

export function editRecruit(payload) {
  return { type: EDIT, payload };
}

export function detailRecruit(payload) {
  return { type: DETAIL, payload };
}

export function deleteRecruit(payload) { 
  return { type: DELETE, payload};
}

export function appointRecruit(payload) {
  return { typpe: APPOINT, payload };
}


//미들믿을
export const loadRecruitAxios = () => {
  return async function (dispatch) {
    await apis
      .projectsLoad()
      .then((res) => {
        let list = [];
        let project = res.data.projects.reverse()
        list = [...project]
        dispatch(loadRecruit(list));
      })
      .catch((err) => {
        console.log(err);
      });
    } 
  };


export const projectsPhotosAxios = (frm) => {

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

export const LoadDetailAxios = (projectId) => {
  return async function(dispatch, useState) {
    await apis
    .projectsLoadDetail(projectId)
    .then((res) => {
      // console.log(res.data.project)
      dispatch(detailRecruit(res.data.project))
    })
    .catch((err) => {
      console.log(err)
    })
  }
}


export const editRecruitAxios = (
  projectId,
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
  return async function(dispatch) {
    await apis
      .projectsModify(
      projectId,
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
        editRecruit({
          title: title,
          details: details,
          subscript: subscript,
          role: role,
          start: start,
          end: end,
          skills: skills,
          photos: photos,
          schedule: schedule,
        })
      );
    }).catch((err) => {
      console.log(err)
    })
  };
};


export const deleteRecruitAxios = (projectId) => {
  console.log(projectId)
  return async function (dispatch) {
    await apis
      .projectsDelete(projectId)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};
//예약 미들웨어
export const appointmentRecruitAxios = (
  projectId, 
  applicationId
  ) => {
    return async function(dispatch) {
    await apis
    .appointmentProject(
      projectId, 
      applicationId
    )
    .then((res) => {
      dispatch(
        appointRecruit({
          projectId: projectId,
          applicationId: applicationId
        })
      );
    });
  };
}



 
//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'recruit/LOAD': {
      return {
        receiveRecruit : action.payload,
        recruit: state.recruit
      };
    }

    case 'recruit/DETAIL':{
      
      const projects = [action.payload]
      // console.log(projects)
      return { 
        receiveRecruit: action.state, 
        project: projects}
    }

    case 'recruit/CREATE': {
      const writeProject = [action.payload, ...state.receiveRecruit];
      return{
        reciveRecruit : writeProject,
        recruit : state.recruit        
      }
    }

    case 'recruit/EDIT': {   
      return {
        reciveRecruit: state.receiveRecruit,
        project: action.payload,
      };
    }

    case 'recruit/APPOINT': {
      return{
        reciveRecruit: state.receiveRecruit,
        recruit: action.payload,
      }
    }

    default:
      return state;
  }
}