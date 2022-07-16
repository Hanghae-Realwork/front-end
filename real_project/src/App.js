import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결
import AddProfile from "./pages/AddProfile";
import EmploymentProfile from "./pages/EmploymentProfile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage"
import ReadProject from "./pages/ReadProject"
import Application from "./components/Mypage/Application";
import Recruitment from "./components/Mypage/Recruitment";
import Resumes from "./components/Mypage/Resumes";

//Components 연결
import Header from "./components/Header";
import Loading from "./pages/Loading";
import EmpoCard from "./components/CardEmpol";
import FindProjectStep01 from "./components/FindProjectStep01";
import FindProjectStep02 from "./components/FindProjectStep02";
import EditProfile from "./pages/EditProfile";

import { useDispatch } from "react-redux";
import { checkUserValidation } from "./redux/modules/user";




function App() {
  
const dispatch = useDispatch()
  useEffect(() => {
   dispatch(checkUserValidation());
  }, [])
  

  return (
    <MainWrap>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainrecruit" element={<MainRecruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/employmentprofile/:resumeId" element={<EmploymentProfile />}/>
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/editprofile/:resumeId" element={<EditProfile />} />
        <Route path="/mainemployment" element={<MainEmployment />}></Route>

        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/findprojectstep1" element={<FindProjectStep01 />}></Route>
        <Route path="/findprojectstep2/:projectId" element={<FindProjectStep02 />}></Route>
        <Route path="/readproject/:projectId" element={<ReadProject />}></Route>

        <Route path="mypage/:nickname/*" element={<MyPage />}>
          <Route path="apply" element={<Application />}></Route>
          <Route path="project" element={<Recruitment />}></Route>
          <Route path="resumes" element={<Resumes />}></Route>
        </Route>
      </Routes>
      {/* <BoardNew/> */}
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

const MainHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export default App;
