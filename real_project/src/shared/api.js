import axios from "axios";

//이미지 데이터
const imgApi = axios.create({
  baseURL: "http://3.39.226.20/",
  headers: {
    "content-type": "multipart/form-data",
  },
});
//기존 api
const api = axios.create({
  baseURL: "http://3.39.226.20/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

//토큰
api.interceptors.request.use(function (config) {
  const accessToken = `${localStorage.getItem("token")}`;
  if (accessToken !== undefined) {
    config.headers.common["authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
//imgFrom토큰
imgApi.interceptors.request.use(function (config) {
  const accessToken = `${localStorage.getItem("token")}`;
  if (accessToken !== undefined) {
    config.headers.common["authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

//apis body
export const apis = {
  signup: (
    userId,
    nickname,
    name,
    birth,
    phoneNumber,
    password,
    passwordCheck,
    profileImage,
    allCheck
  ) =>
    api.post("/api/users/signup", {
      userId: userId,
      nickname: nickname,
      name: name,
      birth: birth,
      phone: phoneNumber,
      password: password,
      passwordCheck: passwordCheck,
      profileImage: profileImage,
      policy: allCheck,
    }),

  //   login: (userEmail, password) =>
  //     api.post("/api/users/login", { userEmail: userEmail, password: password }),

  loadprojects: () => api.get("/api/projects"),
  loadpost: (id) => api.get(`/api/detail/${id}`),
};

