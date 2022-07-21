import { useDispatch } from "react-redux";
import styled from "styled-components";

import {skillDelete} from "../../redux/modules/search"

import close from "../../image/tagclose.svg"

function TagCompoSearchDev({ skills }) {

  const dispatch = useDispatch()

  const deleteButton = () => {
    dispatch(skillDelete())
  }



    return <TagButton>{skills}<Img src={close} onClick={deleteButton}/></TagButton>;
}

const TagButton = styled.label`
  background-color: #F4E0E2;
  font-size: 12px;
  font-weight: 500;
  border-radius: 30px;
  padding: 5px 12px 5px 12px;

`;

const Img = styled.img`
  cursor: pointer;
  margin-left: 5px;
`
 
export default TagCompoSearchDev;
