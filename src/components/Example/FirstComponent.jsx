import React, { useState } from "react";

const FirstComponent = ({ setInputValue }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FirstComponent;
