import "../App.css";

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DayPickerMain from "./DayPickerMain";
import { useDispatch,useSelector } from "react-redux";
import { checkUserValidation } from "../redux/modules/user";
import { dvelopSkills_list, designerSkills_list} from "../shared/developeSkills";


function SelectCompo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);



  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckList([...checkList, item]);
    } else if (!checked) {
      setCheckList(checkList.filter((el) => el !== item));
    }
  };

  const [checkList, setCheckList] = useState([]);


  //드롭다운 스테이트 (전역)
  //스택 선택 스테이트 (전역))
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownVisibilitySkill, setDropdownVisibilitySkill] = useState(false);

  //드롭다운 컴포넌트 (자식 18 ~ 40)
  const Dropdown = (props) => {
    const [visibilityAnimation, setVisibilityAnimation] = useState(false);
    const [repeat, setRepeat] = React.useState(null);

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
          props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"}`}>
        {visibilityAnimation && props.children}
      </article>
    );
  };

  //스택 선택 드롭다운 (43 ~ 65)
  const DropdownSkill = (props) => {
    const [visibilityAni, setVisibilityAni] = React.useState(false);
    const [repeatSkill, setRepeatSkill] = React.useState(null);

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
              <TextImageWrap>
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.69238 12H10.6155V13.3846H3.69238V12Z"
                    fill="white"
                  />
                  <path
                    d="M8.76931 8.30786H3.69238V9.69248H8.76931V8.30786Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6154 0H3.69231V2.76923H0V18H14.3077V2.76923H10.6154V0ZM10.6154 4.15385V6H3.69231V4.15385H1.38462V16.6154H12.9231V4.15385H10.6154ZM5.07692 4.61538V1.38462H9.23077V4.61538H5.07692Z"
                    fill="white"
                  />
                </svg>
                <SpanInText>닫기</SpanInText>
              </TextImageWrap>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1324 10.5916L16.6074 9.11655L8.35742 0.866552L0.107422 9.11655L1.58242 10.5916L8.35742 3.81655L15.1324 10.5916Z"
                  fill="#fff"
                />
              </svg>
            </DropText>
          ) : (
            <DropText>
              <TextImageWrap>
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.69238 12H10.6155V13.3846H3.69238V12Z"
                    fill="black"
                  />
                  <path
                    d="M8.76931 8.30786H3.69238V9.69248H8.76931V8.30786Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6154 0H3.69231V2.76923H0V18H14.3077V2.76923H10.6154V0ZM10.6154 4.15385V6H3.69231V4.15385H1.38462V16.6154H12.9231V4.15385H10.6154ZM5.07692 4.61538V1.38462H9.23077V4.61538H5.07692Z"
                    fill="black"
                  />
                </svg>
                <SpanInText>직군 선택하기</SpanInText>
              </TextImageWrap>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7375 0.737549L8 6.46255L2.2625 0.737549L0.5 2.50005L8 10L15.5 2.50005L13.7375 0.737549Z"
                  fill="#black"
                />
              </svg>
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
        <DropDownButtonSkill
          onClick={(e) => setDropdownVisibilitySkill(!dropdownVisibilitySkill)}
        >
          {dropdownVisibilitySkill ? (
            <DropTextSkill>
              <TextImageWrap>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3053 0L16 4.69473L4.69473 16H0V11.3053L11.3053 0ZM11.3053 1.87789L9.73255 3.45062L12.5494 6.26745L14.1221 4.69473L11.3053 1.87789ZM11.6105 7.20641L8.79365 4.38956L1.32787 11.8554V14.6721H4.1447L11.6105 7.20641Z"
                    fill="black"
                  />
                </svg>
                <SpanInText>닫기</SpanInText>
              </TextImageWrap>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1324 10.5916L16.6074 9.11655L8.35742 0.866552L0.107422 9.11655L1.58242 10.5916L8.35742 3.81655L15.1324 10.5916Z"
                  fill="#black"
                />
              </svg>
            </DropTextSkill>
          ) : (
            <DropTextSkill>
              <TextImageWrap>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3053 0L16 4.69473L4.69473 16H0V11.3053L11.3053 0ZM11.3053 1.87789L9.73255 3.45062L12.5494 6.26745L14.1221 4.69473L11.3053 1.87789ZM11.6105 7.20641L8.79365 4.38956L1.32787 11.8554V14.6721H4.1447L11.6105 7.20641Z"
                    fill="black"
                  />
                </svg>
                <SpanInText>스킬 및 스택</SpanInText>
              </TextImageWrap>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7375 0.737549L8 6.46255L2.2625 0.737549L0.5 2.50005L8 10L15.5 2.50005L13.7375 0.737549Z"
                  fill="#black"
                />
              </svg>
            </DropTextSkill>
          )}
        </DropDownButtonSkill>
        <Dropdown visibility={dropdownVisibilitySkill}>
          <SelectBoxWrap>
            <SelectAllWrap>
              <TitleTextTag>개발자</TitleTextTag>
             
                <SelectBoxTab>
                    {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
                        return (
                          <TecLabel key={idx}>
                            <CheckBox type="checkbox" id="skills" value={list.data}
                              onChange={(e) => {
                                //onchange이벤트 발생 시 checked여부와 value값을 배열 데이터에 넣는다.
                                onCheckedElement(
                                  e.target.checked,
                                  e.target.value
                                );
                              }}
                              checked={ checkList.includes(list.data) ? true : false }
                            ></CheckBox>
                            {list.data}
                          </TecLabel>
                        );
                      })}
                      </SelectBoxTab>
            </SelectAllWrap>

            <SelectAllWrap>
              <TitleTextTag>디자이너</TitleTextTag>
              <SelectBoxTab>
                  {designerSkills_list && designerSkills_list.map((list, idx) => {
                      return (
                        <TecLabel key={idx}>
                          <CheckBox type="checkbox" id="skills" value={list.data}
                            onChange={(e) => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                          ></CheckBox>
                          {list.data}
                        </TecLabel>
                      );
                    })}
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
  //로그인 유무
  const loginInfo = useSelector((state) => state.user.userInfo.is_login);





  // 리턴 컴포넌트 최종(출력 구간)
  return (
    <BackGroundDiv>
      <DropDownAllWrap>
        <CompoWrap>
          <App /> <DayPickerMain /> <AppSkill />
        </CompoWrap>
        <RecButtonWrap>
          <RecritButton onClick={() => {if (loginInfo === false) {alert("로그인을 해주세요!");
                return false}if (loginInfo === true) {dispatch(checkUserValidation())
                navigate(`/addprofile`);}
              }}>
            크루원 등록
          </RecritButton>
        </RecButtonWrap>
      </DropDownAllWrap>
    </BackGroundDiv>
  );
};




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
  border: 3px solid #AE97E3;
  width: 600px;
  height: 380px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  position: absolute;
  background-color: white;
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




export default SelectCompo;

// return (
//     <DropDownAllWrap>
//       <App/> <SelectBoxLabel onClick={() => { setModal(); setModal(true); }}>
//           <DropText><span>기술스택 선택</span> <img src = {down} /> </DropText></SelectBoxLabel>
//       {modal === true ? <SelectBox close={setModal}/> : null}
//     </DropDownAllWrap>
//   );
