import "./App.css";

import Addprofile from "./pages/AddProfile";
import Chat from "./pages/Chat";
import EmploymentProfile from "./pages/EmploymentProfile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
import Recruit from "./pages/Recruit";
import RecruitWrite from "./pages/RecruitWrite";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Addprofile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/employmentPorfile" element={<EmploymentProfile />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainemployment" element={<MainEmployment />} />
        <Route path="/mainrecruit" element={<MainRecruit />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/recruitwrite" element={<RecruitWrite />} />
      </Routes>
    </div>
  );
}

export default App;
