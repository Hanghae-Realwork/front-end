import { apis } from "../../shared/api";

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
  signup: {
    userId: null,
    nickname: null,
    name: null,
    phone: null,
    password: null,
    passwordCheck: null,
    policy: null,
  },
  userInfo: {
    userEmail: null,
    is_login: null,
  },
};

export const signupAxios = (
  userId,
  nickname,
  name,
  birth,
  phoneNumber,
  password,
  passwordCheck,
  profileImage,
  allCheck
) => {
  return async function (dispatch) {
    let res = null;
    await apis
      .signup(
        userId,
        nickname,
        name,
        birth,
        phoneNumber,
        password,
        passwordCheck,
        profileImage,
        allCheck
      )
      .then(() => {
        res = true;
      })
      .catch((err) => {
        console.log(err);
        res = false;
      });
    return res;
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      // case "user/USERINFO":
      //   {
      //     const newUserInfo = action.info;
      //     return {
      //       signup: newUserInfo,
      //       userInfo: state.userInfo,
      //     };
      //   }
      return state;
  }
}
