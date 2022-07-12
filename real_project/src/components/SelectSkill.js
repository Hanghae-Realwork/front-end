import { useState } from "react";
import styled from "styled-components"
import {
  dvelopSkills_list,
  designerSkills_list,
} from "../shared/developeSkills";

function SelectSkill() {
  const [checkList, setCheckList] = useState([])

//onChenge 함수를 사용하여 이벤트를 감지, 필요한 값 받아온다.
  const onCheckedElement = (checked, item) => {

    if (checked) {
      setCheckList([...checkList, item])
      console.log(checkList)
    } else if (!checked) {
      setCheckList(checkList.filter(el => el !== item));
    }
  }

  return (
    <>
      <SkillWrap>
        <SkillTitleTextTag>개발자</SkillTitleTextTag>
        <SelectBoxTab>
          {dvelopSkills_list &&
            dvelopSkills_list.map((list, idx) => {
              return (
                <TecLabel key={idx}>
                  <CheckBox
                    type="checkbox"
                    id="skills"
                    value={list.data}
                    onChange={(e) => {
                      //onchange이벤트 발생 시 checked여부와 value값을 배열 데이터에 넣는다.
                      onCheckedElement(e.target.checked, e.target.value);
                    }}
                    checked={checkList.includes(list.data) ? true : false}
                  ></CheckBox>
                  {list.data}
                </TecLabel>
              );
            })}
        </SelectBoxTab>
      </SkillWrap>

      <SkillWrap>
        <SkillTitleTextTag>디자이너</SkillTitleTextTag>
        <SelectBoxTab>
          {designerSkills_list &&
            designerSkills_list.map((list, idx) => {
              return (
                <TecLabel key={idx}>
                  {" "}
                  <CheckBox
                    type="checkbox"
                    id="skills"
                    value={list.data}
                    onChange={(e) => {
                      onCheckedElement(e.target.checked, e.target.value);
                    }}
                  ></CheckBox>
                  {list.data}
                </TecLabel>
              );
            })}
        </SelectBoxTab>
      </SkillWrap>
    </>
  );
}




const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;



const SkillWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 580px;
  padding: 10px;
  /* border: 1px solid black; */
`;

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
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

const SkillTitleTextTag = styled.p`
  font-weight: bold;
  color: #AE97E3;
`;


export default SelectSkill;