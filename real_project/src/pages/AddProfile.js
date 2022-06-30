import React from "react";
import styled from "styled-components";
function AddProfile() {
  return (
    <Container>
      {/* div1 */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD245vOxKt81SUKRsAfzqrvl6Qv2hs1DciFw&usqp=CAU"
          alt="profileImg"
          style={{ width: "100px" }}
        />
        <p>추가</p>
        <p>삭제</p>
      </div>
      {/* div2 */}
      <div>
        <label>
          <p>이름</p>
          <input />
        </label>
        <label>
          <p>간단한 내 소개(최대 n자 이내)*</p>
          <p>content</p>
          <input />
          <p>content2</p>
          <input />
          <p>content3</p>
          <input />
        </label>
        <p>프로젝트 가능 기간</p>
        <input type="date" />
        <input type="date" />
        <p>내 직군*</p>
        <input type="radio" /> FrontEnd 개발자
        <input type="radio" /> BackEnd 개발자
        <input type="radio" /> UX/UI 디자이너
        <p>내가 보유한 기술*</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
export default AddProfile;
