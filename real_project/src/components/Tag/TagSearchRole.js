import styled from "styled-components";

import close from "../../image/closeIcon.svg"

function TagCompoSearchDes({ skills }) {

    return <TagButton>{skills}<img src={close}/></TagButton>;
}

const TagButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ae97e3;
  font-size: 12px;
  font-weight: 500;
  border-radius: 15px;
  padding: 5px 12px 5px 12px;
  color: white;
  margin: 3px;
`;

export default TagCompoSearchDes;
