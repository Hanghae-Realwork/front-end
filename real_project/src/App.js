import './App.css';
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결






import Addprofile from "./pages/AddProfile"
import Chat from "./pages/Chat"
import EmploymentProfile from "./pages/EmploymentProfile"
import Join from "./pages/Join"
import Login from "./pages/Login"
import MainEmployment from "./pages/MainEmployment"
import MainRecruit from "./pages/MainRecruit"
import Recruit from "./pages/Recruit"
import RecruitWrite from "./pages/RecruitWrite"



function App() {
  return (
    <div className="App">


      <Routes>
        {/* <Addprofile/>
      <Chat/>
      <EmploymentProfile/>
      <Join/>
      <Login/> */}
        <Route path="/" element={<MainEmployment />} />
        <Route path="/" element={<MainRecruit />} />
        {/* <Recruit/>
      <RecruitWrite/> */}
      </Routes>

    </div>

  );
}

export default App;
