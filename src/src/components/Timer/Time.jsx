import React from "react";
import "./Timer.scss";

export const Time = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1 className="ending">VOTING ENDS IN TIME SOON</h1>
      <div className="time">
        <div className="digit_text">
                  <span className="digit">{days < 9 ? '0' + hours : hours}</span>
          <span className="text">Days</span>
        </div>
        <div className="digit_text">
          <span className="digit">{hours < 9 ? "0" + hours : hours}</span>
          <span className="text">Hours</span>
        </div>
        <div className="digit_text">
          <span className="digit">{minutes < 9 ? "0" + minutes : minutes}</span>
          <span className="text">Minutes</span>
        </div>
        <div className="digit_text">
          <span className="digit">{seconds < 9 ? "0" + seconds : seconds}</span>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
};
