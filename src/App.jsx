import { useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
<>
<Routes>
  <Route index element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>


<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
</>
  )
}

export default App
