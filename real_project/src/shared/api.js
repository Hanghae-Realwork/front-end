import axios from "axios";

//이미지 데이터
const imgApi = axios.create({
  baseURL: "https://sprata-owl.shop/",
  headers: {
    "content-type": "multipart/form-data",
    withCredentials: true,
    credentials: "include",
  },
});
//기존 api
const api = axios.create({
  baseURL: "https://sprata-owl.shop/",
  headers: {
    "Access-Control-Allow-Origin": "https://sprata-owl.shop/",
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
  withCredentials: true,
  credentials: "include",
});

  //토큰
  api.interceptors.request.use(function (config) {
    const accessToken = `${localStorage.getItem("token")}`;
    config.headers.common["authorization"] = `Bearer ${accessToken}`;
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

//apis body
export const apis = {
  ///////////////////////
  ////<1. 회원관리 API>////
  ///////////////////////

  //  - 1. 회원가입
  signup: (userId, nickname, code, password, passwordCheck, allCheck) =>
    api.post("/api/users/signup", {
      userId: userId,
      nickname: nickname,
      code: code,
      password: password,
      passwordCheck: passwordCheck,
      policy: allCheck,
    }),

  //  - 2. 로그인
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

  //  - 8. 인증번호 검사
  checkEmail: (userId, code) =>
    api.post("/api/users/signup/checkEmail", {
      userId: userId,
      code: code,
    }),

  //  - 10. 회원탈퇴
  userDelete: (nickname, password) =>
    api.put(`/api/users/details/${nickname}/delete`, {
      password: password,
    }),

  //  - 11. 내 Project 조회
  userProjects: (nickname) =>
    api.get(`/api/users/details/${nickname}/projects`),

  //  - 12. 내 Resume 조회
  userResumes: (nickname) => api.get(`/api/users/details/${nickname}/resumes`),

  //  - 13. 내 지원정보 조회
  userApply: (nickname) => api.get(`/api/users/details/${nickname}/apply`),

  //  - 14. 내 모집현황
  userRecruit: (nickname) => api.get(`/api/users/details/${nickname}/applys`),

  //  - 15. 프로필 이미지
  userPhoto: (nickname, frm) =>
    imgApi.put(`/api/users/details/${nickname}/image`, frm),

  //  - 16. 로그아웃
  userlogOut: () => api.get("/api/users/logout"),

  ///////////////////////
  ////<2. 프로젝트 API>////
  //////////////////////

  //  - 17. 프로젝트 등록

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

  //  - 18. 프로젝트 조회
  projectsLoad: () => api.get("/api/projects"),

  //  - 19. 프로젝트 상세조회
  projectsLoadDetail: (projectId) => api.get(`/api/projects/${projectId}`),

  //  - 20. 프로젝트 수정
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

  //  - 21. 프로젝트 삭제
  projectsDelete: (projectId) => api.delete(`/api/projects/${projectId}`),

  //  - ## 이미지 업로드
  projectsPhotos: (nickname, frm) =>
    imgApi.post(`/api/users/detatils/${nickname}/image`, frm),

  /////////////////////////////////////////
  ////<3. 팀원 찾기 페이지 이력서(지원자) API>////
  /////////////////////////////////////////

  //  - 22. 팀원 찾기 등록
  resumesCreate: (content, start, end, role, skills, content2, content3) =>
    api.post("/api/resumes", {
      content: content,
      start: start,
      end: end,
      role: role,
      skills: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 23. 팀원 찾기 전체 조회
  resumesLoad: () => api.get("/api/resumes"),

  //  - 24. 팀원 찾기 상세조회
  resumesLoadDetail: (resumeId) => api.get(`/api/resumes/${resumeId}`),

  //  - 25. 팀원 찾기 수정
  resumesModify: (
    resumeId,
    content,
    start,
    end,
    role,
    skills,
    content2,
    content3
  ) =>
    api.put(`/api/resumes/${resumeId}`, {
      content: content,
      start: start,
      end: end,
      role: role,
      skills: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 26. 팀원 찾기 삭제
  resumesDelete: (resumeId) => api.delete(`/api/resumes/${resumeId}`),

  //////////////////////////////
  ////<4. 면접,이미지업로드 API>////
  //////////////////////////////

  // 27. 프로젝트에 면접 예약
  interviews: (projectId) => api.post(`/api/interviews/${projectId}`),

  // 28.- 지원자의 지원서 목록 조회
  appointmentProject: (applicationId) =>
    api.put(`/api/applications/${applicationId}`),

  // 29. 선택한 프로젝트를 지원서에 제안
  proposalUserProjects: (resumeId, projectId) =>
    api.post(`/api/proposals/${resumeId}/${projectId}`),

  //30. 지원서에 면접 제안시 내 프로젝트 목록 조회
  proposalsProjects: () => api.get("/api/proposals/projects"),

  //31(30 - 1). 인터뷰 완료 상태 업데이트
  interviewEndStatus: (applicationId) =>
    api.patch(`/api/applications/interviewed/${applicationId}`),

  // 32(30 - 2). 매칭 결과 상태 업데이트
  interviewMatchStatus: (applicationId, matching) =>
    api.patch(`/api/applications/matched/${applicationId}`, {
      status: matching,
    }),

  ///////////////////////
  ////// 검색 기능 //////
  //////////////////////

  // 33. 프로젝트 검색
  searchProject: (role, skill, start, end) =>
    api.get("/api/search/project", {
      params: {
        role: role,
        skill: skill,
        start: start,
        end: end,
      },
    }),

  // 34. 리쥬메 검색
  searchResume: (role, skill, start, end) =>
    api.get("/api/search/resume", {
      params: {
        role: role,
        skill: skill,
        start: start,
        end: end,
      },
    }),

  ///////////////////////
  ////// 4. 면접예약//////
  //////////////////////

  //35. 프로젝트에 면접 예약
  projectInterview: (applicationId, resumeId) =>
    api.put(`/api/applications/${applicationId}`, {
      resumeId: resumeId,
    }),
  //-지원서의 지원서 목록 조회
  applicationsResumes: () => api.get("/api/applications/resumes"),

  // 검색기능 api
  //1. 프로젝트에 맞는 이력서 조회
  matchResumes: (projectId) => api.get(`/api/matches/resumes/${projectId}`),

  //2. 이력서에 맞는 프로젝트 조회
  matchProjects: (resumeId) => api.get(`/api/matches/projects/${resumeId}`),
};

