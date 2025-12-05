import React, { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="
        p-1 sm:p-2 
        w-24 sm:w-32 
        absolute top-2 left-[-10px] sm:top-3 sm:left-3
        text-black 
        rounded-md 
        text-center
      "
    >
      {/* Time */}
      <p className="text-xs sm:text-sm font-semibold leading-tight">
        {time.toLocaleTimeString()}
      </p>

      {/* Date */}
      <p className="text-[8px] sm:text-[10px] opacity-70 mt-1">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}
