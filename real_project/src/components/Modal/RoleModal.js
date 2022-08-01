import React, {useState,useRef} from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import {loadrole} from "../../redux/modules/search"


function RoleModal(props) {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const roleChange = (e) => {
      setRole(e.target.value);
  };

  const CloseModal = () => {
    props.close(false);
  };

  const Addrole = () => {
    dispatch(loadrole(role));
    CloseModal();
  };

  return (
    <RelativeWrap>
      <RoleWrap>
        <RadioWrap>
          <RoleLabelStart>
            <RoleInput
              id="role"
              name="Radio"
              type="radio"
              value="frontend"
              onChange={roleChange}
            />
            FrontEnd 개발자
          </RoleLabelStart>
          <RoleLabel>
            <RoleInput
              id="role"
              name="Radio"
              type="radio"
              value="backend"
              onChange={roleChange}
            />
            BackEnd 개발자
          </RoleLabel>
          <RoleLabelEnd>
            <RoleInput
              id="role"
              name="Radio"
              type="radio"
              value="designer"
              onChange={roleChange}
            />
            UX/UI 디자이너
          </RoleLabelEnd>
        </RadioWrap>
        <DivideLine />
        <ButtonWrap>
          <SubmitButton onClick={Addrole}>선택 완료</SubmitButton>
        </ButtonWrap>
      </RoleWrap>
    </RelativeWrap>
  );
}


const RelativeWrap = styled.div`
    position: relative;
`


const RoleInput = styled.input`
  appearance: none;
  border: 2px solid gainsboro;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin-bottom: 3.5px;
  margin-right: 6px;
  &:checked {
    border-color: transparent;
    background-color: #77c3e7;
  }
`;


const RoleWrap = styled.div`
    width: 452px;
    height: 179px;
    border: 0.5px solid #303032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    background-color: white;
    top: 23px;
`


const RoleLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`

const RoleLabelEnd = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`


const RoleLabelStart = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`

const RadioWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 17px;
    margin: 20px 0px 20px 0px;
`

const DivideLine = styled.hr`
    border: 0.5px solid #d9d9d9;
    width: 452px;
    margin-top: 20px;
`

const ButtonWrap = styled.div`
    width: 425px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const SubmitButton = styled.button`
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 15px 0px 5px 0px;
    color: white;
    padding: 7px 20px 7px 20px;
    font-size: 14px;
    font-weight: 700;
`

export default RoleModal