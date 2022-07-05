import { apis } from "../../shared/api"

//Action
const LOAD = "recruits/LOAD";
const LOAD_ID = "recruit/LOAD_ID";
const ADD = "recruit/ADD";
const DELETE = "recruit/DELETE";

// Action Creator
export function projectsLoad(Recruits) {
    return { type: LOAD, Recruits };
}

export function projectsLoadDetail(data, postId) {
    return { type: LOAD_ID, data, postId };
}

export function projectsCreate(data) {
    console.log("프로젝트 생성!", data);
    return { type: ADD, data: data };
}

export function deletePost(recruit_index) {
    console.log("지울 인덱스", recruit_index);
    return { type: DELETE, recruit_index };
}



//프로젝트 생성하기
export const createPostApi = (recruit, userEmail) => {
    // const token = localStorageGet("token");
    // console.log("토큰", token);
    return async function (dispatch, getState) {
      const user = getState().users.user;
      console.log("유저정보", getState().users.user);
      const body = {
        users: user,
        userEmail: userEmail,
      };
      console.log(body);
      try {
        console.log("api에 데이터를 추가할거여");
        const docRef = await apis.projectsCreate(recruit);
        const data = { id: docRef.id, ...recruit };
        console.log(data);
        dispatch(projectsCreate(data.data));
      } catch (e) {
        console.log(`포스팅 추가 오류 발생!${e}`);
      }
    };
  };