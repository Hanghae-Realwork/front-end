import styled from "styled-components";

function TagCompoEmpPro({ skills }) {

  return (
    
      <TagButton>{skills}</TagButton>
    );
}

const TagButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ECE0EC;
  font-size: 12px;
  font-weight: 500;
  border-radius: 30px;
  padding: 5px 12px 5px 12px;
  color: black;
`;

export default TagCompoEmpPro;
