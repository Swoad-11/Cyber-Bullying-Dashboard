import { useEffect, useState } from "react";
import { AiFillHourglass } from "react-icons/ai";

export default function CountDown() {
  const electionDate = new Date("2026-1-31");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const now = new Date();
      const difference = electionDate - now;
      const days = Math.max(Math.ceil(difference / (1000 * 60 * 60 * 24)), 0);
      setDaysLeft(days);
    };

    calculateDaysLeft();

    const timer = setInterval(calculateDaysLeft, 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, [electionDate]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 h-full flex flex-col items-center justify-center text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Election Countdown
      </h2>

      <div className="flex items-center gap-4">
        <AiFillHourglass className="text-6xl text-gray-300 animate-spin-slow" />
        <div className="text-center">
          <p className="text-8xl max-[1025px]:text-6xl font-bold leading-none">
            {daysLeft}
          </p>
          <p className="text-2xl mt-2">Days Left</p>
        </div>
      </div>
    </div>
  );
}
