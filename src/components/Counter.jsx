import React from 'react'
import { useState } from 'react'

export default function Counter() {
    //Add a reset button!
    //Controlled input vs 

    //state for counter
    const[count, setCount] = useState(0);

    //state for input
    const[input, setInput] = useState("");

    const handleIncrement = () => {
        setCount(prevCount => prevCount +1)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount -1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(prev => prev + Number(input))
        setInput("")
    }

  return (
    <div className="flex h-screen flex-col justify-center items-center">
        <h1 className="text-4xl pb-4">Here we can see the virtual DOM in action!</h1>
        <h2 className="text-1xl text-center">Only the p tag containing the count variable is updated in the real DOM</h2>
        <p className="text-4xl pt-20">{count}</p>
        <div className='flex w-1/2 justify-around'>
            <button onClick={handleDecrement} className="bg-violet-700 w-1/4 py-2 rounded-full  text-white">-</button>
            <button onClick={handleIncrement} className="bg-violet-700 w-1/4 py-2 rounded-full text-white">+</button>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center pt-5 gap-4'>
        <label htmlFor='amount'>Enter an amount to increase by:</label>
        <input className="border-2 border-blue-600" 
        type="number" 
        id="amount" 
        name="amount"
        value={input}
        onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit" 
        className="bg-violet-700 w-full py-2 rounded-full text-white">
            Submit
        </button>
        </form>
    </div>
  )
}
