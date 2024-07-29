import React, { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count Handler Using useState</h1>

      <button onClick={() => setCount(count + 1)}>Click Here {count}</button>
    </div>
  );
};

export default Main;
