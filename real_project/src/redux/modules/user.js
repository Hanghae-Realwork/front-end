import { apis } from "../../shared/api";
import { setCookie, deleteCookie } from "../../shared/cookie";

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO";
const CheckUserId = "user/CheckUserId";

const initialState = {
  signup: {
    userId: null,
    nickname: null,
    name: null,
    password: null,
    passwordCheck: null,
    policy: false,
  },
  userInfo: {
    userEmail: null,
    is_login: false,
  },
};

export function login(id) {

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
        password,
        passwordCheck,
        allCheck
      )
      .then(() => {
        res = true;
      })
      .catch((err) => {
        console.log(err)
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

//로그인
export const loginAxios = (userEmail, password) => {
  return async function (dispatch) {
 
    let success = null;
    await apis
      .login(userEmail, password)
      .then((res) => { 
        localStorage.setItem("accesstocken", res.data.token);
        // setCookie("refreshtoken", res.data.refreshtoken)    
        dispatch(login(userEmail));
        success = true;
      })
      .catch((error) => {
        success = false;

        console.log("에러나야함 refresh",error)
        if (error.response.status === 401) {
           console.log("401")
           // if error response status was 401 then request a new token
           dispatch(refreshAxios());
           window.location.reload();
         } else if (error.response.status === 403) {
           console.log("403")
           window.location.href = "/login";
         }

    return success;
  };
};

export const refreshAxios = () => {
  return async function (dispatch) {
    await apis.refresh().then((response) => {
        if (response.data.accessToken) {
          const user = JSON.parse(localStorage.getItem("user"));
          user.accessToken = response.data.accessToken;
          localStorage.setItem("user", JSON.stringify(user));
        }
    }).catch((error) => {
      console.log("server: " + JSON.stringify(error.response));
    })
  };
};

export const checkUserValidation = () => {
  return async function (dispatch) {
    await apis
      .checkUser()
      .then((res) => {
        dispatch(login(res));
      })
      .catch((err) => {
        dispatch(logOut());
        console.log(err);
      });
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
