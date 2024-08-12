import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Hello</h1>
      <p data-testid="current-count" className="counter">
        Count: {count}
      </p>
      <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
      <button onClick={() => setCount(count + 1)}>Increment (+)</button>
    </div>
  );
};

export default Component;