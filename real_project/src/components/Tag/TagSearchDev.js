import styled from "styled-components";

import close from "../../image/tagclose.svg"

function TagCompoSearchDev({ skills }) {

    return <TagButton>{skills}<Img src={close}/></TagButton>;
}

const TagButton = styled.button`
  border: none;
  outline: none;
  background-color: #F4E0E2;
  font-size: 12px;
  font-weight: 500;
  border-radius: 30px;
  padding: 5px 12px 5px 12px;
  color: white;
`;

const Img = styled.img`
  cursor: pointer;
`
 
export default TagCompoSearchDev;
