// Use Ref is an alternative of DOM koi pan element direct acess thai
// UseState re renders the entire component when its value is changed UseRef aakhu render na kare
//  .current Use karvu compulsory che access karva mate

import React, { useRef } from "react";

const UseRefDemo = () => {
  const count = useRef(null);

  const focusInput = () => {
    // can also change the style of the element
    count.current.focus();
  };

  return (
    <div>
      <h1>useRef Demo</h1>

      {/* Give Ref to access the element */}
      <input ref={count} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRefDemo;
