import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { RecoilRoot } from 'recoil'
import { PrivateRoute, AuthRoute } from './pages/PrivateRoute'


function App() {
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/blogs' element={<Blogs/>}/>
        </Route>
        <Route element={<AuthRoute />}>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
    </>
  )
}

export default App
