import React from "react";
import { createContext } from "react";
import FirstComponent from "./FirstComponent";
const firstName = createContext();
const lastname = createContext();
const UseContextDemo = () => {
  return (
    <div>
      <firstName.Provider value="Manan">
        <lastname.Provider value="Sonpal">
          <FirstComponent />
        </lastname.Provider>
      </firstName.Provider>
    </div>
  );
};

export default UseContextDemo;
export { firstName, lastname };
