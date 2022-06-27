import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const CardRecruit = () => {
    <>
        {/* 카드 불러오는 함수 */}
        {/* 기술 체크박스가 필터기능이 동시에 작동 되도록 */}
    </>
    return (
        <>
            {/* 입력될 카드 내용 */}
            <div className="Warp">
                <div className="CardBox"
                // postId에 맞춰서 해당 Recruit로 이동
                // 각 CardBox자체로 클릭이 가능

                // key={postId}
                // onClick={() => {
                //   navigate(`/detail/${list.projectId}`);
                // }}

                >
                    <div className="UserId">
                        작성자
                        {/* userId 위치 */}
                    </div><br />
                    <div className="Title">
                        프로젝트 제목
                        {/* title 위치 */}
                    </div>
                    <div className="Date">
                        <div className="StartDate">
                            시작시간 yyyy-mm-dd
                            {/* start 위치 */}

                        </div>
                        <div className="EndDate">
                            종료시간 yyyy-mm-dd
                            {/* end 위치 */}
                        </div>
                    </div>
                    <div className="InfoText">
                        소개 텍스트
                        {/* 소개(api) 텍스트? 위치*/}
                    </div>
                    <div className="Role">
                        찾는 직군 이름
                        {/* role 위치 */}
                    </div>
                    <div className="Skills">
                        기술/ 기술/ 기술
                        {/* skills  위치*/}
                    </div>
                    <div className="Moment">
                        등록시간 N시간 전
                        {/* 등록시간(api) 위치*/}
                    </div>
                </div>
            </div>

        </>
    )


}


export default CardRecruit