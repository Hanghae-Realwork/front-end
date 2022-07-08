import styled from "styled-components"

import Tag from "./TagCompo"

import BasicPhoto from "../image/astroman.svg"
import Flip from "../image/flip.svg"


function CradEmpol ({data}) {

    return (
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
            <MidText>{data.content}</MidText>
            <br />
           
          </CardMidWrap>
          <CardMidMini>
            <MidDateText>
              {" "}
              {data.start_moment}~{data.end_moment}{" "}
            </MidDateText>
          </CardMidMini>
          <CardBotTag>
            <div>
                        {data === undefined ? null : 
                            data.skills.map((list, idx) => {
                                return <Tag key={idx} skills={list} />;
              })}
              
             
            </div>
          </CardBotTag>
        </AllCardWrap>
      </>
    );
}



const AllCardWrap = styled.div`
    border: 0.5px solid black;
    border-radius: 2px;
    width: 384px;
    height: 250px;
    margin: 50px 24px 24px 24px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
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
    width: 120px;
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