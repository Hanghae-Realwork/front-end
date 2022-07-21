import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { checkUserValidation } from "../redux/modules/user";

import { dvelopSkills_list, designerSkills_list} from "../shared/developeSkills";
import RoleModal from "../components/Modal/RoleModal"
import SkillModal from "../components/Modal/SkillModal"
import DateModal from "../components/Modal/DateModal"
import TagDevSearch from "../components/Tag/TagSearchDev"
import TagDesSearch from "../components/Tag/TagSearchDes"

import paper from "../image/paper.svg"
import jobicon from "../image/jobicon.svg"
import pencil from "../image/pencil.svg"
import calender from "../image/calender.svg"
import down from "../image/down.svg"



function NavigationBarProject() {

    const [Rolemodal, setRoleModal] = useState(false);
    const [Skillmodal, setSkillModal] = useState(false);
    const [Datemodal, setDateModal] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginInfo = useSelector((state) => state.user.userInfo.is_login); //로그인 유무
    const skilldata = useSelector((state) => state.search.Skilltag);
    const datedata = useSelector((state) => state.search.Datetag);

    console.log(datedata)
    console.log(skilldata)


    return(
        <>
        <OnlyBackgroundDiv>
            <MainNavigationWrap>
                <NaviWrap>
                    <MainNavigation>

                        {Rolemodal === true ? <RoleModal close={setRoleModal} /> : null}
                        <SerchLabel style={{width:"130px"}} onClick={() => {setRoleModal(!Rolemodal)}}>
                            <ImageWrap><img src={jobicon}/>직군선택</ImageWrap>
                            <img src={down} />
                        </SerchLabel>

                        {Skillmodal === true ? <SkillModal close={setSkillModal} /> : null}
                        <SerchLabel style={{width:"130px"}} onClick={() => {setSkillModal(!Skillmodal)}}>
                            <ImageWrap><img src={pencil}/>구하는 기술</ImageWrap>
                            <img src={down}/>
                        </SerchLabel>

                        {Datemodal === true ? <DateModal close={setDateModal} /> : null}
                        <SerchLabel style={{width:"220px", borderRight:"none"}} onClick={() => {setDateModal(!Datemodal)}}>
                            <ImageWrap><img src={calender}/>프로젝트 기간 검색</ImageWrap>
                            <img src={down}/>
                        </SerchLabel>
                        
                    </MainNavigation>
                    <SerchButton>검색</SerchButton>
                </NaviWrap>

                <WriteButton onClick={() => {if (loginInfo === false) {alert("로그인을 해주세요!");
                return false}if (loginInfo === true) {dispatch(checkUserValidation())
                navigate(`/findprojectstep1`);}
              }}><img src={paper}/>프로젝트 등록 </WriteButton>

            </MainNavigationWrap>
            <SearchResultABarWrap>
                <InlineDevide/>
                <TagWrap>
                {skilldata.map((list, idx) => {
                  return <TagDevSearch key={idx} skills={list} />;
                })
                }
                </TagWrap>
            </SearchResultABarWrap>
        </OnlyBackgroundDiv>

        </>
    )
}

const OnlyBackgroundDiv = styled.div`
    width: 1440px;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const MainNavigationWrap = styled.div`
    /* border-radius: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    width: 1200px;
    margin: 36px 120px 24px 120px;
`

const NaviWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const MainNavigation = styled.div`
    height: 40px;
    border: 0.5px solid black; 
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 4px;
`

const WriteButton = styled.button`
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 10px 20px 10px 20px;
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    color: white;
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`

const SerchButton = styled.button`
    padding: 9px 20px 9px 20px;
    color: white;
    background-color: #303032;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    margin-left: 24px;
    cursor: pointer;
`

const SerchLabel = styled.label`
    padding: 9px 10px 9px 10px;
    border: none;
    border-right: 0.5px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`

const ImageWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 9px;
`

const InlineDevide = styled.hr`
    width: 1200px;
`

const SearchResultABarWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    margin-bottom: 24px;
`

const TagWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
`

export default NavigationBarProject