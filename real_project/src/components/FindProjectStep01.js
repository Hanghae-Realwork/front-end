import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FindProjectStep01 = (props) => {
  // 메인에서 카드정보를 거쳐 이동

  const navigate = useNavigate()

  return (
    <>
      <FindProjectAllWrap>
        <div>
            <div>
                <div><span>제목 (최대 n자 이내)</span></div>
                <div><input></input></div>
            </div>
        </div>
        <div>
            <div><span>제목 (최대 n자 이내)</span></div>
            <div><input placeholder="제목을 입력해 주세요"></input></div>
        </div>
        <div>
            <div><span>프로젝트 설명 (최대 n자 이내)</span></div>
            <div><input placeholder="간단한 프로젝트 설명을 넣어주세요"></input></div>
        </div>
        <div>
            <div><span>프로젝트 기간</span></div>
            <div></div>
        </div>
        <div>
            <div><span>팀 상세 설명</span></div>
            <div><textarea></textarea></div>
        </div>
        <div><button onClick={() => {navigate(`/findprojectstep2`)}}>다음 단계로</button></div>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`

`



export default FindProjectStep01;
