import styled from "styled-components";

function ButtonLine() {
  return (
    <>
      <BackgroundAllWrap>
        <RightTopWrap>
          <MyMenuButton>내 지원 현황</MyMenuButton>
          <MyMenuButton>내 모집 현황</MyMenuButton>
          <MyMenuButton>내 이력서</MyMenuButton>
        </RightTopWrap>
      </BackgroundAllWrap>
    </>
  );
}

const BackgroundAllWrap = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 135px;
  background-color: #323230;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightTopWrap = styled.div`
    /* border: 1px solid white; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 44px;
    position: relative;
`

const MyMenuButton = styled.button`
    padding: 8px 20px 8px 20px;
    width: 120px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 20px;
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
`

export default ButtonLine;
