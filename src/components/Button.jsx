import React from "react";

export default function Button({ button }) {
  console.log(button);
  return (
    <button className={`button ${button.className}`}>
      <div>{button.text} </div>
    </button>
  );
}
