import styled from "styled-components"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadRecruitOneApi } from "../redux/modules/postRecruit";


function ReadProject(props) {
    
    const params = useParams();
    console.log(params)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const is_login = localStorage.getItem("token");

    const projectIdNum = (params?.projectid)
    const projectDetail = useSelector((state)=> state.postRecruit.project)

    const data=projectDetail?.project
   
    console.log(data)
    useEffect(() => {
        dispatch(loadRecruitOneApi(projectIdNum));
      }, []);
    

    
    return(
        <>
        <AllWrap>
        {data !== undefined ? (
            <>
            <TopWrap>
                <TopTitle>{data.title}</TopTitle>
                <TopDateLimit>프로젝트 기간 : {data.start} ~ {data.start}</TopDateLimit>
            </TopWrap>
                <DivideLine/>
            <MainTextWrap>
                <MainText>
                    <MainTextSpan>{data.detail}</MainTextSpan>
                </MainText>
            </MainTextWrap>
            <FindRoleWrap>
                <div><RoleTitle>찾는 직군</RoleTitle></div>
                <div><span>{data.role}</span></div>
            </FindRoleWrap>
            <FindSkillWrap>
                <div><RoleTitle>필요한 스킬 및 스텍</RoleTitle></div>
                <div><span>{data.skills}</span></div>
            </FindSkillWrap>
                <DivideLine/>
            <DateWrap>
            <div>
                달력이 들어갈 공간 입니다.
            </div>
            <div>
                시간이 들어갈 공간 입니다.
            </div>
            </DateWrap>
                <DivideLine/>
            <ProfileWrap>
                <div>
                    <RoleTitle>작성자 프로필</RoleTitle>
                </div>
                <div>
                    <div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </ProfileWrap>
            <ButtonWrap>
                <SubmitButton>지원하기</SubmitButton>
            </ButtonWrap>
            
            <button data={data} onClick={() => {navigate(`/findprojectstep1/${projectIdNum}`)}}>프로젝트 수정하기 </button>
            </>
            
        ):null}

        </AllWrap>
        </>
    )
}


const AllWrap = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const TopWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 55px;
`

const MainTextWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const FindRoleWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 77px;
    gap: 12px;
`

const FindSkillWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DateWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 40px;
`

const ProfileWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const ButtonWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 80px;
`

const SubmitButton = styled.button`
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border-radius: 4px;
    color: white;
    padding: 10px 45px 10px 45px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
`


const DivideLine = styled.hr`
    width: 1200px;
`


const TopTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
`

const TopDateLimit = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
`

const MainText = styled.div`
    width: 1200px;
    margin-top: 32px;
    /* border: 1px solid black; */
`
const MainTextSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
`

const RoleTitle = styled.span`
    font-size: 16px;
    font-weight: 700;
`

export default ReadProject
