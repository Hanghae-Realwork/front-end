import "../App.css";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { format} from "date-fns";
import { ko } from "date-fns/esm/locale";
import { DayPicker } from "react-day-picker";

import up from "../image/toggle_up.svg";
import down from "../image/toggle_down.svg";
import clipboard from "../image/clipboard.svg"
import calender from "../image/calender.svg"
import DayPickerMain from "./DayPickerMain";


function RecSelectCompo() {
  const navigate = useNavigate();
  const today = new Date();


  //드롭다운 스테이트 (전역)
  //스택 선택 스테이트 (전역)
  // 일정 선택 스테이트 (전역)
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownVisibilitySkill, setDropdownVisibilitySkill] = useState(false);
  // const [dropdownVisibilityDate, setDropdownVisibilityDate] = useState(false);
  

  //드롭다운 컴포넌트
  const Dropdown = (props) => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);
    const [repeat, setRepeat] = useState(null);

    useEffect(() => {
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
      <article className={`components-dropdown ${
        props.visibility ? "slide-fade-in-dropdown": "slide-fade-out-dropdown"}`}>
        {visibilityAnimation && props.children}
      </article>
    );
  };

  //드롭다운 컴포넌트 (본체 69 ~ 87)
  const App = (props) => {
    return (
      <DropDownWrap>
        <DropDownButton onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
          {dropdownVisibility ? (
            <DropText>
              <TextImageWrap>
              <img src = {clipboard} />  
              <SpanInText>닫기</SpanInText></TextImageWrap>
                <img src={up} />
            </DropText>
          ) : (
            <DropText>
              <TextImageWrap>
                <img src = {clipboard} />          
                <SpanInText>직군 선택하기</SpanInText></TextImageWrap>
                <img src={down} />
            </DropText>
          )}
        </DropDownButton>
        <Dropdown visibility={dropdownVisibility}>
          <ul className="optionList">
            <li className="ListinOption">프론트엔드 엔지니어</li>
            <li className="ListinOption">백엔드 엔지니어</li>
            {/* <li className="ListinOption">개발자</li> */}
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
        <DropDownButtonSkill onClick={(e) => setDropdownVisibilitySkill(!dropdownVisibilitySkill)}>
          {dropdownVisibilitySkill ? (
            <DropTextSkill>
              <TextImageWrap>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3053 0L16 4.69473L4.69473 16H0V11.3053L11.3053 0ZM11.3053 1.87789L9.73255 3.45062L12.5494 6.26745L14.1221 4.69473L11.3053 1.87789ZM11.6105 7.20641L8.79365 4.38956L1.32787 11.8554V14.6721H4.1447L11.6105 7.20641Z" fill="black"/>
                </svg><SpanInText>닫기</SpanInText>
              </TextImageWrap>
              <svg width="17" height="11" viewBox="0 0 17 11" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1324 10.5916L16.6074 9.11655L8.35742 0.866552L0.107422 9.11655L1.58242 10.5916L8.35742 3.81655L15.1324 10.5916Z" fill="#black"/>
              </svg>
            </DropTextSkill>
          ) : (
            <DropTextSkill>
              <TextImageWrap>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3053 0L16 4.69473L4.69473 16H0V11.3053L11.3053 0ZM11.3053 1.87789L9.73255 3.45062L12.5494 6.26745L14.1221 4.69473L11.3053 1.87789ZM11.6105 7.20641L8.79365 4.38956L1.32787 11.8554V14.6721H4.1447L11.6105 7.20641Z" fill="black"/>
                </svg>
                <SpanInText>스킬 및 스택</SpanInText>
              </TextImageWrap>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7375 0.737549L8 6.46255L2.2625 0.737549L0.5 2.50005L8 10L15.5 2.50005L13.7375 0.737549Z" fill="#black"/>
                </svg>
            </DropTextSkill>
          )}
        </DropDownButtonSkill>
        <Dropdown visibility={dropdownVisibilitySkill}>
          <SelectBoxWrap>
            <SelectAllWrap>
              <TitleTextTag>개발자</TitleTextTag>
              <SelectBoxTab>
                <TecLabel> <CheckBox type="checkbox"></CheckBox>React</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Vue.js</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>JavaScript</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Node.js</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Java</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Spring</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Python</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>MongoDB</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>MySQL</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Redis</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>TypeScript</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Ruby</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>AWS</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Go</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>PHP</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Git</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>.NET</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>React Native</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Django</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Flask</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Nest.JS</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Express.JS</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>NoSQL</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>SQL</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Swift</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Kotlin</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>Android</TecLabel>
                  <TecLabel> <CheckBox type="checkbox"></CheckBox>iOS</TecLabel>
              </SelectBoxTab>
            </SelectAllWrap>

            <SelectAllWrap>
              <TitleTextTag>디자이너</TitleTextTag>
              <SelectBoxTab>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Figma</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe XD</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe Illustrator</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe PhotoShop</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Invision</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Sketch</TecLabel>
                <TecLabel><CheckBox type="checkbox"></CheckBox>Protopie</TecLabel>
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

  const DayPickerAnother = () => {
    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  let footer = (
    <Container1 className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
      <ContainerStartDateDiv1>
        <DateFirstViewWrap>
          <DateWrap>
            <img src = {calender}/>
            <ButtonName>프로젝트 기간</ButtonName>
          </DateWrap> 
            <img src = {down}/>
        </DateFirstViewWrap>
      </ContainerStartDateDiv1>
    </Container1>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <img src = {calender}/>
            <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
            <img src = {down}/>
          </ContainerStartDateDiv1>
        </Container1>
      );
    } else if (selected?.to) {
      footer = (
        <Container1 type="button" className="pa2 bg-white button-reset ba" aria-label="Pick a date" onClick={onClickToggle}>
          <ContainerStartDateDiv1>
            <img src = {calender}/>
              <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
              <SelectedDateWave>{' ~ '}</SelectedDateWave>
              <SelectedDate>{format(selected.to,  "MM월 dd일")}</SelectedDate>
          </ContainerStartDateDiv1>
        </Container1>
      );
    }
  }

  return (
    <DivDayPicker>
      {footer}
      {toggle ? (
        <DayPicker 
          className="dayPicker_container__divMain"
          styles={{caption: { fontSize: "13px", margin: "20px 0px 20px 0px"}}}
          modifiersStyles={{ disabled: { fontSize: '85%' } }}
          mode="range" 
          selected={selected} 
          onSelect={setSelected} 
          locale={ko} 
          numberOfMonths={2} 
          disabled={{ before: today }}>
          </DayPicker>
      ) : ("")}
    </DivDayPicker>
  );
};


  // 리턴 컴포넌트 최종(출력 구간)
  return (
    <BackGroundDiv>
      <DropDownAllWrap>
          <CompoWrap><App /> <DayPickerAnother /> <AppSkill /> </CompoWrap>
        <RecButtonWrap>
          <RecritButton onClick={() => {navigate(`/findprojectstep1`);}}>모집글 올리기</RecritButton>
        </RecButtonWrap>
      </DropDownAllWrap>
    </BackGroundDiv>
  );
}


const BackGroundDiv = styled.div`
    /* background-color: #303032; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DropDownAllWrap = styled.div`
  /* border: 1px solid white; */
  max-width: 1440px;
  width: 100%;
  height: 110px;
  padding: 0px 100px 0px 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const DropDownWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-left: 180px; */
`;

const DropDownButton = styled.label`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 9px 13px 9px 13px;
  width: 150px;
  font-weight: 400;
  border-right: 1px solid black;
`;

const TextImageWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const DropDownButtonSkill = styled.label`
  /* border: 1px solid black; */
  outline: none;
  border: none;
  cursor: pointer;
  padding: 9px 10px 9px 10px;
  width: 145px;
  font-weight: bold;
  margin-left: 5px;
`;

const DropText = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const DropTextSkill = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const SelectBoxWrap = styled.div`
  border: 1px solid #323230;
  width: 600px;
  height: 380px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
  background-color: white;
  border-radius: 5px;
`;

const SelectAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
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
  gap: 13px;
`;

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
`;

const SelectButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #AE97E3;
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
    background-color: #AE97E3;
  }
`;

const TitleTextTag = styled.p`
  font-weight: bold;
  color: #AE97E3;
`;

const SelectButtonWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* gap: 15px; */
`;

const SpanInText = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const RecritButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: linear-gradient(115.2deg, #AE97E3, #77C3E7 77.66%);
  border-radius: 2px;
  padding: 8px 24px 8px 24px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  width: 127px;
  height: 37px;
`;

const RecButtonWrap = styled.div`
  /* border: 1px solid black; */
`;

const CompoWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 608px;
  height: 36px;
  /* background-color: #1F1F1F; */
  /* color: white; */
`



const SelectedDate = styled.span`
  font-size: 13px;
  margin-left: 5px;
  margin-right: 10px;
`;

const SelectedDateWave = styled.div`
  font-size: 14px;
  margin-left: 3px;
  margin-right: 3px;
`

const ContainerStartDateDiv1 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const Container1 = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  cursor: pointer;
  padding: 9px 12px 9px 10px;
  border-right: 1px solid black;
  width: 215px;
`;

const DateFirstViewWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width:160px;
`

const ButtonName = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
`;

const DateWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`

const DivDayPicker = styled.div`
  position: relative;
`;

export default RecSelectCompo;

// return (
//     <DropDownAllWrap>
//       <App/> <SelectBoxLabel onClick={() => { setModal(); setModal(true); }}>
//           <DropText><span>기술스택 선택</span> <img src = {down} /> </DropText></SelectBoxLabel>
//       {modal === true ? <SelectBox close={setModal}/> : null}
//     </DropDownAllWrap>
//   );
