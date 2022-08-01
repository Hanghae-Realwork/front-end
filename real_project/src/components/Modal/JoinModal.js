import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import Logo from "../../image/Logo_vertical.svg";
import close from "../../image/closeIcon.svg";
import { useNavigate } from "react-router-dom";

function JoinModal(props) {
  const navigate = useNavigate();

  const CloseModal = () => {
    props.close(false);
  };

  const modalEl = useRef(null);



 
  return (
    <>
  
        <RelativeBackWrap ref={modalEl}>
          <JustRelative>
            <JoinAllWrap>
              <CloseWrap>
                <CloseBtn src={close} onClick={CloseModal} />
              </CloseWrap>
              <LogoArea />
              <LoginGuide>
                서비스를 이용하기 위해 로그인이 필요합니다
              </LoginGuide>
              <GotoLoginBtn
                onClick={() => {
                navigate(`/login`);
                CloseModal()
                }}
                
              >
                로그인하러 가기
              </GotoLoginBtn>
              <GotoJoinBtn
                onClick={() => {
                navigate(`/join`);
                    CloseModal();
                }}
              >
                회원가입하러 가기
              </GotoJoinBtn>
            </JoinAllWrap>
          </JustRelative>
        </RelativeBackWrap>
  
    </>
  );
}

const JoinAllWrap = styled.div`
  width: 685px;
  height: 522px;
  background: #303032;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 150px;
  left: 1950px;
`;

const LogoArea = styled.div`
  background-image: url(${Logo});
  width: 200px;
  height: 45px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const LoginGuide = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin-top: 54px;
`;

const GotoJoinBtn = styled.button`
  color: white;
  background: transparent;
  border: 1px solid white;
  background-clip: content-box, border-box;
  border-radius: 4px;
  padding: 6.5px 33.5px 6.5px 33.5px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  margin-top: 20.79px;
  width: 384px;
  height: 60px;
  cursor: pointer;
`;

const GotoLoginBtn = styled.button`
  color: white;
  background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
  border-radius: 4px;
  padding: 6.5px 33.5px 6.5px 33.5px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  outline: none;
  margin-top: 40px;
  width: 384px;
  height: 60px;
  cursor: pointer;
`;

const CloseWrap = styled.div`
  width: 620px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -60px;
  margin-bottom: 80px;
`;

const CloseBtn = styled.img`
  cursor: pointer;
`;

const RelativeBackWrap = styled.div`
  background-color: rgba(48, 48, 50, 0.8);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  width: 400vh;
  height: 135vh;
  position: absolute;
  left: 0vh;
  top: 0vh;
  display: flex;
`;

const JustRelative = styled.div`
  position: relative;
  left: -700px;
`;

export default JoinModal;
