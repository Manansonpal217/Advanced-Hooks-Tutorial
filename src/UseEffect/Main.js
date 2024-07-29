import React, { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [valueCounter, valueChanger] = useState(0);

  useEffect(() => {
    valueChanger(valueCounter + 1);

    console.log(valueCounter);
  }, [count]);

  return (
    <div>
      <h1> The UseEffect has been executed {valueCounter} time</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {"You clicked This"}
        {count}
      </button>
    </div>
  );
};

export default Main;
