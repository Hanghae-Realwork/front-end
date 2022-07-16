import React from 'react';
import TimeContainer from '@y0c/react-datepicker/lib/components/TimeContainer';
// import '@y0c/react-datepicker/assets/styles/calendar.scss';
// import 'dayjs/locale/vi';
// import './app.scss';

export default function X() {
  const handleChange = (hour, minute) => {
    console.log(hour, minute);
  };
  return (
    <div>
      <TimeContainer
        hour="07"
        minute="09"
        onChange={(hour, minute) => handleChange(hour, minute)}
      />
    </div>
  );
}