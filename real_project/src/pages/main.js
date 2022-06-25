import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Main = () => {
    const navigate = useNavigate();
// 필요한 함수? 검색/필터/



    return (
        <>
            {/* 전체적인 내용 완성 후 styled 방식으로 변경 */}
            {/* Header.js이후의 내용으로 작성 */}
            <div className="Werp">
                {/* 헤더 생성 전 임시로 로그인 로그아웃 버튼 생성 */}
                {/* 각 기능 활성화시 사용 가능하도록 */}
                <div className="BtnBox">
                    <loginbox>
                        <button className="LoginBtn"
                        // onClick={() => {
                        //     navigate("/Login")
                        // }}
                        >로그인</button>
                    </loginbox>
                    <signupbox>
                        <button className="SignupBtn"
                        // onClick={(
                        //     navigate("/Sginup")
                        // )}
                        >회원가입</button>
                    </signupbox>
                    <logoutbox>
                        <button className="LogoutBtn">로그아웃</button>
                    </logoutbox>
                </div>
                <div className="RoleSelectBox">
                    {/* 직군 선택을 위한 드롭박스(?)/ 필터 */}

                </div><br />
                <div className="CardContainer">
                    {/* 카드 컴포넌트 불러오기 */}
                    {/* <Card/> */}
                    카드들이 출력
                </div>
                <div className="AddBtnContainer">
                    <div className="AddBtn">
                        {/* Write 파일의 형식이 정해지는 대로 반영 */}
                        <button
                        // onClick={() => {
                        //     navigate("/Write")
                        // }}
                        ></button>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Main