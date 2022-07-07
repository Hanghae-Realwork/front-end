import React from "react";
import styled from "styled-components";

import FindStep01 from "../components/FindProjectStep01"
import FindStep02 from "../components/FindProjectStep02"

const FindProject = (props) => {
  // 메인에서 카드정보를 거쳐 이동
  return (
    <>
      <FindProjectAllWrap>
        <div>
            <div>
                <span>새로운 크루 모집하기</span>
            </div>
        </div>
        <div>
            <div>
                <span>1. 프로젝트 설명하기 2.크루 모집하기</span>
            </div>
        </div>
        <FindStep01></FindStep01>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`

`



export default FindProject;
