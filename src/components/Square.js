import React from "react";

const style = {
  // background: "lightblue",
  // border: "2px solid darkblue",
  // fontSize: "30px",
  // fontWeight: "800",
  cursor: "pointer",
  outline: "none"
};

const Square = ({ onClick, value }) => (
  <button
    className="border-4 border-blue-800 bg-blue-200 text-5xl font-mono font-bold text-green-700"
    style={style}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
