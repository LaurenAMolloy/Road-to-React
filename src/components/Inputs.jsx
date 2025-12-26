import { useState } from 'react'

export default function Inputs() {
    const[inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div className='flex flex-col justify-center items-center pt-12'>
        <h1 className='text-3xl pb-4 font-bold text-center'>What are controlled and uncontrolled components?</h1>
        <div className='flex flex-col gap-5 pt-5'>
        <div>
            <h2 className='text-1xl font-bold pb-4'>Controlled Components</h2>
            <form className='flex flex-col gap-3 py-5 px-5 bg-violet-200 rounded'>
                <label htmlFor='value'>Enter a Value</label>
                <input
                className='border-violet-800 border-2 rounded' 
                type="text"
                id="value" 
                name="value"
                placeholder="value"
                value={inputValue}
                onChange={handleChange}></input>
            </form>
            <p className='pt-3 font-bold'>Value: {inputValue}</p>
        </div>
        <div>
            <h2>Uncontrolled Components</h2>

        </div>
        </div>
    </div>
  )
}
