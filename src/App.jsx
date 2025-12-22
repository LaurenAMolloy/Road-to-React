import { Routes, Route } from 'react-router'
import * as Pages from './pages'
import Nav from './layouts/Nav'

function App() {
  //add Nav
  //add routes
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/usestate" element={<Pages.UseStatePage />} />
      <Route path="/props" element={<Pages.PropsPage />} />
      <Route path="/useEffect" element={<Pages.UseEffectPage />} />
    </Routes>
    </>
  )
}

export default App
