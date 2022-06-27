
import React from "react";
import EmploymentProfile from "./EmploymentProfile";
import Recruit from "./Recruit";
import { useNavigate } from "react-router-dom";
import ModalMainRecruit from "../components/ModalMainRecruit";
import CardRecruit from "../components/CardRecruit";

const MainRecruit = () => {

    const navigate = useNavigate

    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    // 배열 출력 테스트
    const Card_list = Array.from({ length: 12 }, (v, i) => i);
    console.log(Card_list)


    return (
        <>
            <p>메인 프로젝트 페이지 입니다.</p>
            {/* 전체적인 내용 완성 후 styled 방식으로 변경 */}
            {/* Header이후의 내용으로 작성 */}
            <div className="Werp">
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
                    </select>


                    {/* 기술선택을 위한 체크박스 모음 */}
                    {/* 모달에서 추가작업 */}
                    <button onClick={openModal}>기술 선택</button>
                    <ModalMainRecruit open={modalOpen} close={closeModal} header="선택할 기술"></ModalMainRecruit>


                </div><br />

                <div>
                    {/* 선택된 기술들을 가져올 위치 */}
                    선택된 기술
                    {/* 각 기술에 취소 기능이 들어가도록 */}
                    {/* 모달에서 역으로? 필터 키를 가져오도록? */}

                </div>
                <div className="CardContainer">
                    {/* 카드 컴포넌트 불러오기 */}
                    카드들이 여기서 출력
                    <p />
                    <br />

                    {Card_list.map((list, idx) => {
                        return <CardRecruit data={list} key={idx} />
                    })}

                    <br />
                    여기까지 카드
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