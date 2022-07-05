import { apis } from "../../shared/api";

const LOAD = "recruit/LOAD";
const CREATE = "recruit/CREATE"

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

export function load(discription) {
  return { type: LOAD, discription };
}

export function create(discription) {
  return { type: CREATE, discription };
}

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "recruit/LOAD": {
      return {
        list: action.discription,
      };
    }

    default:
      return state;
  }
}
