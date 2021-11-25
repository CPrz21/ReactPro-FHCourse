import { useState, useEffect } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect: React.FC = () => {
  const [counter, setCounter] = useState<number>(5);

  const handleClick = () =>
    setCounter((prev: number) => Math.min(prev + 1, MAXIMUN_COUNT));

  useEffect(() => {
    if (counter === MAXIMUN_COUNT)
      return console.log(
        "%cMaximun count has been reached",
        "color: yellow; background-color: black;"
      );
  }, [counter]);

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button
        disabled={counter === MAXIMUN_COUNT}
        onClick={() => handleClick()}
      >
        +1
      </button>
    </>
  );
};
