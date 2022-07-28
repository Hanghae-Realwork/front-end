import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
import MyPage from "./pages/MyPage"

import ReadProject from "./pages/ReadProject"
import ReadProfile from "./pages/ReadProfile"

import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import EditProfile from "./pages/EditProfile";
import AddProfile from "./pages/AddProfile";

import MatchingCrew from "./pages/MatchingCrew";
import MatchingResume from "./pages/MatchingResume";
import Projects from "./components/Mypage/Projects";
// import Loading from "./pages/Loading";

//Components 연결
import Header from "./components/Header";
import EmpoCard from "./components/CardEmpol";
import Application from "./components/Mypage/Application";
import Recruitment from "./components/Mypage/Recruitment";
import Resumes from "./components/Mypage/Resumes";
import EmptyCard from "./components/Mypage/EmptyCard";
import EmptyProject from "./components/Mypage/EmptyProject";
import DateModal from "./components/Modal/DateModal";
import SkillModal from "./components/Modal/SkillModal";
import RoleModal from "./components/Modal/RoleModal";
import LoginModal from "./components/Modal/LoginModal";
import JoinModal from "./components/Modal/JoinModal";

import { useDispatch } from "react-redux";
import { checkUserValidation } from "./redux/modules/user";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(checkUserValidation());
 }, []);
  return (
    <MainWrap>
      <Header />

      {/* <MatchingCrew></MatchingCrew>
      <MatchingResume></MatchingResume> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainrecruit" element={<MainRecruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/employmentprofile/:resumeId" element={<ReadProfile />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/editprofile/:resumeId" element={<EditProfile />} />
        <Route path="/mainemployment" element={<MainEmployment />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/findprojectstep1" element={<AddProject />}></Route>
        <Route
          path="/findprojectstep2/:projectId"
          element={<EditProject />}
        ></Route>
        <Route path="/readproject/:projectId" element={<ReadProject />}></Route>

        <Route path="/rolemodal" element={<RoleModal />}></Route>
        <Route path="/skillmodal" element={<SkillModal />}></Route>
        <Route path="/datemodal" element={<DateModal />}></Route>
        <Route path="/loginmodal" element={<LoginModal />}></Route>
        <Route path="/Joinmodal" element={<JoinModal />}></Route>

        <Route path="mypage/:nickname/*" element={<MyPage />}>
          <Route path="apply" element={<Application />}></Route>
          <Route path="applys" element={<Recruitment />}></Route>
          <Route path="resumes" element={<Resumes />}></Route>
          <Route path="project" element={<Projects/>}></Route>
        </Route>

        <Route path="/matchingcrew" element={<MatchingCrew />}></Route>
        <Route path="/matchingresume" element={<MatchingResume />}></Route>
      </Routes>
    </MainWrap>
  );
}


const MainWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-width: 1400px;
  width: 100%;
`;


export default App;
