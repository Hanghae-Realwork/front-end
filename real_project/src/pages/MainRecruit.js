
import React from "react";
import EmploymentProfile from "./EmploymentProfile";
import Recruit from "./Recruit";
import { useNavigate } from "react-router-dom";

const MainRecruit = () => {

    const navigate = useNavigate

    return (
        <>
            <p>메인 프로젝트 페이지 입니다.</p>
            {/* 전체적인 내용 완성 후 styled 방식으로 변경 */}
            {/* Header이후의 내용으로 작성 */}
            <div className="Werp">
                {/* 헤더 생성 전 임시로 로그인 로그아웃 버튼 생성 */}
                {/* 각 기능 활성화시 사용 가능하도록 */}
                <div className="BtnBox">
                    <button className="LoginBtn"
                    // onClick={() => {
                    //     navigate("/Login")
                    // }}
                    >로그인</button>
                    <button className="JoinBtn"
                    // onClick={(
                    //     navigate("/Join")
                    // )}
                    >회원가입</button>
                    <button className="LogoutBtn">로그아웃</button>
                    <br />
                    {/* replace용도로도 좋고 새로고침이나 정보를 다시 받을 수 있는 용도 */}
                    <button className="RecruitBtn"
                        onClick={(
                            navigate("/")
                        )}
                    >프로젝트</button>
                    {/* 팀원찾기 페이지로 이동 */}
                    <button className="EmploymentBtn"
                        onClick={(
                            navigate("/MainEmployment")
                        )}
                    >팀원찾기</button>

                </div>
                <div className="RoleSelectBox">
                    {/* 직군 선택을 위한 드롭박스(?)/ 필터 */}
                    직군 선택을 위한 박스<br />
                    {/* 직군 종류와 밸류 결정 필요 */}
                    <select type="SelectBox" className="CategoryBox" >
                        <option value="Frontend">Frontend 개발자</option>
                        <option value="Backend">Backend 개발자</option>
                        <option value="">게임 개발자</option>
                        <option value="">게임 기획자</option>
                        <option value="">아트 디자이너</option>
                    </select><br />


                    {/* 기술선택을 위한 체크박스 모음 */}
                    {/* 모달에서 추가작업 */}
                    {/* <button onClick={openModal}></button> */}
                    {/* <Modal open={modalOpen} close={closeModal} header="기술선택"></Modal> */}

                </div><br />

                <div>
                    {/* 선택된 기술들을 가져올 위치 */}
                    선택된 기술
                    {/* 각 기술에 취소 기능이 들어가도록 */}
                    {/* 모달에서 역으로? 필터 키를 가져오도록? */}
                    
                </div>
                <div className="CardContainer">
                    {/* 카드 컴포넌트 불러오기 */}
                    {/* <Card/> */}
                    카드들이 여기서 출력
                </div>
                <div className="AddBtnContainer">
                    <div className="AddBtn">
                        {/* Write 파일의 형식이 정해지는 대로 반영 */}
                        <button
                        // onClick={() => {
                        //     navigate("/RecruitWrite")
                        // }}
                        >등록 하러 가기</button>
                    </div>

                </div>
            </div>
        </>
    )



}

export default MainRecruit