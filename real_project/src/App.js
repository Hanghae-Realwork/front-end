// 라이브러리 및 그 외
import "./App.css";
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결
import Addprofile from "./pages/AddProfile";
import Chat from "./pages/Chat";
import EmploymentProfile from "./pages/EmploymentProfile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
import Recruit from "./pages/Recruit";
import RecruitWrite from "./pages/RecruitWrite";

import Header from "./components/Header";
import SelectBox from "./components/SelectBox";

function App() {
  const Card_list = Array.from({ length: 12 }, (v, i) => i);
  console.log(Card_list);

  return (
    <MainWrap>
      {/* <Header /> */}

      {/* <Addprofile/>
      <Chat/>
      <EmploymentProfile/>
      <Join/>
      <Login/>
      <MainEmployment/>
      <MainRecruit/>
      <Recruit/>
      <RecruitWrite/> */}

      {/* <CardRecruit/> */}
      {/* <SelectBox /> */}

      <Routes>
        <Route path="/" element={<MainRecruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/employmentprofile" element={<EmploymentProfile />} />
        <Route path="/addprofile" element={<Addprofile />} />
        <Route path="/mainemployment" element={<MainEmployment />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
        <Route path="/recruitwrite" element={<RecruitWrite />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default App;
