import React, { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="p-2 w-40 bg-transparent backdrop-blur-sm text-black rounded-lg text-center"
    >
      

      <p className="text-xl font-semibold leading-tight">
        {time.toLocaleTimeString()}
      </p>

      <p className="text-[10px] opacity-60 mt-1">
        {time.toLocaleDateString()}
      </p>
    </div>
  );
}
