import axios from "axios";

const api = axios.create({
  baseURL: "http://44.204.90.116",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});


export const apis = {
    loadposts: () => api.get("/api/postList"),
    loadpost: (id) => api.get(`/api/detail/${id}`),
    
}