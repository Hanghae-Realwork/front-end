import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkUserValidation } from "../redux/modules/user";
import { 
  loadSingleEmployAxios,
  modifyEmployAxios,
  loadEmployAxios,
  projectsPhotosAxios, 
 } from "../redux/modules/postEmploy";
import { dvelopSkills_list, designerSkills_list } from "../shared/developeSkills";

import Letter from "../image/letter.svg";
import astroman from "../image/astroman.svg";

function EditProfile() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { resumeId } = useParams();
 

  //사진 파일 유무
  const [filesImg, setFilesImg] = useState("");
  const [files, setFiles] = useState("");
  const [checkList, setCheckList] = useState([]);

  //저장데이터
  const introduceRef = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const [role, setRole] = useState("");

  //캘린더 (22.07.12 추가 전)
  const [start, setStart] = useState("2022-02-02");
  const [end, setEnd] = useState("2022-02-04");

  //userId,nickname 정보
    const userIdInfo = useSelector((state) => state.user.userInfo);
 
  //로그인 유무
    const loginInfo = useSelector((state) => state.user.userInfo.is_login);
    //기존 내용
    const userDescription = useSelector((state) => state.postEmploy.resumes);
    const _userDiscription = useSelector((state) => state.postEmploy)

    
  //로그인 useEffect
 useEffect(() => {
    if (loginInfo === false) {
      dispatch(checkUserValidation());
    }
  }, [loginInfo]);

     useEffect(() => {
       dispatch(loadSingleEmployAxios(resumeId));
     }, []); 

    
    useEffect(() => {
        dispatch(loadEmployAxios());
    },[])
    
  //skills:onChenge 함수를 사용하여 이벤트를 감지, 필요한 값 받아온다.
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckList([...checkList, item]);
    } else if (!checked) {
      setCheckList(checkList.filter((el) => el !== item));
    }
  };

  //Role 값
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };


  //버튼 누르면 저장
  const handleClick = () => {
    if (
      resumeId === "" ||
      introduceRef.current.value === "" ||
      start === "" ||
      end === "" ||
      role === "" ||
      checkList === "" ||
      content2Ref.current.value === "" ||
      content3Ref.current.value === "" ||
      resumeId === " " ||
      introduceRef.current.value === " " ||
      start === " " ||
      end === " " ||
      role === " " ||
      checkList === " " ||
      content2Ref.current.value === " " ||
      content3Ref.current.value === " " ||
      resumeId === null ||
      introduceRef.current.value === null ||
      start === null ||
      end === null ||
      role === null ||
      checkList === null ||
      content2Ref.current.value === null ||
      content3Ref.current.value === null) { 
      alert("아직 다 작성하지 않았어요!🥸");
      }
      dispatch(
        modifyEmployAxios(
          resumeId,
          introduceRef.current.value,
          start,
          end,
          role,
          checkList,
          content2Ref.current.value,
          content3Ref.current.value
        )
      ).then(() => {
        navigate("/mainemployment");
      }).catch((err) => {
        alert("페이지 오류입니다.")
      })
  };
    
  return (
    <BackgroundAllWrap>
      <AddProfileWrap>
        <TitleDiv>
          <TitleText>내 소개글 수정하기</TitleText>
        </TitleDiv>
        <HeaderHeadLine />

        <ProfileTopWrap>
          <SelfWrap>
            <NickNameBox>
              {userIdInfo.length > 0 ? "" : userIdInfo.nickname}님
            </NickNameBox>
            <ToggleBox>
              <TitleTextTag>이메일 정보</TitleTextTag>
              <PhoneNumberWrap>
                {/* <img src={Letter} style={{ marginRight: "10px" }}></img> */}
                <Contect>
                  {" "}
                  {userIdInfo.length > 0 ? "" : userIdInfo.userId}
                </Contect>
              </PhoneNumberWrap>
            </ToggleBox>
            <div>
              <TitleTextTag>간단한 자기 소개</TitleTextTag>
              <div>
                <ProfileInput
                  defaultValue={userDescription[0]?.content}
                  ref={introduceRef}
                ></ProfileInput>
              </div>
            </div>
          </SelfWrap>

          {/* 사진 */}
          <ProfilePicWrap>
            {filesImg ? (
              <ShowCircleProfile alt="sample" id="showImg" src={filesImg} />
            ) : (
              <NoShowCircleProfile></NoShowCircleProfile>
            )}
            <PhotoEditWrap></PhotoEditWrap>
          </ProfilePicWrap>

          {/* 사진 */}
        </ProfileTopWrap>
        <div>{/* 캘린더 작업물이 들어갈 공간 입니다 */}</div>
        <SelectBoxWrap>
          <SelectAllWrap>
            <SelfWrap>
              <TitleTextTag>내 직군</TitleTextTag>
              <RadioRoleWrap>
                <label>
                  <input
                    id="role"
                    type="radio"
                    value="frontend"
                    name="role"
                    // checked={userDescription[0]?.role === "frontend"}
                    onChange={onChangeRole}
                  />
                  FrontEnd
                </label>
                <label>
                  <input
                    id="role"
                    type="radio"
                    name="role"
                    value="backend"
                    // checked={userDescription[0]?.role === "backend"}
                    onChange={onChangeRole}
                  />
                  BackEnd
                </label>
                <label>
                  <input
                    id="role"
                    type="radio"
                    name="role"
                    value="designer"
                    // checked={userDescription[0]?.role === "designer"}
                    onChange={onChangeRole}
                  />
                  Designer
                </label>
              </RadioRoleWrap>
            </SelfWrap>
            <SelfWrap>
              {/* skill */}
              <SkillWrap>
                <SkillTitleTextTag>개발자</SkillTitleTextTag>
                <SelectBoxTab>
                  {dvelopSkills_list &&
                    dvelopSkills_list.map((list, idx) => {
                      return (
                        <TecLabel key={idx}>
                          <CheckBox
                            type="checkbox"
                            id="skills"
                            value={list.data}
                            onChange={(e) => {
                              //onchange이벤트 발생 시 checked여부와 value값을 배열 데이터에 넣는다.
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                            // checked={
                            //   checkList.includes(list.data) ? true : false
                            // }
                          ></CheckBox>
                          {list.data}
                        </TecLabel>
                      );
                    })}
                </SelectBoxTab>
              </SkillWrap>

              <SkillWrap>
                <SkillTitleTextTag>디자이너</SkillTitleTextTag>
                <SelectBoxTab>
                  {designerSkills_list &&
                    designerSkills_list.map((list, idx) => {
                      return (
                        <TecLabel key={idx}>
                          {" "}
                          <CheckBox
                            type="checkbox"
                            id="skills"
                            value={list.data}
                            onChange={(e) => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                          ></CheckBox>
                          {list.data}
                        </TecLabel>
                      );
                    })}
                </SelectBoxTab>
              </SkillWrap>
            </SelfWrap>
          </SelectAllWrap>
        </SelectBoxWrap>
        <PortfollioWrap>
          <TitleTextTag>포트폴리오 링크를 적어주세요</TitleTextTag>
          <ProfileInput
            defaultValue={userDescription[0]?.content2}
            ref={content2Ref}
          ></ProfileInput>
        </PortfollioWrap>

        <SelfWrap>
          <textarea
            ref={content3Ref}
            defaultValue={userDescription[0]?.content3}
          ></textarea>
        </SelfWrap>
        <HeaderHeadLine />
        <SubmitButtonWrap>
          <SubmitButton onClick={handleClick}>소개글 수정하기</SubmitButton>
        </SubmitButtonWrap>
      </AddProfileWrap>
    </BackgroundAllWrap>
  );
}

const BackgroundAllWrap = styled.div`
  background: linear-gradient(
      0deg,
      rgba(217, 217, 217, 0.1),
      rgba(217, 217, 217, 0.1)
    ),
    linear-gradient(
      93.14deg,
      rgba(174, 151, 227, 0.15) 0.24%,
      rgba(119, 195, 231, 0.15) 34.73%,
      rgba(174, 151, 227, 0.15) 67.67%,
      rgba(119, 195, 231, 0.15) 95.47%
    );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddProfileWrap = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: 70px;
  width: 1200px;
  background-color: white;
`;

const SelfWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  height: auto;
`;

const ProfileInput = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  width: 555px;
  border-bottom: 1px solid black;
`;

const ProfilePicWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 50px 150px 0px 0px;
`;

const ProfileTopWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const NoShowCircleProfile = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${astroman});
  background-position: center;
  background-size: cover;
`;

const ShowCircleProfile = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  background-color: transparent;
`;

const SelectBoxWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SelectAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  /* margin-bottom: px; */
  width: 100%;
  /* border: 1px solid black; */
`;

const PhoneNumberWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
`;

const RadioRoleWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  gap: 25px;
`;

const TitleTextTag = styled.p`
  font-weight: bold;
  color: #323230;
`;

// const CheckBoxWrapper = styled.div`
//   position: relative;
//   margin-top:10px;
//   margin-left: 20px;
// `;

// const CheckBoxLabel = styled.label`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 50px;
//   height: 26px;
//   border-radius: 15px;
//   background: #bebebe;
//   cursor: pointer;
//   &::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     width: 18px;
//     height: 18px;
//     margin: 3px;
//     background: #ffffff;
//     box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
//     transition: 0.2s;
//   }
// `;

// const CheckBox = styled.input`
//   opacity: 0;
//   z-index: 1;
//   border-radius: 15px;
//   width: 50px;
//   height: 26px;
//   &:checked + ${CheckBoxLabel} {
//     background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);;
//     &::after {
//       content: "";
//       display: block;
//       border-radius: 50%;
//       width: 19px;
//       height: 19px;
//       margin-left: 28px;
//       transition: 0.2s;
//     }
//   }
// `;

const Contect = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const ToggleBox = styled.div`
  /* border: 1px solid black; */
  width: auto;
  margin: 30px 0px 30px 0px;
  /* margin-left: 20px; */
`;

// const ToggleTextWrap = styled.div`
//   /* border: 1px solid black; */
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-start;
//   align-items: center;
// `

const HeaderHeadLine = styled.hr`
  /* border: 1px solid #D9D9D9; */
  width: 1200px;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  /* border: 1px solid black; */
`;

const TitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px 30px 30px;
`;

// const CareerInput = styled.input`
//   width: 550px;
//   border: none;
//   outline: none;
//   border-bottom: 1px solid black;
//   padding: 8px;
// `

// const CareerInputButton = styled.button`
//   width: 100px;
//   padding: 5px;
//   margin: 0px 25px 0px 25px;
//   background-color: #303032;
//   color: white;
//   font-weight: 700;
//   font-size: 15px;
//   border: none;
//   outline: none;
// `

// const RightInputDiv = styled.div`
//   /* border: 1px solid black; */
//   width: 1100px;
//   height: 200px;
//   display: flex;
//   flex-flow: row wrap;
//   gap: 10px;
//   line-height: 21px;
//   margin-top: 20px;
//   overflow: scroll;
// `

// const InputCareerWrap = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: flex-start;
//   width: 1140px;
// `

// const CareerLabel = styled.label`
//   background-color: #ae97E3;
//   font-size: 12px;
//   border-radius: 5px;
//   height: 20px;
//   color: white;
//   padding: 4px;
// `

const PortfollioWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 1140px;
`;

// const PointCraeer = styled.textarea`
//   resize: none;
//   width: 1140px;
//   height: 400px;
//   border-radius: 4px;
//   padding: 10px;
// `

const NickNameBox = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  /* border: 1px solid black; */
`;

const PhotoEditWrap = styled.div`
  /* border: 1px solid black; */
  width: auto;
  margin-top: 24px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const PhotoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SubmitButtonWrap = styled.div`
  /* border: 1px solid black; */
  width: 1140px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 30px 0px 30px 0px;
  padding: 12px 28px;
  color: white;
  font-weight: 700;
`;

// const PhotoInput = styled.input`
//   /* display: none; */
// `

//skills input
const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

const SkillWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 580px;
  padding: 10px;
  /* border: 1px solid black; */
`;

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
`;

const CheckBox = styled.input`
  appearance: none;
  border: 0.5px solid gainsboro;
  border-radius: 0.25rem;
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
  margin-right: 5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ae97e3;
  }
`;

const SkillTitleTextTag = styled.p`
  font-weight: bold;
  color: #ae97e3;
`;

export default EditProfile;
