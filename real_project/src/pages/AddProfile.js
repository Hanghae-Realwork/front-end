import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUserValidation } from "../redux/modules/user";
import {
  dvelopSkills_list,
  designerSkills_list,
} from "../shared/developeSkills";
import {
  projectsPhotosAxios,
  resumesCreateAxios,
} from "../redux/modules/postEmploy";

import astroman from "../image/astroman.svg";
import Letter from "../image/letter.svg";

//DatePicker
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import Footer from "../components/Date/Footer";


function AddProfile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkList, setCheckList] = useState([]);
  //저장데이터
  const introduceRef = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const [role, setRole] = useState("");

  //캘린더 (22.07.15 추가 후)
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //userId,nickname 정보
  const userIdInfo = useSelector((state) => state.user.userInfo);
  const _resumeId = useSelector((state) => state.user.userInfo.userId);
  const _nickname = useSelector((state) => state.user.userInfo.nickname);
   const profileImage = useSelector(
     (state) => state.user.userInfo.profileImage
   );
  //로그인 유무
  const loginInfo = useSelector((state) => state.user.userInfo.is_login);

  //로그인 useEffect
  useEffect(() => {
    if (loginInfo === false) {
      dispatch(checkUserValidation());
    }
  }, [loginInfo]);

  useEffect(() => {
    if (startDate && startDate) {
    }
  }, [startDate]);
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

  //캘린더
  const onChange = (dates) => {
    const [startDate, endDate] = dates;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  //버튼 누르면 저장
  const handleClick = () => {
    if (
      introduceRef.current.value === "" ||
      startDate === "" ||
      endDate === "" ||
      role === "" ||
      checkList === "" ||
      content2Ref.current.value === "" ||
      content3Ref.current.value === "" ||
      _resumeId === "" ||
      _nickname === "" ||
      introduceRef.current.value === " " ||
      startDate === " " ||
      endDate === " " ||
      role === " " ||
      checkList === " " ||
      content2Ref.current.value === " " ||
      content3Ref.current.value === " " ||
      _resumeId === " " ||
      _nickname === " " ||
      introduceRef.current.value === null ||
      startDate === null ||
      endDate === null ||
      role === null ||
      checkList === null ||
      content2Ref.current.value === null ||
      content3Ref.current.value === null ||
      _resumeId === null ||
      _nickname === null 
    ) {
        alert("아직 다 작성하지 않았어요!🥸");
    } else {

     dispatch(
            resumesCreateAxios(
              introduceRef.current.value,
              startDate.getFullYear() +
                "-" +
                (startDate.getMonth() + 1) +
                "-" +
                startDate.getDate(),
              endDate.getFullYear() +
                "-" +
                (endDate.getMonth() + 1) +
                "-" +
                endDate.getDate(),
              role,
              checkList,
              content2Ref.current.value,
              content3Ref.current.value,
              _resumeId,
              _nickname
            )
     ).then(() => {
        navigate("/mainemployment");
     }).catch((err) => {
          console.log(err);
     })
       
      } 
    }
      

  return (
    <BackgroundAllWrap>
      <AddProfileWrap>
        <TitleDiv>
          <TitleText>내 소개글 작성하기</TitleText>
        </TitleDiv>
        <HeaderHeadLine />

        <ProfileTopWrap>
          <SelfWrap>
            <NewProfileWrap>
              <ProfilePicWrap>
                {profileImage !== "" ? (
                  <NoShowCircleProfile
                    style={{ backgroundImage: `url(${profileImage})` }}
                  />
                ) : (
                  <NoShowCircleProfile />
                )}
              </ProfilePicWrap>
              <ProfileTextWrap>
                <NickNameBox>
                  {userIdInfo.length > 0 ? "" : userIdInfo.nickname}님
                </NickNameBox>
                <PhoneNumberWrap>
                  <TitleTextTag>이메일</TitleTextTag>
                  <Contect>
                    {" "}
                    {userIdInfo.length > 0 ? "" : userIdInfo.userId}
                  </Contect>
                </PhoneNumberWrap>
              </ProfileTextWrap>
            </NewProfileWrap>
          </SelfWrap>
        </ProfileTopWrap>
        <SelfWrap>
          <SelfIntWrap>
            <TitleTextTag>간단한 자기 소개</TitleTextTag>
            <ProfileInput
              placeholder="간단한 인사말을 남겨 주세요"
              ref={introduceRef}
            ></ProfileInput>
          </SelfIntWrap>
        </SelfWrap>

        {/*🗓 캘린더 작업물시작*/}
        <SelectAllWrap>
          <SelfWrap>
            <CalWrap>
              <TitleTextTag>프로젝트 진행 가능 기간</TitleTextTag>
              <CalendarWrap>
                <DatePickerWrapper
                  popperContainer={Popper}
                  calendarContainer={Calendar}
                  controls={["calendar"]}
                  dateFormat="YYYY-MM-DD"
                  locale={ko}
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  minDate={new Date()}
                  endDate={endDate}
                  monthsShown={2}
                  selectsRange
                  inline
                />
              </CalendarWrap>
              <CalendarInfoWrap>
                <Footer start={startDate} end={endDate} />
              </CalendarInfoWrap>
            </CalWrap>
          </SelfWrap>
        </SelectAllWrap>

        {/* Role */}
        <SelectBoxWrap>
          <SelectAllWrap>
            <RoleWrap>
              <SelfWrap>
                <TitleTextTag>내 직군</TitleTextTag>
                <RadioRoleWrap>
                  <RoleLabel>
                    <input
                      id="role"
                      type="radio"
                      value="frontend"
                      name="role"
                      onChange={onChangeRole}
                    />
                    FrontEnd 개발자
                  </RoleLabel>
                  <RoleLabel>
                    <input
                      id="role"
                      type="radio"
                      name="role"
                      value="backend"
                      onChange={onChangeRole}
                    />
                    BackEnd 개발자
                  </RoleLabel>
                  <RoleLabel>
                    <input
                      id="role"
                      type="radio"
                      name="role"
                      value="designer"
                      onChange={onChangeRole}
                    />
                    UX / UI 디자이너
                  </RoleLabel>
                </RadioRoleWrap>
              </SelfWrap>

              <SkillWrap>
                <SelfWrap>
                  {/* skill */}
                  <TitleTextTag>개발자</TitleTextTag>
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
                              checked={
                                checkList.includes(list.data) ? true : false
                              }
                            ></CheckBox>
                            {list.data}
                          </TecLabel>
                        );
                      })}
                  </SelectBoxTab>

                  <TitleTextTag>디자이너</TitleTextTag>
                  <SelectBoxTab>
                    {designerSkills_list &&
                      designerSkills_list.map((list, idx) => {
                        return (
                          <TecLabel key={idx}>
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
                </SelfWrap>
              </SkillWrap>
            </RoleWrap>
          </SelectAllWrap>
        </SelectBoxWrap>

        <PortWrap>
          <PortfollioWrap>
            <TitleTextTag>포트폴리오 링크를 적어주세요</TitleTextTag>
            <ProfileInput
              placeholder="GitHub, Figma 등 링크를 적어 주세요"
              ref={content2Ref}
            ></ProfileInput>
          </PortfollioWrap>
        </PortWrap>

        <Con1Wrap>
          <SelfWrap>
            <TitleTextTag>본인을 소개해 주세요</TitleTextTag>
            <TextArea ref={content3Ref}></TextArea>
          </SelfWrap>
        </Con1Wrap>

        <HeaderHeadLine />
        <SubmitButtonWrap>
          <SubmitButton onClick={handleClick}>소개글 등록하기</SubmitButton>
        </SubmitButtonWrap>
      </AddProfileWrap>
    </BackgroundAllWrap>
  );
}
//datePicker

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
  /* border: 1px solid black; */
  border-radius: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
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
  /* padding: 30px; */
  margin-left: 30px;
`

const ProfileInput = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  width: 1100px;
  margin-top: 16px;
  border: 0.5px solid black;
  border-radius: 4px;
`;

const ProfilePicWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
  /* border: 1px solid black; */
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${astroman});
  background-position: center;
  background-size: cover;
`;

const RoleLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
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
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  gap: 12px;
`;

const RadioRoleWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* border: 1px solid black; */
  gap: 25px;
`;

const TitleTextTag = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #323230;
`;

const Contect = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

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

const PortfollioWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 1100px;
  margin-left: 30px;
`;

const NickNameBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  /* border: 1px solid black; */
`;

const SubmitButtonWrap = styled.div`
  /* border: 1px solid black; */
  width: 1140px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButton = styled.button`
  /* width: 150px; */
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

//skills input
const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  margin-top: 10px;
  margin-bottom: 16px;
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

const NewProfileWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin-top: 70px;
`;

const ProfileTextWrap = styled.div`
  /* border: 1px solid black; */

`

const SelfIntWrap = styled.div`
  margin-top: 105px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const CalWrap = styled.div`
  margin-top: 70px;
`
const RoleWrap = styled.div`
  margin-top: 60px;
`
const SkillWrap = styled.div`
  margin-top: 60px;
`
const PortWrap = styled.div`
  margin-top: 54px;
`

const Con1Wrap = styled.div`
  margin-top: 70px;
  margin-bottom: 60px;
`

const TextArea = styled.textarea`
  width: 1120px;
  height: 400px;
  margin-top: 12px;
  border: 0.5px solid black;
  outline: none;
  border-radius: 4px;
  resize: none;
`






const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 100%;
`;
const Popper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
  z-index: 2;
`;

const Calendar = styled.div`
  /* width : 706px; */
  border-radius: 4px;
  overflow: hidden;
`;

const CalendarWrap = styled.div`
  border: 0.5px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 700px;
  height: 330px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CalendarInfoWrap = styled.div`
  border: 0.5px solid #d9d9d9;
  width: 297px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default AddProfile;







// 절대존엄 코코미의 사진 관련 코드

// {/* 사진에 대한 모든 것 start */}
// <ProfilePicWrap>
// <NoShowCircleProfile />

// {filesImg ? (
//   <ShowCircleProfile alt="sample" id="showImg" src={filesImg} />
// ) : (
//   <NoShowCircleProfile />
// )}
// <PhotoEditWrap>
//   {filesImg ? (
//     <PhotoText>
//       수정하기
//       <input
//         name="imgUpload"
//         type="file"
//         id="add_img"
//         accept="image/*"
//         onChange={onChangeImg}
//       />
//     </PhotoText>
//   ) : (
//     <PhotoText>
//       등록하기
//       <input
//         name="imgUpload"
//         type="file"
//         id="add_img"
//         accept="image/*"
//         onChange={onChangeImg}
//       />
//     </PhotoText>
//   )}
// </PhotoEditWrap>
// </ProfilePicWrap>

// <ProfilePicWrap>
// <PhotoEditWrap>
//   <PhotoText>삭제</PhotoText>
// </PhotoEditWrap>
// </ProfilePicWrap>
// </ProfileTopWrap>
// {/* 사진에 대한 모든 것 end */}
