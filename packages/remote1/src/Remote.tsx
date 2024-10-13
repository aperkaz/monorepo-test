import { useState } from "react";
import "./Remote.css";

function Remote({ defaultCount }: { defaultCount: number }) {
  const [count, setCount] = useState(defaultCount);

  return (
    <div className="wrapper">
      <h3>Remote 1</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Remote;
