import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 22, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const seconds = Math.floor(distance / 1000);

      if (distance > 0) {
        setTimerSeconds(seconds);
      } else {
        clearInterval(interval.current);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <h2>
            Earth Day
            <br />
          </h2>
          Countdown In Seconds
          <p>{timerSeconds}</p>
        </div>
      </section>
    </section>
  );
}

export default App;
