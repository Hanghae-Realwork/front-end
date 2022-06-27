
import React from "react";
import {useNavigate} from "react-router-dom";


const MainEmployment = () => {
    const  navigate =useNavigate
    
    return (
        <>
            <p>메인 팀원찾기 페이지 입니다.</p>
            {/* 전체적인 내용 완성 후 styled 방식으로 변경 */}
            {/* Header이후의 내용으로 작성 */}
            <div className="Werp">
                {/* 헤더 생성 전 임시로 로그인 로그아웃 버튼 생성 */}
                {/* 각 기능 활성화시 사용 가능하도록 */}
                
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

                </div><br />
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
                        >프로필 등록 하러 가기</button>
                    </div>

                </div>
            </div>
        </>

    )

}

export default MainEmployment