import { useState } from "react";

const Counter = ({ initialValue }: {initialValue: number}) => {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <h1>Counter:</h1>
      <p data-testid="counter">{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
      <button onClick={() => setCount(count + 1)}>Increment (+)</button>
      <button data-testid="reset" onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counter;