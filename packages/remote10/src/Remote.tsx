import { useState } from "react";
import "./Remote.css";
import * as m from "./module";

console.log(typeof m);
function Remote({ defaultCount }: { defaultCount: number }) {
  const [count, setCount] = useState(defaultCount);

  return (
    <div className="wrapper">
      <h3>Remote 10</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Remote;
