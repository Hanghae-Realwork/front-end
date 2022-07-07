import React from "react";
import styled from "styled-components";

import SelectSkill from "./SelectSkill";

const FindProjectStep02 = (props) => {
  // 메인에서 카드정보를 거쳐 이동
  return (
    <>
      <FindProjectAllWrap>
        <div>
          <span>구하는 직군</span>
          <div>
            <label><input type="radio" name=""/>FrontEnd</label>
            <label><input type="radio"/>BackEnd</label>
            <label><input type="radio"/>Designer</label>
          </div>
        </div>
        <div>
          <SelectSkill />

        </div>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`

`





export default FindProjectStep02;
