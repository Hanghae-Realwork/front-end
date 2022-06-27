import axios from "axios";

const api = axios.create({

  baseURL: "http://3.39.226.20/",



  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
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

    loadprojects: () => api.get("/api/projects"),
    loadpost: (id) => api.get(`/api/detail/${id}`),
    
}


