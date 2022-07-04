import "react-day-picker/dist/style.css";
import "./day-picker.css";
import React, { useRef, useState } from "react";
import { format, isValid, parse, isAfter } from "date-fns";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";

const DayPickerSub = () => {
  const [selected, setSelected] = useState(new Date());
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [beforeDay, setBeforeDay] = useState("");

  const today = new Date();

  let footer = (
    <p
      style={{
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        width: "180px",
        textAlign: "center",
        fontSize: "13px",
      }}
    >
      시작날짜를 눌러주세요
    </p>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "150px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {format(selected.from, "yyyy년 MM월 dd일")}
        </p>
      );
    } else if (selected?.to) {
      footer = (
        <p
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "260px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          {format(selected.from, "yyyy년 MM월 dd일 ")}~
          {format(selected.to, " yyyy년 MM월 dd일")}
        </p>
      );
    }
  }

  return (
    <div>
      <DayPicker
        styles={{
          caption: { fontSize: "10px", padding: "10px" },
        }}
        className="dayPicker_container__div"
        mode="range"
        selected={selected}
        onSelect={setSelected}
        locale={ko}
        numberOfMonths={2}
        disabled={{ before: today }}
      ></DayPicker>
      {footer}
    </div>
  );
};

export default DayPickerSub;
