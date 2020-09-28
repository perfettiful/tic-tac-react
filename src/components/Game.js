import React, { useState } from "react";
import { calculateWinner } from "../calculate-winner";
import Board from "./Board";

import pattern from "../assets/pattern.png";

const bgPattern = {
  backgroundImage: `url(${pattern})`
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // if user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const gamestart = (
        <p className="transition duration-500 ease-in-out bg-red-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 rounded-md py-2 w-40 mx-auto text-2xl font-bold px-2">
          Game Start
        </p>
      );

      const goToMove = (
        <p className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 rounded-md py-2 w-40 mx-auto text-xl px-2">{`Go to move #${move}`}</p>
      );

      const destination = move ? goToMove : gamestart;
      return (
        <li className="mt-10 text-white list-none" key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <div
      className="pt-12 bg-fixed flex flex-col min-h-screen text-center font-mono"
      style={bgPattern}
    >
      <h1 className="text-6xl">Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <p className="text-sm font-sans text-gray-700">@RafaelDavish</p>
      <div className="py-4 my-12 mx-auto">
        <p className="text-3xl bg-blue-800 text-green-300 rounded-lg transform skew-y-3 px-4">
          {winner ? "Winner: " : "Next Player: "}
          <span className="text-white text-5xl ">
            {winner ? winner : xIsNext ? "X" : "O"}
          </span>
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
