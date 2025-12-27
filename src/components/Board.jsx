import Square from '../components/Square'
import { useState } from 'react'
export default function Board() {
  //This creates an array where each entry corresponds to the board
  //Like so ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]

  //This is an example of a closure
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    //CREATE A COPY OF SQUARES ARRAY
    const nextSquares = squares.slice();
    //UPDATE BY ADDING X TO FIRST SQUARE
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
  