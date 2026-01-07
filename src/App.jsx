import { Routes, Route } from 'react-router'
import * as Pages from './pages'
import Nav from './layouts/Nav'
import { useState } from 'react'

function App() {
  
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/usestate" element={<Pages.UseStatePage />} />
      <Route path="/props" element={<Pages.PropsPage />} />
      <Route path="/useEffect" element={<Pages.UseEffectPage />} />
      <Route path="/inputs" element={<Pages.InputsPage />} />
      <Route path="/useContext" element={<Pages.UseContextPage />} />
      <Route path="/tictactoe" element={<Pages.TicTacToePage />} />
      <Route path="/testing" element={<Pages.TestingPage />} />
    </Routes>
    </>
  )
}

export default App
