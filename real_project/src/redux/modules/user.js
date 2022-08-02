import { apis } from "../../shared/api";

const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO";
const CheckUserId = "user/CheckUserId";
const VALIDATION = "user/VALIDATION";
const CHECKEMAIL = "user/CHECKEMAIL";

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
export function validation(payload) {
  return { type: VALIDATION, payload };
}
export function checkEmail(payload) {
   return { type: CHECKEMAIL, payload };
}
//middleWare
//회원가입
export const signupAxios = (
  userId,
  nickname,
  code,
  password,
  passwordCheck,
  allCheck
) => {
  return async function (dispatch) {
    let res = null;
    await apis
      .signup(userId, nickname, code, password, passwordCheck, allCheck)
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

//닉네임 중복검사
export const checkUserNicknameAxios = (nickname) => {
  return async function (dispatch) {
    let checksuccess = null;
    await apis
      .checkUserNickname(nickname)
      .then(() => {
        checksuccess = true;
      })
      .catch((err) => {
       
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
        // dispatch(validation())
        dispatch(checkUserValidation())
        dispatch(login({ userId:userEmail }));

        success = true;
      }).catch((error) => {
        success = false;
        if (error.request.status === 400) {
          alert("아이디와 비밀번호를 확인해주세욥 🥸 ");
        } else if (error.request.status === 401) {
          alert("아이디 또는 비밀번호가 일치하지 않습니다. 🥸 ");
        }
      });
    return success;
  };
  
};
//user정보조회
export const checkUserValidation = () => {
  return async function (dispatch) {
    await apis
      .checkUser()
      .then((res) => {
        if (res.data.message === "토큰이 재발급 됐습니다.") {
          localStorage.setItem("token", res.data.token);
        }
          dispatch(
            login({
              userId: res.data.userId,
              nickname: res.data.nickname,
              profileImage: res.data.profileImage,
            })
          );
      })
      .catch((err) => {
      });
  };
};
  //  - 9. 이메일 코드
export const checkEmailAxios = (userId, code) => {
  return async function (dispatch) {
    let checksuccess = null;
    await apis
      .checkEmail(userId, code)
      .then((res) => {
        checksuccess = true;
        })
      .catch((err) => {
        checksuccess = false;
      });
    return checksuccess;
  };
};

export const logOutAxios = () => {
  return async function (dispatch) {
    await apis
      .userlogOut().
      then((res) => {
        dispatch(logOut());
      }).catch((err) => {
      })
  }
}
  //  - 9. 회원탈퇴
export const userDeleteAxios = (nickname,password) => {
  return async function (dispatch) {
    await apis
      .userDelete(nickname, password)
      .then((res) => {
        dispatch(logOut())
      })
      .catch((err) => {
      });
  };
};



export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "user/LOGIN": {

      const newUserInfo = {
        userId: action.payload.userId,
        nickname: action.payload.nickname,
        profileImage: action.payload.profileImage,
        is_login: true,
      };
      return {
        signup: state.info,
        userInfo: newUserInfo,
      };
    }
    case "user/LOGOUT": {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");

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
