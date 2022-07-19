import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ButtonLine() {
  const navigate = useNavigate()
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  
  return (
    <>
      <OnlyBackgroundWrap>
        <BackgroundAllWrap>
          {/* <LeftTopWrap></LeftTopWrap> */}
          <RightTopWrap>
            <MyMenuButton onClick={() => {
              navigate(`/mypage/${nickname}/apply`);
            }}>내 지원 현황</MyMenuButton>
            <MyMenuButton onClick={() => {
              navigate(`/mypage/${nickname}/project`);
            }}
            >내 모집 현황</MyMenuButton>
            <MyMenuButton onClick={() => {
              navigate(`/mypage/${nickname}/resumes`);
            }}>내 이력서</MyMenuButton>
          </RightTopWrap>
        </BackgroundAllWrap>
      </OnlyBackgroundWrap>
    </>
  );
}

const BackgroundAllWrap = styled.div`
  /* border: 1px solid white; */
  width: 1440px;
  height: 130px;
  background-color: #323230;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;

const RightTopWrap = styled.div`
  /* border: 1px solid white; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 44px;
  margin-right: 460px;
  margin-bottom: 30px;
  /* position: relative; */
`;

const OnlyBackgroundWrap = styled.div`
    background-color: #323230;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    height: 130px;
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
