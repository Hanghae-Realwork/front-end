import "./App.css";
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결
import AddProfile from "./pages/AddProfile";
import Chat from "./pages/Chat";
import EmploymentProfile from "./pages/EmploymentProfile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
// import RecruitWrite from "./pages/RecruitWrite";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage"
import ChatJoin from "./pages/ChatPassword"
import ReadProject from "./pages/ReadProject"
import DisplayChatView from "./pages/DisplayChatView";
// import Test from "./pages/Test";

//Components 연결
import Header from "./components/Header";
import Loading from "./pages/Loading";
import EmpoCard from "./components/CardEmpol";
import FindProjectStep01 from "./components/FindProjectStep01";
import FindProjectStep02 from "./components/FindProjectStep02";


// import SelectBox from "./components/SelectBox";

function App() {
  return (
    <MainWrap>
      {/* <MainHeader> */}
      <Header />
      {/* <ReadProject></ReadProject> */}
      {/* <ChatJoin /> */}
      {/* <MyPage /> */}
      {/* <EmpoCard></EmpoCard> */}
      {/* </MainHeader> */}
      {/* <AddProfile/> */}
      {/* <Test/> */}
      {/* <Chat/> */}
      {/* <EmploymentProfile/> '완료' */}
      {/* <Join/> '완료' */}
      {/* <Login/> '완료' */}
      {/* <MainEmployment/>
      <MainRecruit/> */}
      {/* <FindProject/>  - 해결중 */} 
      {/* <FindProjectStep02 /> */}
      {/* <RecruitWrite/> '완료' */}
      {/* <Loading/> '완료' */}

      {/* <CardRecruit/> '컴포넌트' */}
      {/* <SelectBox/> '컴포넌트' */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainrecruit" element={<MainRecruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/employmentprofile" element={<EmploymentProfile />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/mainemployment" element={<MainEmployment />}></Route>
        {/* <Route path="/recruitwrite" element={<RecruitWrite />}></Route> */}
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/findprojectstep1" element={<FindProjectStep01 />}></Route>
        <Route path="/findprojectstep2" element={<FindProjectStep02 />}></Route>
        <Route path="/chatjoin" element={<ChatJoin />}></Route>
        <Route path="/readproject" element={<ReadProject />}></Route>
        <Route path="/displaychatview" element={<DisplayChatView />}></Route>
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

const MainHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export default App;
