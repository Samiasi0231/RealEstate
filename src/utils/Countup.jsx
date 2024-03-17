import React, { useEffect, useState } from "react";

function CountUp({ start, end, duration }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const startCount = (timestamp) => {
      startTime = timestamp || performance.now();
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      console.log(startCount);
      setCount(Math.floor(start + percentage * (end - start)));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startCount);
      }
    };

    animationFrame = requestAnimationFrame(startCount);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [start, end, duration]);

  return <span>{count}</span>;
}

export default CountUp;
