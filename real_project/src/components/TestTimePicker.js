// import Calendar Component 
import React, { Component } from 'react';
import { DatePicker ,action } from '@y0c/react-datepicker';
import TimeContainer from './TestTimePicker2';
// import calendar style 
// You can customize style by copying asset folder.
// import '../test-utills/calendar.scss'
import './TestTimePicker.css'
// Please include the locale you want to use.
// and delivery props to calendar component 
// See locale list https://github.com/moment/moment/tree/develop/locale
import 'moment/locale/ko';
import ko from 'date-fns/locale/ko';


class DatePickerExample extends Component {

  onChange = (date) => {
    const time = JSON.stringify(date.$d)
    console.log(date);
    console.log(time);
  }
  

  render() {
    return (
      <div>
        <DatePicker 
        show={false}
        position
        autoFocus={true}
        showContents
        // readOnly
        showTimeOnly
        locale="ko" 
        onChange={this.onChange} />
        <TimeContainer>
          
        
        </TimeContainer>

        <div header="DatePicker Include Time">
        <DatePicker
          includeTime
          showToday
          // onChange={onChange("DatePicker include time")}
        />
      </div>
      </div>

      
    )
  }


}
export default DatePickerExample