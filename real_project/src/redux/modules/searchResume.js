import { apis } from "../../shared/api";

//로드 액션
const SKILLLOAD = "search/SKILLLOAD";
const ROLELOAD = "search/ROLELOAD";
const DATELOAD = "search/DATELOAD"

//삭제 및 검색 액션
const SKILLDELETE = "search/SKILLDELETE";
const COMPLETE = "search/COMPLETE";


//이니셜 스테이트
const initialState = {
  Skilltag: [],
  Roletag: [],
  Datetag: []
};


//로드 액션함수
export function loadskill(payload) {
  console.log(payload)
  return { type: SKILLLOAD, payload };
}

export function loadrole(payload) {
  console.log(payload)
  return { type: ROLELOAD, payload };
}

export function loaddate(payload) {
  console.log(payload)
  return { type: DATELOAD, payload };
}


//삭제 액션함수
export function skillDelete(payload) {
  return { type: SKILLDELETE, payload };
}

//검색기능 액션함수
export function complete(payload) {
  return { type: COMPLETE, payload };
}


//미들웨어
export const SearchResumeAxios = (
  role,
  skill,
  start,
  end
  ) => {
    console.log('role',role)
    console.log('skill',skill)
    console.log('start',start)
    console.log('end',end)

  return async function (dispatch) {
    await apis
      .searchResume(
        role,
        skill,
        start,
        end
      )
      .then((res) => {
        console.log(res)
      dispatch(complete({
        role: role,
        skill: skill,
        start: start,
        end: end
      }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    // 로드 리듀서
    case "search/SKILLLOAD": {
      return {
        Skilltag: action.payload,
        Roletag: state.Roletag,
        Datetag: state.Datetag,
      };
    }

    case "search/ROLELOAD": {
      return {
        Skilltag: state.Skilltag,
        Roletag: action.payload,
        Datetag: state.Datetag,
      };
    }

    case "search/DATELOAD": {
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: action.payload,
      };
    }


    //검색버튼 리듀서
    case "search/COMPLETE": {
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: state.Datetag,
      };
    }



    //삭제 리듀서
    case "search/SKILLDELETE": {
      const deleteTag = state.Skilltag.splice((idx) => {
        return action.payload
      })
      return {
        Skilltag: [...state.Skilltag, deleteTag],
        Roletag: state.Roletag,
        Datetag: state.Datetag,
      };
    }

    default:
      return state;
  }
}
