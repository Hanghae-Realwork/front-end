import { apis } from "../../shared/api";
import { setCookie, deleteCookie,getCookie } from "../../shared/cookie";

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
    nickname:null,
    is_login: false,
  },
};

export function login(payload) {
  return { type: LOGIN, payload };
}
export function logOut(payload) {

  return { type: LOGOUT, payload };
}
export function userInfo(infototal) {
  return { type: USERINFO, infototal };
}
export function userId(payload) {
  return { type: CheckUserId, payload };
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
      .login(userEmail, password, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(checkUserValidation());
        // dispatch(login({ userId:userEmail }));
         success = true;
        
      })
      .catch((error) => {
        success = false;
        console.log(error)
      });
    return success;
  };
};

export const checkUserValidation = () => {
  return async function (dispatch) {
    await apis
      .checkUser()
      .then((res) => {

        dispatch(
          login({ userId: res.data.userId, nickname: res.data.nickname })
        );
      })
      .catch((err) => {
 
        //TokenExpiredError
       
        // if (err.response.data.errorMessage === "Token is expired") {
        //   dispatch(refreshAxios());
        // }

        // console.log(err)
        // logOut();
        alert("토큰이 만료되셨네요🥹");
      });
  };
};



// version 2 cookies
// export const checkUserValidation = () => {
//   const atoken = getCookie("ACCESS_TOKEN");
//   const rtoken = getCookie("REFRESH_TOKEN");
//   return async function (dispatch) {
//     if ((atoken, rtoken)) {
//       await apis
//       .checkUser()
//       .then((res) => {
//         console.log("res", res);
//         dispatch(login(res))
//       }).catch((err) => {
//         // dispatch(logOut());
//         console.log("err", err);
//         if (err.response.status === 401) {
//           dispatch(refreshAxios());
//           // window.location.reload()
//         }
//       });
//     }
//   };
// };


// export const refreshAxios = () => {
//   return async function (dispatch) {
//     await apis
//       .refresh({ withCredentials: true })
//       .then((response) => {
//         console.log("refresh", response);
//         if (response.data.accessToken) {
//           const user = JSON.parse(localStorage.getItem("user"));
//           user.accessToken = response.data.accessToken;
//           localStorage.setItem("user", JSON.stringify(user));
//         }
//       })
//       .catch((error) => {
//         console.log("server", error);
//       });
//   };
// };




export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "user/LOGIN": {
      // console.log(action.payload)
      const newUserInfo = {
        userId: action.payload.userId,
        nickname:action.payload.nickname,
        is_login: true,
      };
      return {
        signup: state.info,
        userInfo: newUserInfo,
      };
    }
    case "user/LOGOUT": {
      console.log("Logout:reducer")
      // console.log(action.payload)
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      localStorage.removeItem("token");
      // deleteCookie("ACCESS_TOKEN");
      // deleteCookie("REFRESH_TOKEN");
      const newUserInfo = {
        userEmail: null,
        nickname:null,
        is_login: false,
      };
      return {
        signup: state.info,
        userInfo: newUserInfo,
      };
    }


    default:
      return state;
  }
}
