import { useState } from "react";

interface Props {
  initialValue: number;
}

export const Counter: React.FC<Props> = ({ initialValue }) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const incrementCounter = () => setCounter((prev: number) => prev + 1);
  const decrementCounter = () => setCounter((prev: number) => prev - 1);

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={() => decrementCounter()}>-1</button>
      <button onClick={() => incrementCounter()}>+1</button>
    </>
  );
};
