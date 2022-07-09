import React, { useState } from 'react';

import styled from 'styled-components';

const modalMainRecruit = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close} >
              선택취소 &times;
            </button>
          </header>
          <main>
            <SelectAllWrap>
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


            </SelectAllWrap>
            <SelectButton> 적용 완료 </SelectButton>
          </main>
          <footer>
            <button className="close" onClick={close}>
              입력
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};


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



export default modalMainRecruit;

