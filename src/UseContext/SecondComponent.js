import React from "react";
import { useContext } from "react";
import { firstName, lastname } from "./UseContextDemo";

const SecondComponent = () => {
  const fname = useContext(firstName);
  const lname = useContext(lastname);
  return (
    <div>
      <h1>
        Hello I am {fname} {lname} from Main component using UseContext Hook
      </h1>
    </div>
  );
};

export default SecondComponent;
