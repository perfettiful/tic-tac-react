import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="shadow-2xl w-64 h-64 grid grid-cols-3 grid-rows-3 mx-auto rounded-lg border-blue-800 border-8">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
