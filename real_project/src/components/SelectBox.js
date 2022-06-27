import React from "react";
import styled from "styled-components";

function SelectBox() {
    return(
        <>
            <SelectBoxWrap>
                <SelectAllWrap>
                    <p>개발자</p>
                    <SelectBoxTab>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>React</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Vue</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>JavaScript</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Nuxt.js</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Getsby</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>JQuery</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Backbone</TecLabel>
                        <TecLabel><CheckBox type="checkbox"></CheckBox>Svelte</TecLabel>


                    </SelectBoxTab>

                </SelectAllWrap>

            </SelectBoxWrap>
        </>
    )
}


const SelectBoxWrap = styled.div`
    border: 1px solid black;
    width: 800px;
    height: 400px;
    display: flex;
`

const SelectAllWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const SelectBoxTab = styled.div`
    /* border: 1px solid black; */
`

const CheckBox = styled.input`

`

const TecLabel = styled.label`
    font-size: 14px;
`


export default SelectBox