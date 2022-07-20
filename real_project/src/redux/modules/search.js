import { apis } from "../../shared/api";

const SKILLLOAD = "search/SKILLLOAD";
const ROLELOAD = "search/ROLELOAD";
const DATELOAD = "search/DATELOAD"



const initialState = {
  Skilltag: [],
  Roletag: [],
  Datetag: []
};



export function loadskill(payload) {
  return { type: SKILLLOAD, payload };
}

export function loadrole(payload) {
  return { type: ROLELOAD, payload };
}

export function loaddate(payload) {
  return { type: DATELOAD, payload };
}




export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "search/SKILLLOAD": {
      return {
        Skilltag: action.payload,
        Roletag: state.Roletag,
        Datetag: state.Datetag
      };
    }

    case "search/ROLELOAD": {
        return {
          Skilltag: state.Skilltag,
          Roletag: action.payload,
          Datetag: state.Datetag
        };
      }

    case "search/DATELOAD": {
    return {
        Skilltag: state.Skilltag,
        Roletag: state.Roletag,
        Datetag: action.payload
        };
    }  


    default:
      return state;
  }
}
