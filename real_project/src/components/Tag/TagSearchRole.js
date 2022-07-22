import styled from "styled-components";

import close from "../../image/closeIcon.svg"

function TagCompoSearchDes({ role }) {

    return <TagButton>{role}<img src={close}/></TagButton>;
}

const TagButton = styled.label`
  background-color: #ECE0EC;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  padding: 5px 12px 5px 12px;
`;

export default TagCompoSearchDes;
