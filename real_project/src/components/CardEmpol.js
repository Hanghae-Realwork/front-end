import styled from "styled-components"
import TagDev from "./Tag/TagCompoDev"

import BasicPhoto from "../image/astroman.svg"

import { useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import cardBackground from "../image/cardBackground.svg"


function CradEmpol({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const profileImage = useSelector((state) => state.user.userInfo.profileImage);
  const start =
    data > 0 ? "" : data?.start.replace("-", ".").replace("-", ".");
  const end =
    data > 0 ? "" : data?.end.replace("-", ".").replace("-", ".");

    return (
      <>
        <AllCardWrap
          onClick={() => {
            navigate("/employmentprofile/" + `${data.resumeId}`);
          }}
        >
          <CardTopWrap>
            <ProfileTopWrap>
              <ProfileWrap>
                {data?.resumeImage ? (
                  <ProfileCircle
                    style={{ backgroundImage: `url(${data?.resumeImage})` }}
                  ></ProfileCircle>
                ) : (
                  <ProfileCircle></ProfileCircle>
                )}
                
              </ProfileWrap>
              <CardTextWrap>
                <CardTitle>{data?.nickname}</CardTitle>
                <CardText>{data?.role}</CardText>
              </CardTextWrap>
            </ProfileTopWrap>
          </CardTopWrap>
          <CardMidWrap>
            <MidText>{data?.content}</MidText>
          </CardMidWrap>
          <CardMidMini>
            <MidDateText>
              <span>프로젝트 가능 기간 :</span>
              {"  " + start + "  "}~{"  " + end}
            </MidDateText>
          </CardMidMini>
          <CardBotTag>
            <SkillText>보유한 기술</SkillText>
            <SkillWrap>
              {data?.skills?.map((list, idx) => {
                return <TagDev key={idx} skills={list} />;
              })}
            </SkillWrap>
          </CardBotTag>
        </AllCardWrap>
      </>
    );
}



const AllCardWrap = styled.div`
    /* border: 0.5px solid black; */
    border-radius: 2px;
    width: 384px;
    height: 250px;
    /* margin: 50px 24px 24px 24px; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${cardBackground});
    cursor: pointer;
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
    margin: 5px 20px 0px 20px; 
    width: 350px;
    height: 50px;
    overflow: hidden;
    line-height: 21px;
`

const MidText = styled.span`
    font-size: 14px;
`

const CardMidMini = styled.div`
    /* border: 1px solid black; */
    width: 350px;
    margin: 5px 20px 5px 20px;
    line-height: 21px;
    height: 25px;
`

const MidDateText = styled.span`
    font-size: 12px;
`

const CardBotTag = styled.div`
    /* border: 1px solid black; */
    width: 350px;
    margin: 7px 20px 16px 20px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2px;
`

const SkillText = styled.span`
  font-size: 12px;
`

const SkillWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  height: 30px;
  overflow: scroll;
  line-height: 21px;
`

export default CradEmpol