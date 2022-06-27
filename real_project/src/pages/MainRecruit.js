
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Recruit from "./Recruit";
import Card from "../components/CardRecruit";
import EmploymentProfile from "./EmploymentProfile";

const MainRecruit = () => {

  const navigate = useNavigate //CSS 100% 완성 전까지 비활성화

  const Card_list = Array.from({ length: 12 }, (v, i) => i);
  console.log(Card_list)

  return (
    <>
      <div className="Werp">
        <RoleSelectBox>
            <span>직군 선택</span>
          <CategoryBox>
            <option value="1">Frontend Developer</option>
            <option value="2">Backend Developer</option>
            <option value="3">Game Developer</option>
            <option value="4">Content Designer</option>
          </CategoryBox>
        </RoleSelectBox>
        <CardContainerWrap>
          {Card_list.map((list, idx) => {
            return (
                <>
                  <Card data={list} key={idx}/>
                </>)
          })}
        </CardContainerWrap>
      </div>
    </>
  );
};

const CardContainerWrap = styled.div`

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  width: 1400px;
`;

const RoleSelectBox = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    /* border: 1px solid black; */
`

const CategoryBox = styled.select`
    margin-left: 20px;
    outline: none;
    border: none;
    padding: 10px;
    width: 250px;
    font-size: 20px;
`

export default MainRecruit;
