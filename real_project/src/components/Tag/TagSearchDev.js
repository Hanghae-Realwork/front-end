import { useDispatch } from "react-redux";
import styled from "styled-components";
import { React, useState } from "react";
import {skillDelete} from "../../redux/modules/search"

import close from "../../image/tagclose.svg"

function TagCompoSearchDev({ skills }) {

  const dispatch = useDispatch()
  const [total,setTotal]=useState(skills)


  return <TagButton>{skills}<Img src={close} onClick={() => {
     dispatch(skillDelete(skills));
    }}/></TagButton>;
}

const TagButton = styled.label`
  background-color: #ECE0EC;
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
