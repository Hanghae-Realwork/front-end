import React from "react";
import styled from "styled-components";

function SelectBox() {

    
    
    return(
        <>
            <SelectBoxWrap>
                <SelectAllWrap>
                        <CategoryText>FrontEnd-Enginer</CategoryText>
                    <SelectBoxTab>
                        <TecLabel><CheckBox type="checkbox" name="FrontAll"></CheckBox>전체 선택</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>React</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>Vue</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>JavaScript</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>Getsby</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>JQuery</TecLabel>
                        <TecLabel><CheckBox type="checkbox" name="Front"></CheckBox>Backbone</TecLabel>
                    </SelectBoxTab>
                </SelectAllWrap>
                <SelectAllWrap>
                <CategoryText>Backend-Enginer</CategoryText>
                    <SelectBoxTab>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>전체 선택</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Spring</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Java</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>JavaScript</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Koa</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>.NET</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>PHP</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Python</TecLabel>
                    </SelectBoxTab>
                </SelectAllWrap>
                <SelectAllWrap>
                <CategoryText>UX/UI Designer</CategoryText>
                    <SelectBoxTab>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>전체 선택</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Figma</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Adobe XD</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Illustrator</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>3D MAX</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Blender</TecLabel>
                    </SelectBoxTab>
                </SelectAllWrap>
                <SelectButton> 적용 완료 </SelectButton>

            </SelectBoxWrap>
        </>
    )
}


const SelectBoxWrap = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 20px;
    padding: 20px;
`

const SelectAllWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 12px;
`

const SelectBoxTab = styled.div`
    /* border: 1px solid black; */
`


const CheckBox = styled.input`

`

const CategoryText = styled.p`
    font-weight: bold;
`

const TecLabel = styled.label`
    font-size: 14px;
`

const SelectButton = styled.div`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #C1C6C8;
    color: white;
    padding: 10px;
    margin-top: 15px;
    border-radius: 10px;
    font-size: 14px;

`


export default SelectBox