import React from 'react'
import Counter from '../../components/Counter/Counter'
import { useState, Activity } from 'react'

export default function UseStatePage() {
  const[isShowingCounter, setIsShowingCounter] = useState(false);

  const handleToggle = () => {
    setIsShowingCounter(prev => !prev)
  }

  return (
    <>
    <button onClick={handleToggle} className="bg-violet-700 w-1/4 py-2 rounded-full text-white">Toggle</button>
    <Activity mode={isShowingCounter ? 'visible' : 'hidden'}>
      <Counter />
    </Activity>
    
    </>
  )
}
