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
  signup: (
    userId,
    nickname,
    name,
    birth,
    phoneNumber,
    password,
    passwordCheck,
    allCheck
  ) =>
    api.post("/api/users/signup", {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
      name: name,
      birth: birth,
      phone: phoneNumber,
      policy: allCheck,
    }),

  //  - 2.로그인
  login: (userId, password) =>
    api.post("/api/users/login", { userId: userId, password: password }),

  //  - 3.유저정보 조회
  checkUser: () => api.get("/api/users/auth"),

  //  - 4. 유저정보 받기(불필요한 경우 삭제)
  userInformation: () => api.get("/api/users/details/${nickname}"),

  //  - 5. 비밀번호 변경
  userInformationModify: (
    userId,
    nickname,
    name,
    phone,
    birth,
    password,
    passwordCheck,
    allCheck
  ) =>
    api.put("/api/users/details/${nickname}/upadatepw", {
      userId: userId,
      nickname: nickname,
      name: name,
      phone: phone,
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
  refresh: (nickname) =>
    api.post("/api/users/refresh", ),

  ///////////////////////
  ////<2. 프로젝트 API>////
  //////////////////////

  //  - 9. 프로젝트 등록
  projectsCreate: (
    data
  ) =>
    api.post("/api/projects", {
      ...data
    }),
  //  - 10. 프로젝트 조회
  projectsLoad: () => api.get("/api/projects?page=1&limit=9"),

  //  - 11. 프로젝트 상세조회
  projectsLoadDetail: (projectId) => api.get("/api/projects/${projectId}"),

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
    email,
    phone,
    schedule
  ) =>
    api.put("/api/projects/${projectId}", {
      title: title,
      details: details,
      subscript: subscript,
      role: role,
      start: start,
      end: end,
      skills: skills,
      photos: photos,
      email: email,
      phone: phone,
      schedule: schedule,
    }),

  //  - 13. 프로젝트 삭제
  projectsDelete: (projectId) => api.delete("/api/projects/${projectId}"),

  /////////////////////////////////////////
  ////<3. 팀원 찾기 페이지 이력서(지원자) API>////
  /////////////////////////////////////////

  //  - 14. 팀원 찾기 등록
  resumesCreate: (
    nickname,
    content,
    userId,
    phone,
    resumeImage,
    start,
    end,
    role,
    skills,
    content2,
    content3
  ) =>
    api.post("/api/resumes", {
      nickname: nickname,
      content: content,
      userId: userId,
      phone: phone,
      resumeImage: resumeImage,
      start: start,
      end: end,
      role: role,
      skills: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 15. 팀원 찾기 전체 조회
  resumesLoad: () => api.get("/api/resumes"),

  //  - 16. 팀원 찾기 상세조회
  resumesLoadDetail: (resumeId) => api.get("/api/resumes/${resumeId}"),

  //  - 17. 팀원 찾기 수정
  resumesModify: (
    resumeId,
    nickname,
    content,
    userId,
    phone,
    resumeImage,
    start,
    end,
    role,
    skills,
    content2,
    content3
  ) =>
    api.put("/api/resumes/${resumeId}", {
      nickname: nickname,
      content: content,
      userId: userId,
      phone: phone,
      resumeImage: resumeImage,
      start: start,
      end: end,
      role: role,
      skills: skills,
      content2: content2,
      content3: content3,
    }),

  //  - 18. 팀원 찾기 삭제
  resumesDelete: (resumeId) => api.delete("/api/resumes/${resumeId}"),

  //  - 19. 팀원 찾기 프로필 이미지 편집(보류)
  //  - 20. 팀원 찾기 프로필 이미지 삭제(보류)

  //////////////////////////////
  ////<4. 면접,이미지업로드 API>////
  //////////////////////////////
  //[면접]

  interviews: (projectId) => api.post("/api/interviews/${projectId}"),

  //  - 20. 면접요청 취소
  //  - 21. (팀장) 면접 승낙
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
};
