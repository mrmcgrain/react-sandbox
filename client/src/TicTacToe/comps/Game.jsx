import React, { useState } from 'react'
import Board from "./Board"

export default function Game() {

    // const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove %2 === 0;
    const currentSquares = history[currentMove];


    //     Next, create a handlePlay function inside the Game component that will be called by the Board component to
    // update the game. Pass xIsNext , currentSquares and handlePlay as props to the Board component:

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        // setXIsNext(!xIsNext);
        
    }


    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        // setXIsNext(nextMove % 2 === 0)
        //TODO
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });



    return (
        <div className="game">
            <div className="game-board grid-item">

                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

            </div>

            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );


}