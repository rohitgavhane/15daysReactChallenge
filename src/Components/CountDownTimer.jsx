import React, { useEffect, useState, useRef } from 'react';

function CountDownTimer() {
  const [hours, setHours] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [isRunning, setRunning] = useState(false);

  const timeRef = useRef(null); // ⬅️ Added this to hold the timer ID

  const setTimer = () => {
    const totalSecond =
      parseInt(hours || 0) * 3600 +
      parseInt(minute || 0) * 60 + // ⬅️ Fix multiplier here
      parseInt(second || 0);

    if (totalSecond > 0) {
      setRemaining(totalSecond);
      setRunning(true);
    }
  };

  // Timer logic
  useEffect(() => {
    if (isRunning && remaining > 0) {
      timeRef.current = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    if (remaining === 0 && isRunning) {
      setRunning(false);
      clearInterval(timeRef.current);
    }

    return () => clearInterval(timeRef.current);
  }, [isRunning, remaining]);

  const formatTime = (time) => String(time).padStart(2, '0');

  const displayHours = Math.floor(remaining / 3600);
  const displayMinute = Math.floor((remaining % 3600) / 60);
  const displaySecond = remaining % 60;

  return (
    <div className="container">
      <input
        type="number"
        placeholder="HH"
        value={hours}
        onChange={(e) => setHours(e.target.value)} // ⬅️ Fixed event handler
      />
      <input
        type="number"
        placeholder="MM"
        value={minute}
        onChange={(e) => setMinute(e.target.value)} // ⬅️ Fixed event handler
      />
      <input
        type="number"
        placeholder="SS"
        value={second}
        onChange={(e) => setSecond(e.target.value)} // ⬅️ Fixed event handler
      />

      <button onClick={setTimer}>Start</button>

      <h1>
        {formatTime(displayHours)}:{formatTime(displayMinute)}:
        {formatTime(displaySecond)}
      </h1>
    </div>
  );
}

export default CountDownTimer;
