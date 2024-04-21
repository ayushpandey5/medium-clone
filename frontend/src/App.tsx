import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
