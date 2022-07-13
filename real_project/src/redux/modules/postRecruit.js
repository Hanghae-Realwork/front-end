import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const LOAD_ONE = 'recruitone/LOAD'
const CREATE = 'recruit/CREATE'
const EDIT = 'recruit/EDIT'
const DELETE = 'recruit/DELETE'

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

export function loadRecruitOne(discription) {
  return { type: LOAD_ONE, discription };
}

export function createRecruit(post) {
  return { type: CREATE, post };
}

export function editRecruit(put) {
  return { type: EDIT, put };
}

export function delRecruit(post_index) {
  return { type: DELETE, post_index };
}

// export fuction loadRecruit(discription)
// 프로젝트 리스트 호출
export const loadRecruitsApi = () => {
  return async function (dispatch) {
    await apis
      .projectsLoad()
      .then((response) => {

        let list = [];
        let projectsList = response.data.projects;
        const projects = projectsList.sort((a,b) => a.projectid - b.projectid)
        list = [...projects.reverse()]



        dispatch(loadRecruits(list));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// 프로젝트 디테일 호출

export const loadRecruitOneApi = (projectid) => async (dispatch) => {
  try {
    console.log(projectid);
    const { data } = await apis.projectsLoadDetail(projectid);
    console.log(data)
    dispatch(loadRecruitOne(data));
    console.log(data)
  }
  catch (err) {
    console.log(err);
  };
}

// 프로젝트 생성
export const createRecruitApi = (post) => {

  return async function (dispatch, getState) {

    try {
      console.log("프로젝트 생성 완료");
      console.log(post);
      const data = await apis.projectsCreate(post);
      // const data = { id: docRef.id, ...post };

      dispatch(createRecruit(data));
    } catch (e) {

      console.log(`프로젝트 오류 발생!${e}`);
    }
  };
};


//프로젝트 수정
export const editRecruitApi = (put) => {
  return async function (dispatch, getState) {
    try {
      console.log(put);
      const projectId=put.projectId
      
      await apis.projectsModify(
        projectId,
        put.title,
        put.details,
        put.subscript,
        put.role,
        put.start,
        put.end,
        put.skills,
        put.photos

      );
      // const data = { id: docRef.id, ...post };
      
      
      console.log("프로젝트 수정 완료");
    } catch (e) {

      console.log(`수정중 오류 발생!${e}`);
    }
  };
};


//프로젝트 삭제
export const delPostApi = (id) => {
  return async function (dispatch, getState) {
    try {
      
      console.log(id)
      await apis.projectsDelete(id);
    } catch (e) {}
  };
};


//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'recruit/LOAD': {

      return { projects: action.discription };
    }

    case 'recruitone/LOAD':{
      return { project: action.discription };
    }

    case 'recruit/CREATE': {
      console.log(action.post);
      const new_project_list = [action.post, ...state];
      return state;
    }

    // case 'recruit/EDIT': {
    //   console.log(action.put);
    //   const edit_porject_list = [...state]
    //   return state;
    // }

    default:
      return state;
  }
}
