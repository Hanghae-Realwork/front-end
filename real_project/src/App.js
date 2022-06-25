import './App.css';

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
      
      <Addprofile/>
      <Chat/>
      <EmploymentProfile/>
      <Join/>
      <Login/>
      <MainEmployment/>
      <MainRecruit/>
      <Recruit/>
      <RecruitWrite/>

    </div>
  );
}

export default App;
