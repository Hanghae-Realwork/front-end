import styled from "styled-components"

import Tag from "../components/TagCompo"

import BasicPhoto from "../image/astroman.svg"
import Flip from "../image/flip.svg"


function CradEmpol () {

    return(
        <>
            <AllCardWrap>
                <CardTopWrap>
                    <ProfileTopWrap>
                        <ProfileWrap>
                            <ProfileCircle></ProfileCircle>
                        </ProfileWrap>
                        <CardTextWrap>
                            <CardTitle>[작성자이름]</CardTitle>
                            <CardText>[FrontEnd개발자]</CardText>
                        </CardTextWrap>
                    </ProfileTopWrap>
                    <FlipWrap></FlipWrap>
                </CardTopWrap>
                <CardMidWrap>
                    <MidText>[자기소개 메세지가 노출 됩니다]</MidText>
                    <br/>
                    <MidText>[자기소개 메세지가 노출 됩니다]</MidText>
                </CardMidWrap>
                <CardMidMini>
                    <MidDateText> [희망 프로젝트 기간이 노출 됩니다] </MidDateText>
                </CardMidMini>
                <CardBotTag>
                    <div> <Tag/><Tag/><Tag/><Tag/><Tag/><Tag/> </div>
                </CardBotTag>

            </AllCardWrap>
        </>

    )
}



const AllCardWrap = styled.div`
    border: 0.5px solid black;
    border-radius: 1px;
    width: 384px;
    height: 250px;
    margin: 50px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    /* clip-path: polygon(100% 0, 40% 0, 100% 10%); */
    /* clip-path: polygon(100% 0, 0% 50, 50% 50%); */

`

const CardTopWrap = styled.div`
    /* border: 1px solid black; */
    width: 384px;
    height: 70px;
    margin-bottom: 12px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
`

const CardTextWrap = styled.div`
    /* border: 1px solid black; */
    margin: 19px 0px 0px 12px;
`

const ProfileTopWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const CardTitle = styled.div`
    /* border: 1px solid black; */
    width: 100px;
    height: 27px;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
`

const CardText = styled.div`
    /* border: 1px solid black; */
    width: 110px;
    height: 21px;
    font-size: 14px;
`

const ProfileWrap = styled.div`
    /* border: 1px solid black; */
    width: 60px;
    height: 60px;
    margin: 15px 0px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FlipWrap = styled.div`
    /* border: 1px solid black; */
    width: 40px;
    height: 40px;
    background-image: url(${Flip});
    background-position: center;
    background-size: cover;
`

const ProfileCircle = styled.div`
    /* border: 1px solid black; */
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background-image: url(${BasicPhoto});
    background-position: center;
    background-size: cover;
`

const CardMidWrap = styled.div`
    /* border: 1px solid black; */
    margin: 5px 20px 12px 20px; 
    width: 350px;
`

const MidText = styled.span`
    font-size: 14px;
`

const CardMidMini = styled.div`
    /* border: 1px solid black; */
    width: 350px;
    margin: 12px 20px 16px 20px;
`

const MidDateText = styled.span`
    font-size: 12px;
`

const CardBotTag = styled.div`
    /* border: 1px solid black; */
    width: 350px;
    height: 30px;
    overflow: scroll;
    margin: 12px 20px 16px 20px;

`

export default CradEmpol