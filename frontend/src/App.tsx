import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { RecoilRoot } from 'recoil'
import { PrivateRoute, AuthRoute } from './pages/PrivateRoute'
import { AddBlog } from './pages/AddBlog'
import { SingleBlog } from './pages/SingleBlog'
import { MyBlogs } from './pages/MyBlogs'


function App() {
  //dont do it like this, since I can guarantee the token is valid, 
  //I could do this, but usually hit backend from a function check if user is valid
  //Can use selector from recoil too.
  const token = localStorage.getItem("token")
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          {token ? <Route path='/' element={<Blogs/>}/> : <Route path='/' element={<Signin/>}/>}
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/addblog' element={<AddBlog/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>} />
          <Route path='/myblogs' element={<MyBlogs/>} />
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
