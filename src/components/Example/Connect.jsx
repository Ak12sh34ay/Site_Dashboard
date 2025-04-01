import React, { useState } from "react";
// import Form from "./Form";
// import Display from "./Display";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const Connect = () => {
  // const [inputValue, setInputValue] = useState(""); // State to store input value

  return (
    <div>
      <h2>Form and Display Example</h2>
      <FirstComponent/>
      {/* Pass function to update state */}
      <SecondComponent value={inputValue} /> {/* Pass state value as prop */}
    </div>
  );
};

export default Connect;
