import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            {/* 헤더 생성 전 임시로 로그인 로그아웃 버튼 생성 */}
            {/* 각 기능 활성화시 사용 가능하도록 */}


            <div className="BtnBox">
                <button className="LoginBtn"
                    onClick={() => {
                        navigate("/login")
                    }}
                >로그인</button>
                <button className="JoinBtn"
                onClick={() => {
                    navigate("/join")
                }}
                >회원가입</button>
                <button className="LogoutBtn">로그아웃</button>

                <button className="Mypage">마이페이지</button>
                <br />
                {/* replace용도로도 좋고 새로고침이나 정보를 다시 받을 수 있는 용도 */}
                <button className="RecruitBtn"
                    onClick={() =>{
                        navigate("/")
                     } }
                >프로젝트</button>
                {/* 팀원찾기 페이지로 이동 */}
                <button className="EmploymentBtn"
                // onClick={() =>
                //     navigate("/mainemployment")
                // }
                >팀원찾기</button>


            </div>
        </>
    );
};
export default Header;
