import { apis } from "../../shared/api";

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO";
const CheckUserId = "user/CheckUserId";

const initialState = {
  signup: {
    userId: null,
    nickname: null,
    name: null,
    phone: null,
    password: null,
    passwordCheck: null,
    policy: false,
  },
  userInfo: {
    userEmail: null,
    is_login: null,
  },
};

export function login(id) {
  console.log(id)
  return { type: LOGIN, id };
}

export function logOut(userInfo) {
  return { type: LOGOUT, userInfo };
}
export function userInfo(infototal) {
  return { type: USERINFO, infototal };
}
export function userId(checkId) {
  return { type: CheckUserId, checkId };
}

//middleWare
export const signupAxios = (
  userId,
  nickname,
  name,
  birth,
  phoneNumber,
  password,
  passwordCheck,
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
        allCheck
      )
      .then(() => {
        res = true;
      })
      .catch((err) => {
        res = false;
      });
    return res;
  };
};

//아이디 중복검사
export const checkUserIdAxios = (userId) => {
  return async function (dispatch) {
    let checksuccess = null;
    await apis
      .checkUserId(userId)
      .then(() => {
        checksuccess = true;
      })
      .catch((err) => {
        checksuccess = false;
      });
    return checksuccess;
  };
};

export const checkUserNicknameAxios = (nickname) => {
  return async function (dispatch) {
    let checksuccess = null;
    await apis
      .checkUserNickname(nickname)
      .then(() => {
        checksuccess = true;
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
        checksuccess = false;
      });
    return checksuccess;
  };
};

export const loginAxios = (userEmail, password) => {
  return async function (dispatch) {
    console.log(userEmail, password)
    let success = null;
    await apis
      .login(userEmail, password)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        dispatch(login(userEmail));
        success = true;
      })
      .catch((err) => {
        success = false;
        ;
      });
    return success;
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
    case "user/USERINFO":
      {
        const newUserInfo = action.info;
        return {
          signup: newUserInfo,
          userInfo: state.userInfo,
        };
      }

      return state;
  }
}
