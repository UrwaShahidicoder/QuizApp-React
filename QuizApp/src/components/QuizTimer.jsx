import React, { useState, useEffect } from 'react';

const QuizTimer = ({ difficulty, questionCount, onTimeUp }) => {
  const getTimeLimit = () => {
    const baseTimes = {
      easy: 135, // 2 min 15 sec
      medium: 180,
      hard: 225,
    };
    const extraTime = Math.max(0, questionCount - 10) * 20;
    return (baseTimes[difficulty] || baseTimes.easy) + extraTime;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLimit());
  const [timeLimit, setTimeLimit] = useState(getTimeLimit());

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const progressPercent = ((timeLimit - timeLeft) / timeLimit) * 100;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <p className="text-base sm:text-lg md:text-xl text-neutral-100 font-medium text-center mb-2">
        Time Left:{' '}
        <span className="font-semibold text-blue-400">{formatTime(timeLeft)}</span>
      </p>
      <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizTimer;