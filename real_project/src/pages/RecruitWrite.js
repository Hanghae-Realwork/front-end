
import React, { useEffect, useState, useRef, useSelector } from "react";


function RecruitWrite() {

    const [category, setCategory] = useState("");
    const [skills, setSkills] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [Price, setPrice] = useState("");
    let postImage = document.getElementById("postImage");


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
                            // onClick={(e) => setCategory(e.target.value)}
                            value="Frontend"
                        >FrontEnd 개발자</button>
                    </label>
                    <label className="RoleSelect">
                        <button
                            type="radio"
                            id="Backend"
                            name="radioButton"
                            // onClick={(e) => setCategory(e.target.value)}
                            value="Backend"
                        >BackEnd 개발자</button>
                    </label>
                    <label className="RoleSelect">
                        <button
                            type="radio"
                            id="UXUI"
                            name="radioButton"
                            // onClick={(e) => setCategory(e.target.value)}
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
                    <input type="text" placeholder="제목을 입력해주세요" id="title" />
                </div>
                <div className="SubScript">
                    간단한 프로젝트 설명
                    <br />
                    <input type="text" placeholder="간단하게 프로젝트를 설명해주세요 (n자 이내)" id="subscript" />
                </div>
                <div className="Dtails">
                    팀 상세 설명
                    <br />
                    <input type="text" id="detail" />
                </div>

                {/* 이미지 업로드, 다중등록 가능하게 */}
                <div className="ImageUpload">
                    <input type="file" placeholder="이미지 등록">

                    </input>



                </div>
            </div>
        </>
    )
}

export default RecruitWrite