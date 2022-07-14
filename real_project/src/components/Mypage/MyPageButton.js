import styled from "styled-components";

function ButtonLine() {
  return (
    <>
      <OnlyBackgroundWrap>
        <BackgroundAllWrap>
          {/* <LeftTopWrap></LeftTopWrap> */}
          <RightTopWrap>
            <MyMenuButton>내 지원 현황</MyMenuButton>
            <MyMenuButton>내 모집 현황</MyMenuButton>
            <MyMenuButton>내 이력서</MyMenuButton>
          </RightTopWrap>
        </BackgroundAllWrap>
      </OnlyBackgroundWrap>
    </>
  );
}

const BackgroundAllWrap = styled.div`
  /* border: 1px solid white; */
  width: 1440px;
  height: 135px;
  background-color: #323230;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const RightTopWrap = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 44px;
  margin-right: 400px;
  /* position: relative; */
`;

const OnlyBackgroundWrap = styled.div`
    background-color: #323230;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

// const LeftTopWrap = styled.div`
//     border: 1px solid white;
//     width: 500px;
// `

const MyMenuButton = styled.button`
  padding: 8px 20px 8px 20px;
  width: 120px;
  height: 40px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 20px;
  background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;

export default ButtonLine;
