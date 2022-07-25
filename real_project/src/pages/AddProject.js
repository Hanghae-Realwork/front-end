import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {  useDispatch } from "react-redux";
import {
  createRecruitAxios,
  projectsPhotosAxios,
} from "../redux/modules/postRecruit";
import {
  dvelopSkills_list,
  designerSkills_list,
} from "../shared/developeSkills";

import Footer from "../components/Date/Footer";
import DatePicker from "react-datepicker";

import addimage from "../image/addimage.svg";
import upicon from "../image/upicon.svg";
import downicon from "../image/downicon.svg";
import ko from "date-fns/locale/ko";




const FindProjectStep01 = (props) => {
  
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
    const [month, setMonth] = useState(new Date().getMonth()+1);
    const [day, setDay] = useState(new Date().getDate());
  let newDate = year + "-" + month + "-" + day;


  useEffect(() => {
    setRangeTime({});
    setHour(0)
    setMinute(0)
  }, [singleDate])
 
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
      } else { setHour(hour + 1); setMinute(0); }
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
    setSingleDate(date)
  };
 
 
  const date = year + "-" + month + "-" + day;
  const time = `${("00" + hour).slice(-2)}:${("00" + minute).slice(-2)}`;

  const timeAddOnClick = () => {

    let temp = { ...rangeTime };
    // console.log(temp[date].length);
    if (temp[date] && temp[date].length < 5) { 
    if (Object.keys(temp).includes(date) && !temp[date].includes(time)) {
      temp[date] = [...temp[date], time];
    } else if (temp[date] && temp[date]) {
      if (Object.keys(temp).includes(date) && temp[date].includes(time)) {
        temp[date] = [...temp[date]];
      }
    } else {
      temp[date] = [time];
    }
    } else {
       temp[date] = [time];
    }

    //오름차순으로 정리
    temp[date] = temp[date].sort((a, b) => {
          return Number(a.replace(":", "")) - Number(b.replace(":", ""));
        })

    setRangeTime(temp);

  };

//2단계 :사용되는 날짜 + 시간 에 대한 상태관리
  const [rangeTotal, setRangeTotal] = useState([]);
  const [newList,setNewList] = useState([])
  
  
  const schduleAddOnClick = () => {
    // [{},{},{}]

    const arr = rangeTotal.filter((list) => {
     return Object.keys(list).toString() === Object.keys(rangeTime).toString();
    })
    if (arr.length === 0 && Object.keys(rangeTime).length !== 0) {
      let arr1 = [...rangeTotal, rangeTime];
      //미완성 진행중 지우지 말것
      //  const arr4= arr1.sort((a,b) => {
      //   return Object.keys(a) - Object.keys(b);
      // })
      // setRangeTotal(arr1);
       setRangeTotal(arr1);
    }
  };
console.log(rangeTotal)
  // 저장 버튼
  const CompliteButton = async () => {
    //날짜+시간 데이터 가공 
    let new_list = [];

    rangeTotal.forEach((item, index) => {

      const date = Object.keys(item)
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
      alert("부족한 정보가 있습니다! 🥸");
    } else {
      frm.append("photos", files[0]);
      try {
        await dispatch(projectsPhotosAxios(frm)).then((success) => {
          dispatch(
            createRecruitAxios(
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
            placeholder="제목을 입력해주세요"
          ></ProjectInput>
        </FindProjectInputTitle>
        <FindProjectInputTitle>
          <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
          <ProjectInput
            ref={subscriptRef}
            id="subscript"
            type="text"
            placeholder="프로젝트를 설명해주세요"
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
              placeholder="프로젝트의 내용을 입력해주세요"
            />
            {/* <PhotoUPloadWrap>
              {filesImg ? (
                <UpPhotoArea alt="sample" id="showImg" src={filesImg} />
              ) : (
                <DisablePhotoWrap></DisablePhotoWrap>
              )}
              <EditWrapPhoto>
                {filesImg ? (
                  <PhotoText>
                    수정하기
                    <input
                      name="imgUpload"
                      type="file"
                      id="add_img"
                      accept="image/*"
                      onChange={onChangeImg}
                    />
                  </PhotoText>
                ) : (
                  <PhotoText>
                    등록하기
                    <input
                      name="imgUpload"
                      type="file"
                      id="add_img"
                      accept="image/*"
                      onChange={onChangeImg}
                    />
                  </PhotoText>
                )}
              </EditWrapPhoto>
            </PhotoUPloadWrap> */}
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
          <ProjectTitleText>면접 가능 시간</ProjectTitleText>
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
              <InterviewText>인터뷰 가능 날짜를 설정 해주세요.</InterviewText>
              <InterviewText>
                최대 열개의 날짜를 설정할 수 있습니다.
              </InterviewText>
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
              <InterviewText>인터뷰 가능 시간을 설정 해주세요.</InterviewText>
              <InterviewText>
                하루에 최대 다섯 타임을 설정할 수 있습니다.
              </InterviewText>
            </TimeAllDiv>
            <TimeSelectWrap>
              <InterviewTextDate>
                {year
                  ? year + "년 " + month + "월 " + day + "일"
                  : "날짜를 선택해주세요."}
              </InterviewTextDate>
              <TimeAddButtonWrap>
                {
                  rangeTime[newDate] &&
                  rangeTime[newDate].map(
                    (ele, idx) => {
                    
                      return (
                        <TimeAddLeftWrap key={idx}>
                          <LeftTimeButton>{ele}</LeftTimeButton>
                          <LeftDelBtn
                            onClick={(e) => {
                              const new_post = rangeTime[
                                newDate
                              ].filter((l, index) => {
                                return idx !== index;
                              });   
                              setRangeTime({
                                  [newDate]
                                : new_post}) 
                            }}
                          >
                            삭제하기
                          </LeftDelBtn>
                        </TimeAddLeftWrap>
                      );
                    }
                  )}
              </TimeAddButtonWrap>
              <TimeAddButton onClick={schduleAddOnClick}>
                면접시간 등록
              </TimeAddButton>
            </TimeSelectWrap>
          </InterviewTableWrap>
        </InputMainTextWrap>

        {/* 아래 하단 시작 */}

        <AddbleTimeWrap>
          {rangeTotal.map((list, idx) => {
            const min = Object.keys(list).toString()
            return (
              <TimeSelectWrapPlus key={idx}>
                <InterviewDateWrap>
                  <InterviewTextDateBot>
                    {Object.keys(list)}
                  </InterviewTextDateBot>
                  <BotDelBtn
                    onClick={(e) => {
                      const new_post = rangeTotal.filter((ele, index) => {
                       return idx !== index;
                      })
                        setRangeTotal(new_post)
                    }}
                  >
                    삭제
                  </BotDelBtn>
                </InterviewDateWrap>

                <TimeAddButtonWrap>
                  <TimeAddLeftWrap>
                    {rangeTotal[idx][min] &&
                      rangeTotal[idx][min].map((time, index) => {
                        return (
                          <LeftTimeButton key={index}>{time}</LeftTimeButton>
                        );
                      })}
                  </TimeAddLeftWrap>
                </TimeAddButtonWrap>
              </TimeSelectWrapPlus>
            );
          })}

        </AddbleTimeWrap>

        {/* 아래 하단 끝 */}

        <HeadLineBot />

        <SubmitButtonWrap>
          <SubmitButton onClick={CompliteButton}>등록하기</SubmitButton>
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

const UpPhotoArea = styled.img`
  /* border: 1px solid black; */
  width: 120px;
  height: 100px;
  background-position: center;
  background-size: cover;
`;

const DisablePhotoWrap = styled.div`
  /* border: 1px solid black; */
  background-image: url(${addimage});
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-position: center;
  background-size: cover;
`;

const EditWrapPhoto = styled.div`
  /* border: 1px solid black; */
  width: 150px;
  height: 90px;
  background-position: center;
  background-size: cover;
`;

const PhotoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
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

const PhotoUPloadWrap = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  width: 1075px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
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

const InterviewText = styled.span`
  font-size: 12px;
  font-weight: 400;
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

const TimeSelectWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  margin-left: 100px;
  height: 370px;
`;

const TimeSelectWrapPlus = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  width: 235px;
  /* margin-top: 100px;
  margin-left: 20px; */
`;

const TimeAddButton = styled.button`
  padding: 5px 40px 5px 50px;
  background-color: #303032;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
`;

const TimeAddButtonWrap = styled.div`
  height: 255px;
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  margin-bottom: 40px;
  margin-top: 10px;
  gap: 12px;
`;

const TimeAddLeftWrap = styled.div`
  /* height: 250px; */
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const LeftTimeButton = styled.div`
  width: 180px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  border: 0.5px solid #303032;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LeftDelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  font-size: 12px;
  font-weight: 400;
  height: 40px;
  cursor: pointer;
`;

const BotDelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const InterviewTextDate = styled.span`
  color: #8d8d8d;
  font-size: 14px;
  font-weight: 400;
  /* border: 1px solid black; */
  height: 20px;
`;

const InterviewTextDateBot = styled.div`
  color: #303032;
  font-size: 14px;
  font-weight: 400;
  /* border: 1px solid black; */
  height: 20px;
`;

const AddbleTimeWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  width: 1200px;
  margin-top: 100px;
`;

const InterviewDateWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
  width: 180px;
`;

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

export default FindProjectStep01;
