import { Routes, Route } from 'react-router';
import * as Pages from './pages';
import MainLayout from './layouts/MainLayout';
import CoreLayout from './layouts/CoreLayout';
import Nav from './components/Nav';
 

function App() {
  
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Pages.HomePage />} />
      <Route path="/core" element={<CoreLayout />} >
        <Route index element ={<Pages.CoreConceptsPage />} />
        <Route path="usestate" element={<Pages.UseStatePage />} />
        <Route path="props" element={<Pages.PropsPage />} />
        <Route path="useeffect" element={<Pages.UseEffectPage />} />
        <Route path="usecontext" element={<Pages.UseContextPage />} />
      </Route >
      <Route path="/ui" element={<Pages.UIPage />} />
      <Route path="/projects" element={<Pages.ProjectsPage />} />
      <Route path="/testing" element={<Pages.TestingPage />} />
    </Routes>
    </>
  )
}

export default App
