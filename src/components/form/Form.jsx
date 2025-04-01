import { useState } from "react";

const Form = ({ onSubmit, children, className }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSubmit(event); // Trigger the passed onSubmit handler
  };

  return (
    <form onSubmit={handleSubmit} className={` ${className}`}>
      {children}
    </form>
  );
};

export default Form;
