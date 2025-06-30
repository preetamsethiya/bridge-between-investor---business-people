import React from "react";
import "./components.css";
export default function Input({ className, child1, input, child2, children }) {
  return children ? (
    children
  ) : (
    <>
      <div className={`inputContainer ${className}`}>
        <label className="label">
          <span className="customPlaceHolder customPlaceHolderTrans ">
            {" "}
            {child1?.text}
          </span>
          <input
            className=" input "
            type={input?.type}
            name={input?.name}
            value={input?.value}
            onChange={input?.onChange}
          />
        </label>
        <div className="inputIcon ">{child2?.text} </div>
      </div>
    </>
  );
}
