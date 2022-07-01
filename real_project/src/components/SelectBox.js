import React from "react";
import styled from "styled-components";


function SelectBox(props) {

    const CloseModal = () => {
        props.close(false);
      };

  return (
    <>
      <SelectBoxWrap>

        <SelectAllWrap>
            <TitleTextTag>개발자</TitleTextTag>
          <SelectBoxTab>
            <TecLabel>
                <CheckBox type="checkbox"></CheckBox>React</TecLabel>
            <TecLabel>
                <CheckBox type="checkbox"></CheckBox>Vue.js</TecLabel>
            <TecLabel>
                <CheckBox type="checkbox"></CheckBox>JavaScript</TecLabel>
            <TecLabel>
                <CheckBox type="checkbox"></CheckBox>Node.js</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>Java</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>Spring</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>Python</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>C</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>C++</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>C#</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>Swift</TecLabel>
            <TecLabel>
              <CheckBox type="checkbox"></CheckBox>Kotlin</TecLabel>
          </SelectBoxTab>
        </SelectAllWrap>

        <SelectAllWrap>
            <TitleTextTag>디자이너</TitleTextTag>
          <SelectBoxTab>
            <TecLabel><CheckBox type="checkbox"></CheckBox>Figma</TecLabel>
            <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe XD</TecLabel>
            <TecLabel><CheckBox type="checkbox"></CheckBox>Illustrator</TecLabel>
            <TecLabel><CheckBox type="checkbox"></CheckBox>3D MAX</TecLabel>
            <TecLabel><CheckBox type="checkbox"></CheckBox>Blender</TecLabel>
          </SelectBoxTab>
        </SelectAllWrap>
        <SelectButtonWrap>
            <SelectButton> 선택 완료 </SelectButton>
            <CloseButton onClick={() => {CloseModal()}}> 창 닫기 </CloseButton>
        </SelectButtonWrap>
      </SelectBoxWrap>
    </>
  );
}

const SelectBoxWrap = styled.div`
  border: 3px solid #685bc7;
  width: 600px;
  height: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 180px;
  right: 370px;
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

const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #9595D2;
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
`

const TitleTextTag = styled.p`
    font-weight: bold;
    color: #685bc7;

`

const SelectButtonWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
`



export default SelectBox;
