



const RecruitWrite = () => {
    return (
        <>
            <p> 구인 공고 페이지 입니다.</p>
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
                        value="SPORTS"
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

        </>
    )
}

export default RecruitWrite