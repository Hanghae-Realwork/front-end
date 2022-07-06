import "../App.css";

import React, { useState } from "react";
import styled from "styled-components";

import up from "../image/up-fill.svg";
import down from "../image/down-fill.svg";

import { useNavigate } from "react-router-dom";
function SelectCompo() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  //드롭다운 스테이트 (전역)
  //스택 선택 스테이트 (전역))
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownVisibilitySkill, setDropdownVisibilitySkill] = useState(false);

  //드롭다운 컴포넌트 (자식 18 ~ 40)
  const Dropdown = (props) => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);
    const [repeat, setRepeat] = useState(null);

    React.useEffect(() => {
      if (props.visibility) {
        clearTimeout(repeat);
        setRepeat(null);
        setVisibilityAnimation(true);
      } else {
        setRepeat(
          setTimeout(() => {
            setVisibilityAnimation(false);
          }, 400)
        );
      }
    }, [props.visibility]);

    return (
      <article
        className={`components-dropdown ${
          props.visibility
            ? "slide-fade-in-dropdown"
            : "slide-fade-out-dropdown"
        }`}
      >
        {visibilityAnimation && props.children}
      </article>
    );
  };

  //스택 선택 드롭다운 (43 ~ 65)
  const DropdownSkill = (props) => {
    const [visibilityAni, setVisibilityAni] = useState(false);
    const [repeatSkill, setRepeatSkill] = useState(null);

    React.useEffect(() => {
      if (props.visibility) {
        clearTimeout(repeatSkill);
        setRepeatSkill(null);
        setVisibilityAni(true);
      } else {
        setRepeatSkill(
          setTimeout(() => {
            setVisibilityAni(false);
          }, 400)
        );
      }
    }, [props.visibility]);

    return (
      <article
        className={`components-dropdown ${
          props.visibility
            ? "slide-fade-in-dropdown"
            : "slide-fade-out-dropdown"
        }`}
      >
        {visibilityAni && props.children}
      </article>
    );
  };

  //드롭다운 컴포넌트 (본체 69 ~ 87)
  const App = (props) => {
    return (
      <DropDownWrap>
        <DropDownButton
          onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
        >
          {dropdownVisibility ? (
            <DropText>
              <SpanInText>닫기</SpanInText>
              <img src={up} />
            </DropText>
          ) : (
            <DropText>
              <SpanInText>직군 선택하기</SpanInText>
              <img src={down} />
            </DropText>
          )}
        </DropDownButton>
        <Dropdown visibility={dropdownVisibility}>
          <ul className="optionList">
            <li className="ListinOption">프론트엔드 엔지니어</li>
            <li className="ListinOption">백엔드 엔지니어</li>
            <li className="ListinOption">디자이너</li>
          </ul>
        </Dropdown>
      </DropDownWrap>
    );
  };

  //스택 선택 드롭다운 컴포넌트 (본체 90 ~ 137)

  const AppSkill = (props) => {
    return (
      <DropDownWrap>
        <DropDownButton
          onClick={(e) => setDropdownVisibilitySkill(!dropdownVisibilitySkill)}
        >
          {dropdownVisibilitySkill ? (
            <DropText>
              <SpanInText>닫기</SpanInText>
              <img src={up} />
            </DropText>
          ) : (
            <DropText>
              {" "}
              <SpanInText>스킬 및 스택 선택하기</SpanInText>
              <img src={down} />
            </DropText>
          )}
        </DropDownButton>
        <Dropdown visibility={dropdownVisibilitySkill}>
          <SelectBoxWrap>
            <SelectAllWrap>
              <TitleTextTag>개발자</TitleTextTag>
              <SelectBoxTab>
                {/* <라벨> <인풋> </인풋> </라벨> 구조로, 라벨 안에 먹이면 라벨과 하나로 묶입니다. */}
                {/* 이 외에도 다양하게 마크업의 꺾쇠 안에 <><><></></></> 이런 식으로 먹여 코드를 압축하거나 묶을 수 있습니다. */}
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>React
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Vue.js
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>JavaScript
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Node.js
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Java
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Spring
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Python
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>MongoDB
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>MySQL
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Redis
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>TypeScript
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Ruby
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>AWS
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Go
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>PHP
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Git
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>.NET
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>React Native
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Django
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Flask
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Nest.JS
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Express.JS
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>NoSQL
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>SQL
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Swift
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Kotlin
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>Android
                </TecLabel>
                <TecLabel>
                  {" "}
                  <CheckBox type="checkbox"></CheckBox>iOS
                </TecLabel>
              </SelectBoxTab>
            </SelectAllWrap>

            <SelectAllWrap>
              <TitleTextTag>디자이너</TitleTextTag>
              <SelectBoxTab>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Figma
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Adobe XD
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Adobe Illustrator
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Adobe PhotoShop
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Invision
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Sketch
                </TecLabel>
                <TecLabel>
                  <CheckBox type="checkbox"></CheckBox>Protopie
                </TecLabel>
              </SelectBoxTab>
            </SelectAllWrap>
            <SelectButtonWrap>
              <SelectButton> 선택 완료 </SelectButton>
            </SelectButtonWrap>
          </SelectBoxWrap>
        </Dropdown>
      </DropDownWrap>
    );
  };

  // 리턴 컴포넌트 최종(출력 구간)
  return (
    <DropDownAllWrap>
      <SerchMenuWrap>
        <App /> <AppSkill />
      </SerchMenuWrap>
      <RecButtonWrap>
        <RecritButton>내 소개 등록하기</RecritButton>
      </RecButtonWrap>
    </DropDownAllWrap>
  );
}

// 리턴 컴포넌트 최종(출력 구간)

const DropDownAllWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const DropDownWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-left: 180px; */
`;

const DropDownButton = styled.label`
  /* border: 1px solid black; */
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 150px;
  color: white;
  font-weight: bold;
  background-color: #685bc7;
`;

const DropText = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const SelectBoxWrap = styled.div`
  border: 3px solid #685bc7;
  width: 600px;
  height: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 20px;
  position: absolute;
  background-color: white;
`;

const SelectAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  /* margin-bottom: px; */
  width: 580px;
  padding: 10px;
  /* border: 1px solid black; */
`;

const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const TecLabel = styled.label`
  font-size: 14px;
`;

const SelectButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #685bc7;
  color: white;
  padding: 10px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const CheckBox = styled.input`
  appearance: none;
  border: 0.5px solid gainsboro;
  border-radius: 0.25rem;
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
  margin-right: 5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #685bc7;
  }
`;

const TitleTextTag = styled.p`
  font-weight: bold;
  color: #685bc7;
`;

const SelectButtonWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SpanInText = styled.div`
  font-size: 14px;
`;

const RecritButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #24135f;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 13px;
`;

const SerchMenuWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RecButtonWrap = styled.div`
  /* border: 1px solid black; */
`;

export default SelectCompo;

// return (
//     <DropDownAllWrap>
//       <App/> <SelectBoxLabel onClick={() => { setModal(); setModal(true); }}>
//           <DropText><span>기술스택 선택</span> <img src = {down} /> </DropText></SelectBoxLabel>
//       {modal === true ? <SelectBox close={setModal}/> : null}
//     </DropDownAllWrap>
//   );
