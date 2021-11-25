import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect: React.FC = () => {
  const [counter, setCounter] = useState<number>(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () =>
    setCounter((prev: number) => Math.min(prev + 1, MAXIMUN_COUNT));

  useEffect(() => {
    if (counter === MAXIMUN_COUNT) {
      console.log(
        "%cMaximun count has been reached",
        "color: yellow; background-color: black;"
      );

      const tl = gsap.timeline();
      tl.to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      }).to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
    }
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button
        disabled={counter === MAXIMUN_COUNT}
        onClick={() => handleClick()}
      >
        +1
      </button>
    </>
  );
};
