import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  editRecruitAxios,
  projectsPhotosAxios,
} from "../redux/modules/postRecruit";
import {
  dvelopSkills_list,
  designerSkills_list,
} from "../shared/developeSkills";
import ko from "date-fns/locale/ko";
import Footer from "../components/Date/Footer";
import DatePicker from "react-datepicker";

import addimage from "../image/addimage.svg";
import upicon from "../image/upicon.svg";
import downicon from "../image/downicon.svg";
import delIcon from "../image/tagclose.svg"





const EditProject = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const subscriptRef = useRef(null);
  const detailsRef = useRef(null);

  const [role, setRole] = useState("");
  const [checkList, setCheckList] = useState([]);

  //캘린더 2개짜리 (22.07.12 추가 후)
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //캘린더 Single
  const [singleDate, setSingleDate] = useState("");

  //사진 파일 유무
  const [filesImg, setFilesImg] = useState("");
  const [files, setFiles] = useState("");

  //시간과 분
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [rangeTime, setRangeTime] = useState({});

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());
  let newDate = year + "년" + month + "월" + day + "일";

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const userEdit = useSelector((state) => state.postRecruit.project);

  console.log(userEdit);

  useEffect(() => {
    setRangeTime({});
    setHour(0);
    setMinute(0);
  }, [singleDate]);

  //Role 값 (코코미 코드)
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  //skills:onChenge 함수를 사용하여 이벤트를 감지, 필요한 값 받아온다. (코코미 코드)
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckList([...checkList, item]);
    } else if (!checked) {
      setCheckList(checkList.filter((el) => el !== item));
    }
  };

  //fileReader
  const frm = new FormData();
  const reader = new FileReader();

  //이미지 파일 코드(코코코코코코미)
  const onChangeImg = (e) => {
    const file = e.target.files;
    setFiles(file);

    //fileReader
    setFilesImg(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        setFilesImg(reader.result);
        resolve();
      };
    });
  };

  const DoubleCalenderOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  ///////////////////////
  /////////시간//////////
  /////////////////////
  const hourUpOnClick = () => {
    if (hour < 23) {
      setHour(hour + 1);
    } else {
      setHour(0);
    }
  };

  const hourDownOnClick = () => {
    if (hour === 0) {
      setHour(23);
    } else {
      setHour(hour - 1);
    }
  };

  const minuteUpOnClick = () => {
    if (minute < 59) {
      setMinute(minute + 1);
    } else {
      if (hour === 23) {
        setHour(0);
        setMinute(0);
      } else {
        setHour(hour + 1);
        setMinute(0);
      }
    }
  };

  const minuteDownOnClick = () => {
    if (minute >= 1) {
      setMinute(minute - 1);
    } else {
      if (hour >= 1) {
        setHour(hour - 1);
        setMinute(59);
      } else {
        setHour(23);
        setMinute(59);
      }
    }
  };

  const hourOnChange = (e) => {
    if (e.target.value.length < 3) {
      if (e.target.value > 24) {
        setHour(24);
      } else {
        setHour(parseInt(e.target.value));
      }
    }
  };

  const minuteOnChange = (e) => {
    if (e.target.value.length < 3) {
      if (e.target.value > 59) {
        setMinute(59);
      } else {
        setMinute(parseInt(e.target.value));
      }
    }
  };
  ///////////////////////
  /////////시간 끝//////////
  /////////////////////

  //single달력
  const singleCalenderOnChange = (date) => {
    setYear(String(date.getFullYear()).padStart(2, "0"));
    setMonth(String(date.getMonth() + 1).padStart(2, "0"));
    setDay(String(date.getDate()).padStart(2, "0"));
    setSingleDate(date);
  };

  const date = year + "년" + month + "월" + day + "일";
  const time = hour + ":" + minute;

  const timeAddOnClick = () => {
    let temp = { ...rangeTime };

    // if ~else : key에 date가 포함되어 있다면 기존 time에 배열 추가, 그렇지 않으면 새로 들어온 신참time을 배열에 넣어준다
    // else if : 기존 time배열에서 중복 time이 포함되어 있다면 기존배열만 반환 , 첫번째 날짜의 undefined값이 나오므로 예외처리 후 조건 추가.
    if (Object.keys(temp).includes(date) && !temp[date].includes(time)) {
      temp[date] = [...temp[date], time];
    } else if (temp[date] && temp[date]) {
      if (Object.keys(temp).includes(date) && temp[date].includes(time)) {
        temp[date] = [...temp[date]];
      }
    } else {
      temp[date] = [time];
    }
    //오름차순으로 정리
    temp[date] = temp[date].sort((a, b) => {
      return Number(a.replace(":", "")) - Number(b.replace(":", ""));
    });

    setRangeTime(temp);
  };

  //2단계 :사용되는 날짜 + 시간 에 대한 상태관리
  const [rangeTotal, setRangeTotal] = useState([]);
  const [newList, setNewList] = useState([]);

  const schduleAddOnClick = () => {
    //rangeTime을 담을 수 있는 상태관리가 필요
    // rangeTime을 담을 때 딕셔너리 형태로{날짜 , 일, 날짜 ,일 }로 담아준다.
    // [{},{},{}]
    //   let list_up = [...rangeTotal]
    //     rangeTotal.forEach((item, index) => {
    //      Object.keys(item)
    //   })
    // console.log(rangeTotal)
    //   if (rangeTime && list_up) {
    //     list_up = [...list_up,rangeTime]
    //   } else {
    //     list_up = [rangeTime]
    //   }
    //     setRangeTotal(list_up);
    //   console.log(rangeTotal);

    let temp = { ...rangeTime };
    setRangeTotal((prev) => [...prev, temp]);
  };

  // 저장 버튼
  const CompliteEdit = async () => {
    //날짜+시간 데이터 가공
    let new_list = [];

    rangeTotal.forEach((item, index) => {
      const date = Object.keys(item);
      const times = item[date];

      times.forEach((time) => {
        const dateTime = date + " " + time;
        setNewList(new_list.push(dateTime));
      });
    });
    //
    if (
      titleRef.current.value === "" ||
      detailsRef.current.value === "" ||
      subscriptRef.current.value === "" ||
      role === "" ||
      startDate === "" ||
      endDate === "" ||
      checkList === "" ||
      new_list === "" ||
      titleRef.current.value === " " ||
      detailsRef.current.value === " " ||
      subscriptRef.current.value === " " ||
      role === " " ||
      startDate === " " ||
      endDate === " " ||
      checkList === " " ||
      new_list === " " ||
      titleRef.current.value === null ||
      detailsRef.current.value === null ||
      subscriptRef.current.value === null ||
      role === null ||
      startDate === null ||
      endDate === null ||
      checkList === null ||
      new_list === null
    ) {
      alert("아직 다 작성하지 않았어요!");
    } else {
      frm.append("photos", files[0]);
      try {
        await dispatch(projectsPhotosAxios(frm)).then((success) => {
          dispatch(
            editRecruitAxios(
              titleRef.current.value,
              detailsRef.current.value,
              subscriptRef.current.value,
              role,
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
              checkList,
              success,
              new_list
            )
          );
        });
        navigate("/mainrecruit");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <BackgroundAllWrap>
      <FindProjectAllWrap>
        <FindprojectTopWrap>
          <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
        </FindprojectTopWrap>
        <HeadLine />
        <FindProjectInputTitle>
          <ProjectTitleText>제목 (최대 n자 이내)</ProjectTitleText>
          <ProjectInput
            ref={titleRef}
            id="title"
            type="text"
            defaultValue={userEdit[0]?.title}
          ></ProjectInput>
        </FindProjectInputTitle>
        <FindProjectInputTitle>
          <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
          <ProjectInput
            ref={subscriptRef}
            id="subscript"
            type="text"
            defaultValue={userEdit[0]?.subscript}
          ></ProjectInput>
        </FindProjectInputTitle>
        <FindProjectInputDate>
          <ProjectTitleText>프로젝트 기간</ProjectTitleText>
          <div>
            <CalendarWrap>
              <DatePickerWrapper
                popperContainer={Popper}
                calendarContainer={Calendar}
                controls={["calendar"]}
                dateFormat="YYYY-MM-DD"
                locale={ko}
                selected={startDate}
                onChange={DoubleCalenderOnChange}
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
            <div></div>
          </div>
        </FindProjectInputDate>
        <InputMainTextWrap>
          <ProjectTitleText>팀 상세 설명</ProjectTitleText>
          <ReMainConWrap>
            <RecMainCon
              ref={detailsRef}
              id="details"
              type="text"
              defaultValue={userEdit[0]?.details}
            />
          </ReMainConWrap>
        </InputMainTextWrap>
        <InputMainTextWrap>
          <ProjectTitleText>구하는 직군</ProjectTitleText>
          <RoleWrap>
            <RoleLabel>
              <RoleInput
                id="role"
                type="radio"
                name="Radio"
                value="frontend"
                onChange={onChangeRole}
              />{" "}
              FrontEnd 개발자{" "}
            </RoleLabel>
            <RoleLabel>
              <RoleInput
                id="role"
                type="radio"
                name="Radio"
                value="backend"
                onChange={onChangeRole}
              />{" "}
              BackEnd 개발자{" "}
            </RoleLabel>
            <RoleLabel>
              <RoleInput
                id="role"
                type="radio"
                name="Radio"
                value="designer"
                onChange={onChangeRole}
              />{" "}
              UI / UX 디자이너{" "}
            </RoleLabel>
          </RoleWrap>
        </InputMainTextWrap>

        <InputMainTextWrap>
          <ProjectTitleText>개발자</ProjectTitleText>
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
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkList.includes(list.data) ? true : false}
                    ></CheckBox>
                    {list.data}
                  </TecLabel>
                );
              })}
          </SelectBoxTab>
        </InputMainTextWrap>
        <InputMainTextWrap>
          <ProjectTitleText>디자이너</ProjectTitleText>
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
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                    ></CheckBox>
                    {list.data}
                  </TecLabel>
                );
              })}
          </SelectBoxTab>
        </InputMainTextWrap>

        {/* 달력🗓 */}
        <InputMainTextWrap>
          <ProjectTitleText>면접 일정 수정하기</ProjectTitleText>
          <InterviewTableWrap>
            <CalenderAllWrap>
              <CalenderWrap>
                <DatePicker
                  selected={singleDate}
                  onChange={singleCalenderOnChange}
                  startDate={startDate}
                  dateFormat="YYYY-MM-DD"
                  locale={ko} // 달력 한글화
                  minDate={new Date()}
                  monthsShown={1}
                  inline
                />
              </CalenderWrap>
            </CalenderAllWrap>

            <TimeAllDiv>
              <TimeWrap>
                <TimeArea>
                  <HourWrap>
                    <HourButton onClick={hourUpOnClick}>
                      <img src={upicon} />
                    </HourButton>
                    <HourInput
                      type="number"
                      value={hour}
                      onChange={hourOnChange}
                      maxLength={2}
                    />
                    <HourButton onClick={hourDownOnClick}>
                      <img src={downicon} />
                    </HourButton>
                  </HourWrap>
                  <span style={{ fontSize: "14px" }}>:</span>
                  <HourWrap>
                    <HourButton onClick={minuteUpOnClick}>
                      <img src={upicon} />
                    </HourButton>
                    <HourInput
                      type="number"
                      value={minute}
                      onChange={minuteOnChange}
                      maxlength="2"
                    />
                    <HourButton onClick={minuteDownOnClick}>
                      <img src={downicon} />
                    </HourButton>
                  </HourWrap>
                </TimeArea>
                <TimeButton onClick={timeAddOnClick}>시간 추가 </TimeButton>
              </TimeWrap>
            </TimeAllDiv>
          </InterviewTableWrap>
        </InputMainTextWrap>

        {/* 아래 하단 시작 */}
        <InputMainTextWrap>
          <EditDateWrap>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
              <EditLabel>0월00일 00:00<CloseBtn src={delIcon} /></EditLabel>
          </EditDateWrap>
        </InputMainTextWrap>

        {/* 아래 하단 끝 */}

        <HeadLineBot />

        <SubmitButtonWrap>
          <SubmitButton onClick={CompliteEdit}>수정 완료</SubmitButton>
        </SubmitButtonWrap>
      </FindProjectAllWrap>
    </BackgroundAllWrap>
  );
};


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

const FindProjectAllWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 60px;
  width: 1200px;
  /* border: 1px solid black; */
  background-color: white;
  border-radius: 5px;
  margin-bottom: 40px;
`;

const FindProjectTitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px 30px 32px;
`;
const FindprojectTopWrap = styled.div`
  height: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const HeadLine = styled.hr`
  border: 1px solid #d9d9d9;
  width: 1200px;
`;

const HeadLineBot = styled.hr`
  border: 1px solid #d9d9d9;
  width: 1200px;
  margin-top: 80px;
`;

const FindProjectInputDate = styled.div`
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const FindProjectInputTitle = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const InputMainTextWrap = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProjectInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 0.5px solid black;
  padding: 8px;
  width: 1050px;
  margin-top: 16px;
`;

const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
  width: 1100px;
`;

const SubmitButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid black; */
  width: 1200px;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background: linear-gradient(115.2deg, #ae97e3 0%, #77c3e7 77.66%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 30px 30px 30px 0px;
  padding: 12px 28px;
  color: white;
  font-weight: 700;
`;

const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  gap: 15px;
  margin-bottom: 20px;
`;

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
`;

const CheckBox = styled.input`
  appearance: none;
  border: 2px solid gainsboro;
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
    background-color: #77c3e7;
  }
`;

const RoleInput = styled.input`
  appearance: none;
  border: 2px solid gainsboro;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  margin-bottom: -2.5px;
  margin-right: 5px;
  &:checked {
    border-color: transparent;
    background-color: #77c3e7;
  }
`;

const ReMainConWrap = styled.div`
  border: 0.5px solid black;
  width: 1100px;
  height: 500px;
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const RecMainCon = styled.textarea`
  /* margin: 20px;  */
  padding: 10px;
  width: 1075px;
  height: 350px;
  outline: none;
  border: none;
  resize: none;
  /* border-radius: 4px; */
`;

const TimeWrap = styled.div`
  border: 0.5px solid #d9d9d9;
  border-radius: 4px;
  width: 281px;
  height: 320px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TimeArea = styled.div`
  /* border: 1px solid black;  */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
`;

const HourWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const CalenderWrap = styled.div`
  border: 0.5px solid #d9d9d9;
  border-radius: 4px;
  width: 350px;
  height: 320px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const HourButton = styled.button`
  padding: 12px 25px 12px 25px;
  border-radius: 2px 2px 0px 0px;
  border: 0.5px solid #8d8d8d;
  outline: none;
  cursor: pointer;
`;

const HourInput = styled.input`
  width: 60px;
  height: 36px;
  border: 0.5px solid #f3f3f3;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding: 7px 0px 7px 0px;
  outline: none;
`;

const TimeButton = styled.button`
  padding: 5px 45px 5px 45px;
  background: #303032;
  border-radius: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;

const InterviewTableWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const TimeAllDiv = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;


const CalenderAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const RoleWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
`;

const RoleLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
`;

const EditDateWrap = styled.div`
  /* border: 1px solid; */
  width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`

const EditLabel = styled.label`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  width: 170px;
  font-weight: 400;
  border: 0.5px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px 12px 10px 12px;
`

const CloseBtn = styled.img`
  width: 6%;
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
  border: 0.5px solid black;
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 625px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CalendarInfoWrap = styled.div`
  border: 0.5px solid black;
  width: 297px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export default EditProject;
