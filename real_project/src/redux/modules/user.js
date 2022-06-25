const LOGIN = "user/LOGIN";

export function login(id) {
  return { type: LOGIN, id };
}
const initialState = {
  signup: {},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/LOGIN": {
      return state;
    }
    default:
      return state;
  }
}
