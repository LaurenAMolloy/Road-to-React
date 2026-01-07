import Square from '../Square/Square'
import { useState } from 'react'
export default function Board() {
  //This creates an array where each entry corresponds to the board
  //Like so ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

  //This is an example of a closure
  //The function handleClick has access to the state variable
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {

    //Create a copy of the squares array
    const nextSquares = squares.slice();
    //Update by adding X to the first square
    nextSquares[0] = 'X';
    setSquares(nextSquares);
  }

    return (
    <div className="flex flex-col items-center h-screen mt-5">
        <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
    )
  }
  