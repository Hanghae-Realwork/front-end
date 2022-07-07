import { useState } from "react";
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form";

function SelectSkill({ control }) {

  const [skills, setSkills] = useState([]);
  



  return (
    <>

      <Controller
        control={control}
        name="skills"
        format={skills}
        // render를 사용해서, field값을 복사하거나 꺼내 쓰면 된다.
        // field안에는 value나 onBlur와 같은 함수도 있음
        // render안의 onChange를 조작해, onChange안에 들어갈 값을
        // 선택할 수 있다.
        render={({ field: { onChange, value, name } }) => (
          
          <SelectBoxWrap>

            <SelectAllWrap>
              <TitleTextTag>개발자</TitleTextTag>
              <SelectBoxTab>
                {/* <TecLabel><CheckBox type="checkbox" value="React" checked={value} onChange={onChange} /></TecLabel>; */}
                <TecLabel> <CheckBox type="checkbox" id="skills" value="React" onChange={value} ></CheckBox>React</TecLabel>
                <TecLabel> <CheckBox type="checkbox" id="skills" value="Vue.js" onChange={(id) => {onChange(id);}}></CheckBox>Vue.js</TecLabel>
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

          </SelectBoxWrap>
        )}
      />
    </>
  )
}




const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

const SelectBoxWrap = styled.div`
  
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

const TitleTextTag = styled.p`
  font-weight: bold;
  color: #AE97E3;
`;


export default SelectSkill;