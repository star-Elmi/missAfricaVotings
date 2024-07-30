import React from "react";
import "./Timer.scss";
import Countdown from "react-countdown";
import { Time } from "./Time";

export const Timer = () => {
  // Random component
  const Completion = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completion />;
    } else {
      // Render a countdown
      return (
          <Time days={days} hours={hours} minutes={minutes} seconds={seconds}  />
      );
    }
  };

  return (
    <div className="timer">
      <Countdown date={Date.now() +  14169600000} renderer={renderer} />
    </div>
  )
};
