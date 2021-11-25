import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnimate = useRef<HTMLHeadingElement>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = () =>
    setCounter((prev: number) => Math.min(prev + 1, MAXIMUN_COUNT));

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
