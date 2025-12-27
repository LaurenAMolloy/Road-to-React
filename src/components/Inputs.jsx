import { useState } from 'react'

export default function Inputs() {
    const[inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div className='flex flex-col items-center pt-5 mx-5'>
        <h1 className='text-1xl font-bold text-center pb-5 '>What are controlled and uncontrolled components?</h1>
        <div className='flex flex-col items-center gap-2 pt-5 bg-violet-300 w-4/5 p-5 rounded'>
            <h2 className='text-1xl font-bold pb-1'>Controlled Components</h2>
                <form className='flex flex-col gap-3 py-5 px-5 bg-white rounded w-full'>
                    <label htmlFor='value'>How are you feeling today?</label>
                    <input
                    className='border-violet-800 border-2 rounded' 
                    type="text"
                    id="value" 
                    name="value"
                    placeholder="e.g happy"
                    value={inputValue}
                    onChange={handleChange}></input>
                </form>
        </div>
        <p className='pt-3 font-bold'>You are feeling: {inputValue}</p>
    </div>
  )
}
