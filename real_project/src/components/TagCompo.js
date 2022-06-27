import styled from "styled-components";


function TagCompo () {

    return(
        <>
        <TagButton>
            리액트
        </TagButton>

        </>
    )
}

const TagButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #D0D3D4;
    font-size: 13px;
    border-radius: 15px;
    padding: 7px;
    color: white;
    margin: 3px;
`


export default TagCompo