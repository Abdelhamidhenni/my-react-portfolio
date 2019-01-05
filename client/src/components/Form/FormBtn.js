import React from "react";

export const FormBtn = props =>
  <button {...props} className="btn submitbtn">
    {props.children}
  </button>;
