import React, { useState } from "react"
import styled from "styled-components"
import { dvelopSkills_list, designerSkills_list} from "../../shared/developeSkills";


function SkillModal () {

    const [checkList, setCheckList] = useState([]);

    const onCheckedElement = (checked, item) => {
        if (checked) {
          setCheckList([...checkList, item]);
        } else if (!checked) {
          setCheckList(checkList.filter((el) => el !== item));
        }
      };

    return(
        <>
            <SkillModalWrap>
                    <InputMainTextWrap>
                <ProjectTitleText>개발자</ProjectTitleText>
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
                </InputMainTextWrap>
                <InputMainTextWrap>
                <ProjectTitleText>디자이너</ProjectTitleText>
                <SelectBoxTab>
                    {designerSkills_list &&
                    designerSkills_list.map((list, idx) => {
                        return (
                        <TecLabel key={idx}>
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
                </InputMainTextWrap>
        </SkillModalWrap>
        </>
    )
}


const CheckBox = styled.input`
  appearance: none;
  border: 2px solid gainsboro;
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
    background-color: #77c3e7;
  }
`

const InputMainTextWrap = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`

const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  width: 580px;
`;

const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  gap: 15px;
  margin-bottom: 20px;
`

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
`;

const SkillModalWrap = styled.div`
    width: 641px;
    height: 377px;
    border: 0.5px solid #303032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export default SkillModal