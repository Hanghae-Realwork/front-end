import styled from "styled-components";

function TagCompoRec({ skills }) {

    return <TagButton>{skills}</TagButton>;
}

const TagButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #EAF3FA;
  font-size: 12px;
  font-weight: 500;
  border-radius: 15px;
  padding: 5px 12px 5px 12px;
  color: white;
  margin: 3px;
`;

export default TagCompoRec;
