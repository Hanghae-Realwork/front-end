
import React, { useEffect, useState, useRef, useSelector } from "react";


function RecruitWrite() {

    const [title, setTtile] = useState("");
    const [role, setRole] = useState("");
    const [skills, setSkills] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [detail, setDetail] = useState("");
    const [subscript, setSubscript] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    let photos = document.getElementById("photo");



    return (
        <>

            <p> 구인 공고 페이지 입니다.</p>
            <div className="WriteComponent">
                <div className="WantRole">
                    구하는 직군
                </div>
                {/* 직군 선택 버튼. 택 1만 가능하도록 */}
                <div className="RoleButton">
                    <label className="RoleSelect">
                        <button
                            type="radio"
                            id="Frontend"
                            name="radioButton"
                            // onClick={(e) => setRole(e.target.value)}
                            value="Frontend"
                        >FrontEnd 개발자</button>
                    </label>
                    <label className="RoleSelect">
                        <button
                            type="radio"
                            id="Backend"
                            name="radioButton"
                            // onClick={(e) => setRole(e.target.value)}
                            value="Backend"
                        >BackEnd 개발자</button>
                    </label>
                    <label className="RoleSelect">
                        <button
                            type="radio"
                            id="UXUI"
                            name="radioButton"
                            // onClick={(e) => setRole(e.target.value)}
                            value="UXUI"
                        >UX/UI 디자이너</button>
                    </label>

                </div>
                {/*  기술 선택 박스 */}
                {/* Tag Compo 사용 */}
                <div className="SkillsCheck">
                    원하는 기술선택
                    <br />

                    <input type="checkbox" value="js" 
                    onClick={(e) => setSkills(e.target.value)}
                    >
                    </input>
                    자바스크립트
                    <input type="checkbox" value="react"
                    onClick={(e) => setSkills(e.target.value)}
                    >
                    </input>
                    리액트
                    <input type="checkbox" value="node.js" 
                    onClick={(e) => setSkills(e.target.value)}
                    >
                    </input>
                    노드

                </div>

                {/* 제목을 포함한 내용 입력 */}
                <div className="Title">
                    <div className="TitleText">
                        제목입력
                    </div>
                    <input type="text" placeholder="제목을 입력해주세요" id="title" 
                    onChange={(e) => {setTtile(e.target.value);}} />
                </div>
                <div className="SubScript">
                    간단한 프로젝트 설명
                    <br />
                    <input type="text" placeholder="간단하게 프로젝트를 설명해주세요 (n자 이내)" id="subscript" 
                    onChange={(e) => {setSubscript(e.target.value);}}/>
                </div>
                <div className="Dtail">
                    팀 상세 설명
                    <br />
                    <input type="text" id="detail"
                    onChange={(e) => {setDetail(e.target.value);}} />
                </div>

                {/* 프로젝트 기간 설정 */}
                <div className="ProjectDate">
                    프로젝트 기간 입력
                    {/* 이후 datepicker로 변경 */}
                    <div className="StartDate" type="date" onChange={(e) => {setStartDate(e.target.value);}}></div>
                    <div className="EndDate" type="date" onChange={(e) => {setEndDate(e.target.value);}}></div>
                </div>

                {/* 이미지 업로드, 다중등록 가능하게 */}
                <div className="ImageUpload">
                    이미지 업로드
                    <input type="file" placeholder="이미지 등록">
                    </input>



                </div>
            </div>
        </>
    )
}

export default RecruitWrite