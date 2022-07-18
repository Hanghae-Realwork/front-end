import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useDispatch,useSelector } from "react-redux";
import { checkUserValidation } from "../redux/modules/user";
import { dvelopSkills_list, designerSkills_list} from "../shared/developeSkills";

function NavigationBarProject() {

    const navigate = useNavigate()
    const dispatch = useDispatch()



    //로그인 유무
  const loginInfo = useSelector((state) => state.user.userInfo.is_login);

    return(
        <>
        <OnlyBackgroundDiv>
            <MainNavigationWrap>
                <MainNavigation>

                </MainNavigation>
                <WriteButton onClick={() => {if (loginInfo === false) {alert("로그인을 해주세요!");
                return false}if (loginInfo === true) {dispatch(checkUserValidation())
                navigate(`/findprojectstep1`);}
              }}>프로젝트 등록</WriteButton>

            </MainNavigationWrap>

            <hr/>

        </OnlyBackgroundDiv>
        </>
    )

}

const OnlyBackgroundDiv = styled.div`
    width: 100%;
`

const MainNavigationWrap = styled.div`
    border-radius: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

const MainNavigation = styled.div`
    width:563px;
    height: 40px;
`

const WriteButton = styled.button`

`


export default NavigationBarProject