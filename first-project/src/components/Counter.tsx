import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p> Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increases</button>
      <button onClick={() => setCount(count - 1)}>Decreases</button>
    </>
  );
}

export default Counter;
