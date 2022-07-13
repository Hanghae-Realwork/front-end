// import Calendar Component 
import React, { Component } from 'react';
import { DatePicker } from '@y0c/react-datepicker';
// import calendar style 
// You can customize style by copying asset folder.
import '@y0c/react-datepicker/assets/styles/calendar.scss';

class DatePickerExample extends Component {

  onChange = (date) => {
    // Day.js object
    console.log(date);

    // to normal Date object
    console.log(date.toDate());
  }
  
  render() {
    return (
      <DatePicker onChange={this.onChange}/>
    )
  }
}