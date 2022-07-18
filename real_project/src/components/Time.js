import { setMinutes } from "date-fns";
import React, { useState } from "react"
import styled from "styled-components";

const Time = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);


    const minuteUpOnClick = () => {
      if (minute === 59) {
        setMinute(0);
        setHour(hour + 1);
      } else {
        setMinute(minute + 1);
      }
    };

    
    return (
      <Div>
        <Container>
          <button>올리기</button>
          <input value={hour} />
          <button>내리기</button>
        </Container>
        <Container>
          <button onClick={minuteUpOnClick}>올리기</button>
          <input value={minute} />
          <button>내리기</button>
        </Container>
      </Div>
    );
}
const Div = styled.div`
display : flex;
`
const Container = styled.div`
display:flex;
flex-direction:column;`


export default Time