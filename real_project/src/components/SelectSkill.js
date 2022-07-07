import { useState } from "react";
import styled from "styled-components"
import { useForm, Controller } from "react-hook-form";

function SelectSkill({ control }) {

  const [dvelopSkills, setSkills] = useState([]);
  
  const dvelopSkills_list =[
    {data: 'React' },
    {data: 'Vue.js' },
    {data: 'JavaScript' },
    {data: 'Node.js' },
    {data: 'Java' },
    {data: 'Spring' },
    {data: 'Python' },
    {data: 'MongoDB' },
    {data: 'MySQL' },
    {data: 'Redis' },
    {data: 'TypeScript' },
    {data: 'Ruby' },
    {data: 'AWS' },
    {data: 'Go' },
    {data: 'PHP' },
    {data: 'Git' },
    {data: '.NET' },
    {data: 'React Native' },
    {data: 'Django' },
    {data: 'Flask' },
    {data: 'Nest.JS' },
    {data: 'Express.JS' },
    {data: 'NoSQL' },
    {data: 'SQL' },
    {data: 'Swift' },
    {data: 'Kotlin' },
    {data: 'Android' },
    {data: 'iOS' },
  ]
  const designerSkills_list =[
    {data:'Figma'},
    {data:'Adobe XD'},
    {data:'Adobe Illustrator'},
    {data:'Adobe PhotoShop'},
    {data:'Invision'},
    {data:'Sketch'},
    {data:'Protopie'},
  ]

  return (
    <>

          <SelectBoxWrap>
            <SelectAllWrap>
              <TitleTextTag>개발자</TitleTextTag>
              <SelectBoxTab>
                
              {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
                return <TecLabel> <CheckBox type="checkbox" id="skills"  ></CheckBox>{list.data}</TecLabel>;})}
              </SelectBoxTab>
            </SelectAllWrap>

            <SelectAllWrap>
              <TitleTextTag>디자이너</TitleTextTag>
              <SelectBoxTab>
              {designerSkills_list && designerSkills_list.map((list, idx) => {
                return <TecLabel> <CheckBox type="checkbox" id="skills"  ></CheckBox>{list.data}</TecLabel>;})}
              </SelectBoxTab>
            </SelectAllWrap>

          </SelectBoxWrap>
       
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