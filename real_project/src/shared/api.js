import axios from "axios";

const api = axios.create({
  baseURL: "백엔드 서버 입력",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});


export const apis = {
    loadprojects: () => api.get("/api/projects"),
    loadpost: (id) => api.get(`/api/detail/${id}`),
    
}
