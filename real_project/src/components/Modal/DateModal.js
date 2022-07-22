import React, {useState} from "react"
import styled from "styled-components"
import DatePicker from "react-datepicker";
import Footer from "../../components/Date/Footer"
import { useDispatch } from "react-redux";
import {loaddate} from "../../redux/modules/search"


function DateModal (props) {

    const dispatch = useDispatch()

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const DoubleCalenderOnChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log(start, end)
      };

    const AddDate = () => {
      const StartCalDate = startDate.getFullYear() + "-" + (startDate.getMonth() +1) + "-" + startDate.getDate()
      const EndCalDate = endDate.getFullYear() + "-" + (endDate.getMonth()+1) + "-" + endDate.getDate()
      dispatch(loaddate([StartCalDate, EndCalDate]))
      CloseModal()
    }

    const CloseModal = () => {
      props.close(false);
    };

    return(
        <RelativeWrap>
            <ModalCalWrap>
                <CalendarWrap>
                <DatePickerWrapper
                    popperContainer={Popper}
                    calendarContainer={Calendar}
                    controls={["calendar"]}
                    dateFormat="YYYY-MM-DD"
                    locale="ko" // 달력 한글화
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
                <CalBtnWrap>
                    <CalendarInfoWrap>
                    <Footer start={startDate} end={endDate} />
                    </CalendarInfoWrap>
                    <SubmitBtn onClick={AddDate}>선택완료</SubmitBtn>
                </CalBtnWrap>
            </ModalCalWrap>
        </RelativeWrap>
    )
}


const RelativeWrap = styled.div`
  position: relative;
`

const ModalCalWrap = styled.div`
    border: 0.5px solid #303032;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    position: absolute;
    z-index: 5;
    background-color: white;
    top: 23px;
`

const CalBtnWrap = styled.div`
    /* border: 1px solid black; */
    width: 555px;
    padding: 20px 35px 20px 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`

const SubmitBtn = styled.button`
    padding: 7px 20px 7px 20px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border-radius: 4px;
    font-weight: 700;
  font-size: 14px;
`


const DatePickerWrapper = styled(
    ({ className, ...props }) => 
    (<DatePicker {...props} 
      wrapperClassName={className} />))`  width: 100%;
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
  
    const CalendarWrap =styled.div`
      /* border: 0.5px solid black; */
      border-radius: 4px;
      width: 625px;
      height: 330px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `
  
    const CalendarInfoWrap = styled.div`
      border: 0.5px solid black;
      width: 270px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    `
  




export default DateModal