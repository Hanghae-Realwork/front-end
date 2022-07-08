

import React, { useRef, useState } from "react";
import { format, isValid, parse, isAfter } from "date-fns";
import { DayPicker } from "react-day-picker";

import { ko } from "date-fns/esm/locale";

const DayPickerSingle = () => {
    //배열형태
  const [selected, setSelected] = useState([]);





    const footer = selected && selected.length > 0 ?
        <p>{selected.length} </p> :
        <p>원하는 날짜를 지정해주세요.</p>




  return (
    <div>
          <DayPicker mode="multiple" min={1} selected={selected} onSelect={setSelected} footer={footer} max={7} locale={ ko} />

    </div>
  );
};

export default DayPickerSingle;
