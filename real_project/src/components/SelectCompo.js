import '../App.css';

import React, { useState } from "react";
import styled from "styled-components";

import SelectBox from "../components/SelectBox";


import up from "../image/up-fill.svg"
import down from "../image/down-fill.svg"

function SelectCompo() {

    const [modal, setModal] = useState(false);

    //드롭다운 스테이트 (전역)
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    //드롭다운 컴포넌트 (자식 15 ~ 37)   
    const Dropdown = props => {
        const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
        const [repeat, setRepeat] = React.useState(null);
    
        React.useEffect(() => {
            if (props.visibility) {
                clearTimeout(repeat);
                setRepeat(null);
                setVisibilityAnimation(true);
            } else {
                setRepeat(setTimeout(() => {
                    setVisibilityAnimation(false);
                }, 400));
            }
        }, [props.visibility]);
    
        return (
            <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
                { visibilityAnimation && props.children }
            </article>
        )
    };

    //드롭다운 컴포넌트 (본체 39 ~ 58)
    const App = props => {
        return (
            <DropDownWrap>
                <DropDownButton onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {dropdownVisibility ? 
                    <DropText><span>닫기</span><img src = {up} /></DropText> : 
                    <DropText><span>직군 선택하기</span><img src = {down} /></DropText>}
            </DropDownButton>
                <Dropdown visibility={dropdownVisibility}>
                    <ul className='optionList'>
                        <li className='ListinOption'>프론트엔드 엔지니어</li>
                        <li className='ListinOption'>백엔드 엔지니어</li>
                        <li className='ListinOption'>개발자</li>
                        <li className='ListinOption'>디자이너</li>
                    </ul>
                </Dropdown>
            </DropDownWrap>
        )
    };

    // 리턴 컴포넌트 최종(출력 구간)
    return (
      <DropDownAllWrap>
        <App/> <SelectBoxLabel onClick={() => {
            setModal(); setModal(true);
            }}>
                <DropText>
                    <span>기술스택 선택</span> 
                    <img src = {down} />
                </DropText>
            </SelectBoxLabel>
        {modal === true ? <SelectBox close={setModal}/> : null}
      </DropDownAllWrap>
    );
}


const DropDownAllWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`

const DropDownWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    /* margin-left: 180px; */
`

const DropDownButton = styled.label`
    /* border: 1px solid black; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    width: 200px;
    color: white;
    font-weight: bold;
    background-color: #685BC7;
`

const DropText = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const SelectBoxLabel = styled.label`
    background-color: #685BC7;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    padding: 10px;
    width: 160px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: bold;
`

export default SelectCompo