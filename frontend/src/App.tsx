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
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
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
