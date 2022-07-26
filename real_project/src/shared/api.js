import axios from "axios";



//이미지 데이터
const imgApi = axios.create({
  baseURL: "https://sprata-owl.shop/",
  headers: {
    "content-type": "multipart/form-data",
    withCredentials: true,
  },
});
//기존 api
const api = axios.create({
  baseURL: "https://sprata-owl.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
  credentials: "include",
});


// 테스트(재영님)
// baseURL: "http://13.125.145.26/",

// 테스트(형진님)
// baseURL: "http://52.78.205.196/",

// 주혁님 코드 : https
  // baseURL: "https://43.200.119.149/",
  // baseURL: "https://rendev.link/",

  //토큰
  api.interceptors.request.use(function (config) {
    const accessToken = `${localStorage.getItem("token")}`;
    //  const rtoken = getCookie("REFRESH_TOKEN");
    config.headers.common["authorization"] = `Bearer ${accessToken}`;
    // config.headers.common["Cookies"] = `Bearer ${rtoken}`;
   
    return config;
  });


//imgForm토큰
imgApi.interceptors.request.use(function (config) {
  const accessToken = `${localStorage.getItem("token")}`;

  if (accessToken !== undefined) {
    config.headers.common["authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});


api.interceptors.response.use(
  (response) => {
    // console.log("response",response)
    return response;
  },
//   async function (error) {
//     // console.log(error)
//     const originalRequest = error.config;
//     if (error.response.status === 401) {
//       console.log("토큰 만료");
      
//       const sessionObj = window.sessionStorage.getItem('userInfo');
//       let userInfo = sessionObj ? JSON.parse(sessionObj) : null;
//       const refreshToken = cookies.get("refreshToken");
//       const access_token = await authApi.post(
//         "api/refresh", // token refresh api
//         {
//           refreshToken,
//         }
//       );
//       console.log(access_token.data.accessToken);
//       const newAccessToken = access_token.data.accessToken;
//       originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//       localStorage.setItem("accessToken", newAccessToken);
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
);




//apis body
export const apis = {
  ///////////////////////
  ////<1. 회원관리 API>////
  ///////////////////////

  //  - 1. 회원가입
  signup: (userId, nickname, name, birth, password, passwordCheck, allCheck) =>
    api.post("/api/users/signup", {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
      name: name,
      birth: birth,
      policy: allCheck,
    }),

  //  - 2.로그인
  login: (userId, password) =>
    api.post("/api/users/login", { userId: userId, password: password }),

  //  - 3.유저정보 조회
  checkUser: () => api.get("/api/users/auth"),

  //  - 4. 유저정보 받기(불필요한 경우 삭제)
  userInformation: (nickname) => api.get(`/api/users/details/${nickname}`),

  //  - 5. 비밀번호 변경
  userInformationModify: (
    userId,
    nickname,
    name,
    birth,
    password,
    passwordCheck,
    allCheck
  ) =>
    api.put(`/api/users/details/${nickname}/upadatepw`, {
      userId: userId,
      nickname: nickname,
      name: name,
      birth: birth,
      password: password,
      passwordCheck: passwordCheck,
      policy: allCheck,
    }),

  //  - 6. 아이디 중복검사
  checkUserId: (userId) =>
    api.post("/api/users/signup/checkUserId", {
      userId: userId,
    }),

  //  - 7. 닉네임 중복검사
  checkUserNickname: (nickname) =>
    api.post("/api/users/signup/checkNickname", {
      nickname: nickname,
    }),

  //  - 8. 토큰 재발급
  // 재발급 과정 스터디 필요
  refresh: () => api.post("/api/users/refresh"),

  //  - 9. 회원탈퇴
  userDelete: (nickname, password) =>
    api.put(`/api/users/details/${nickname}/delete`, {
      password: password,
    }),

  //  - 10. 내 Project 조회
  userProjects: (nickname) =>
    api.get(`/api/users/details/${nickname}/projects`),

  //  - 11. 내 Resume 조회
  userResumes: (nickname) => api.get(`/api/users/details/${nickname}/resumes`),

  //  - 12. 내 지원정보 조회
  userApply: (nickname) => api.get(`/api/users/details/${nickname}/apply`),

  //  - 13. 내 모집현황
  userRecruit: (nickname) => api.get(`/api/users/details/${nickname}/applys`),

  //  - 14. 프로필 이미지
  userPhoto: (frm, nickname) =>
    imgApi.post(`/api/users/details/${nickname}/image`, frm),

  ///////////////////////
  ////<2. 프로젝트 API>////
  //////////////////////

  //  - 9. 프로젝트 등록

  projectsCreate: (
    title,
    details,
    subscript,
    role,
    start,
    end,
    skills,
    schedule
  ) =>
    api.post("/api/projects", {
      title: title,
      details: details,
      subscript: subscript,
      role: role,
      start: start,
      end: end,
      skills: skills,
      schedule: schedule,
    }),

  //  - 10. 프로젝트 조회
  projectsLoad: () => api.get("/api/projects"),

  //  - 11. 프로젝트 상세조회
  projectsLoadDetail: (projectId) => api.get(`/api/projects/${projectId}`),

  //  - 12. 프로젝트 수정
  projectsModify: (
    projectId,
    title,
    details,
    subscript,
    role,
    start,
    end,
    skills,
    photos,
    applications
  ) =>
    api.put(`/api/projects/${projectId}`, {
      title: title,
      details: details,
      subscript: subscript,
      role: role,
      start: start,
      end: end,
      skills: skills,
      photos: photos,
      applications: applications,
    }),

  //  - 13. 프로젝트 삭제
  projectsDelete: (projectId) => api.delete(`/api/projects/${projectId}`),

  //  - ## 이미지 업로드
  projectsPhotos: (nickname, frm) =>
    imgApi.post(`/api/users/detatils/${nickname}/image`, frm),

  /////////////////////////////////////////
  ////<3. 팀원 찾기 페이지 이력서(지원자) API>////
  /////////////////////////////////////////

  //  - 14. 팀원 찾기 등록
  resumesCreate: (
    content,
    resumeImage,
    start,
    end,
    role,
    skills,
    content2,
    content3
  ) =>
    api.post("/api/resumes", {
      content: content,
      resumeImage: resumeImage,
      start: start,
      end: end,
      role: role,
      skill: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 15. 팀원 찾기 전체 조회
  resumesLoad: () => api.get("/api/resumes"),

  //  - 16. 팀원 찾기 상세조회
  resumesLoadDetail: (resumeId) => api.get(`/api/resumes/${resumeId}`),

  //  - 17. 팀원 찾기 수정
  resumesModify: (
    resumeId,
    content,
    resumeImage,
    start,
    end,
    role,
    skills,
    content2,
    content3
  ) =>
    api.put(`/api/resumes/${resumeId}`, {
      content: content,
      resumeImage: resumeImage,
      start: start,
      end: end,
      role: role,
      skill: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 18. 팀원 찾기 삭제
  resumesDelete: (resumeId) => api.delete(`/api/resumes/${resumeId}`),

  //  - 19. 팀원 찾기 프로필 이미지 편집(보류)
  //  - 20. 팀원 찾기 프로필 이미지 삭제(보류)

  //////////////////////////////
  ////<4. 면접,이미지업로드 API>////
  //////////////////////////////
  //[면접]

  interviews: (projectId) => api.post(`/api/interviews/${projectId}`),

  //  - 20. 면접요청 취소
  //  - 21. 프로젝트 면접 예약
  appointmentProject: (applicationId) =>
    api.put(`/api/applications/${applicationId}`),

  //  - 22. 면접요청 취소
  //  - 23. (팀장) 면접 승낙
  //  - 24. 승낙 취소
  //  - 25. 채팅화면으로 이동
  //  - 26. 채팅화면 종료하기
  //  - 27. 화상채팅 연결
  //  - 28. 화상채팅 종료
  //  - 29. 화면공유 시작
  //  - 30. 화면공유 종료

  //[이미지업로드]
  //  - 31. 이미지 업로드
  //[이미지업로드]

  ///////////////////////
  ////// 검색 기능 //////
  //////////////////////

  // 32. 프로젝트 검색
  searchProject: (role, skill, start, end) =>
    api.get("/api/search/project", {
      params: {
        role: role,
        skill: skill,
        start: start,
        end: end,
      },
    }),

  // 33. 리쥬메 검색
  searchResume: (role, skill, start, end) =>
    api.get("/api/search/resume", {
      params: {
        role: role,
        skill: skill,
        start: start,
        end: end,
      },
    }),

  // 34. 매칭 기능

  ///////////////////////
  ////// 4. 면접예약//////
  //////////////////////

  //21. 프로젝트에 면접 예약
  projectInterview: (applicationId, resumeId) =>
    api.put(`/api/applications/${applicationId}`, {
      resumeId: resumeId,
    }),
  //지원서의 지원서 목록 조회
  applicationsResumes: () => api.get("/api/applications/resumes"),

  // 22. 선택한 프로젝트를 지원서에 제안
  proposalUserProjects: (resumeId, projectId) =>
    api.post(`/api/proposals/${resumeId}/${projectId}`, {}),

  //23. 지원서에 면접 제안시 내 프로젝트 목록 조회
  proposalsProjects: () => api.get("/api/proposals/projects"),
};
