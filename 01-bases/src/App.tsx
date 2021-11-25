import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";

function App() {
  return (
    <>
      <Counter initialValue={2} />
      <CounterBy initialValue={5} />
      <CounterEffect />
    </>
  );
}

export default App;
