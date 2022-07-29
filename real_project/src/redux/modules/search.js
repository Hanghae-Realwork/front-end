import { apis } from "../../shared/api";

//로드 액션
const SKILLLOAD = "search/SKILLLOAD";
const ROLELOAD = "search/ROLELOAD";
const DATELOAD = "search/DATELOAD"

//검색 결과
const LOADRESULT = "search/LOADRESULT"
const RESUMERESULT = "search/RESUMERESULT"

//삭제 및 검색 액션
const SKILLDELETE = "search/SKILLDELETE";
const COMPLETE = "search/COMPLETE";

//검색 초기화
const RESULTRESET = "search/RESULTRESET"



//이니셜 스테이트
const initialState = {
  Skilltag: [],
  Roletag: [],
  Datetag: [],
  SearchResult: [],
  SearchResume: []
};


//로드 액션함수
export function loadskill(payload) {
 
  return { type: SKILLLOAD, payload };
}

export function loadrole(payload) {
 
  return { type: ROLELOAD, payload };
}

export function loaddate(payload) {

  return { type: DATELOAD, payload };
}

export function loadresult(payload) {

  return { type: LOADRESULT, payload };
}

export function loadresumeresult(payload) {

  return { type: RESUMERESULT, payload };
}


//삭제 액션함수
export function skillDelete(payload) {

  return { type: SKILLDELETE, payload };
}

//검색기능 액션함수
export function complete(payload) {
  return { type: COMPLETE, payload };
}

//리셋 액션함수
export function resetresult(payload){
  return {type: RESULTRESET, payload}
}




//미들웨어
export const SearchAxios = (
  role,
  skill,
  start,
  end
  ) => {
    // console.log('role',role)
    // console.log('skill',skill)
    // console.log('start',start)
    // console.log('end',end)

  return async function (dispatch) {
    await apis
      .searchProject(
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
      dispatch(loadresult(res.data.skillFilteredProjects))
        alert("선택하신 조건으로 검색이 완료되었습니다")  
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const SearchResumeAxios = (
  role,
  skills,
  start,
  end
  ) => {
    // console.log('role',role)
    // console.log('skill',skills)
    // console.log('start',start)
    // console.log('end',end)

  return async function (dispatch) {
    await apis
      .searchResume(
        role,
        skills,
        start,
        end
      )
      .then((res) => {
        console.log(res)
      dispatch(complete({
        role: role,
        skills: skills,
        start: start,
        end: end
      }));
      dispatch(loadresumeresult(res.data.skillFilteredResumes))
        
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
        SearchResult: state.SearchResult,
        SearchResume: state.SearchResume
      };
    }

    case "search/ROLELOAD": {
      return {
        Skilltag: state.Skilltag,
        Roletag: action.payload,
        Datetag: state.Datetag,
        SearchResult: state.SearchResult,
        SearchResume: state.SearchResume
      };
    }

    case "search/DATELOAD": {
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: action.payload,
        SearchResult: state.SearchResult,
        SearchResume: state.SearchResume
      };
    }


    //검색버튼 리듀서
    case "search/COMPLETE": {
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: state.Datetag,
        SearchResult: state.SearchResult,
        SearchResume: state.SearchResume
      };
    }


    //프로젝트 검색결과 리듀서
    case "search/LOADRESULT": {
      // const result = [action.payload, ...state.SearchResult]
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: state.Datetag,
        SearchResult: action.payload,
        SearchResume: state.SearchResume
      };
    }

    //리쥬메 검색 결과 리듀서
    case "search/RESUMERESULT": {
      // const result = [action.payload, ...state.SearchResult]
      return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: state.Datetag,
        SearchResult: state.SearchResult,
        SearchResume: action.payload
      };
    }

    //결과 초기화 리듀서
    case "search/RESULTRESET":{
      return{
        Skilltag: [],
        Roletag: [],
        Datetag: [],
        SearchResult: [],
        SearchResume: []
      }
    }


    //삭제 리듀서
    case "search/SKILLDELETE": {
      
      const new_list = state.Skilltag.filter((list) => {
        return list !== action.payload;
      })
      return {
        Skilltag: [...new_list],
        Roletag: state.Roletag,
        Datetag: state.Datetag,
        SearchResult: state.SearchResult,
        SearchResume: state.SearchResume
      };
    }

    default:
      return state;
  }
}
