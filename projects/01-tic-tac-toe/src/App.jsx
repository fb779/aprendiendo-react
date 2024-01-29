import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./componets/Square";
import { WinnerModal } from "./componets/WinnerModal.jsx";
import { TURNS, ENVIRONMENT } from "./constants.js";
import "./App.css";
import { checkEndGame, checkWinner } from "./logic/board.js";
import { clearStorage, getStorage, saveStorage } from "./logic/storage.js";

function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [turn, setTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(() => {
    const boardFromStorage = getStorage(ENVIRONMENT.board);
    if (boardFromStorage) return boardFromStorage;
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getStorage(ENVIRONMENT.turn);
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = getStorage(ENVIRONMENT.winner);
    return winnerFromStorage !== null ? winnerFromStorage : null;
  });

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    clearStorage();
  };

  const updateBoard = (index) => {
    // no actualiza una posicion ya establecida
    if (board[index] || winner) return;

    // actualizacion del board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // actualizacion del turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // verificamos si existe un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
    saveStorage(ENVIRONMENT.winner, newWinner);
    saveStorage(ENVIRONMENT.board, newBoard);
    saveStorage(ENVIRONMENT.turn, newTurn);
  };

  return (
    <main className="board">
      <h1>tic-tac-toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}

export default App;
