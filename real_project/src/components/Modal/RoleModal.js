import React, {useState} from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import {loadrole} from "../../redux/modules/search"


function RoleModal (props) {

    const dispatch = useDispatch()

    const [role, setRole] = useState("");
    console.log(role)

    const roleChange = (e) => {
        setRole(e.target.value);
      };

    const CloseModal = () => {
    props.close(false);
    };  

    const Addrole = () => {
        dispatch(loadrole(role))
        // CloseModal()
    }  


    return(
        <RelativeWrap>
            <RoleWrap>
                <RoleLabelStart>
                    <RoleInput
                    id="role" 
                    name="Radio"
                    type="radio" 
                    value="FrontEnd 개발자"
                    onClick={Addrole}
                    onChange={roleChange}/>
                    FrontEnd 개발자</RoleLabelStart>
                <RoleLabel>
                    <RoleInput 
                    id="role"
                    name="Radio"
                    onClick={Addrole}
                    type="radio" 
                    value="BackEnd 개발자" 
                    onChange={roleChange}/>
                    BackEnd 개발자</RoleLabel>
                <RoleLabelEnd>
                    <RoleInput
                    id="role" 
                    name="Radio"
                    onClick={Addrole}
                    type="radio" 
                    value="UX/UI 디자이너" 
                    onChange={roleChange}/>
                    UX/UI 디자이너</RoleLabelEnd>
            </RoleWrap>
        </RelativeWrap>
    )
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
  margin-right: 12px;
  &:checked {
    border-color: transparent;
    background-color: #77c3e7;
  }
`;


const RoleWrap = styled.div`
    width: 250px;
    height: 136px;
    border: 0.5px solid #303032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    z-index: 5;
    background-color: white;
    top: 23px;
`


const RoleLabel = styled.label`
    width: 220px;
    /* border: 1px solid black; */
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.5px solid black;
    cursor: pointer;
`

const RoleLabelEnd = styled.label`
    width: 220px;
    /* border: 1px solid black; */
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`


const RoleLabelStart = styled.label`
    width: 220px;
    /* border: 1px solid black; */
    padding: 10px 15px 10px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: none;
    border-bottom: 0.5px solid black;
    cursor: pointer;
`


export default RoleModal