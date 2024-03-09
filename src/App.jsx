import { useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import Todo from './pages/Todo'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoutes from "./routes/ProtectedRoutes";
import AuthRoutes from "./routes/AuthRoutes";


function App() {
  
  return (
<>
<Routes>
<Route element={<AuthRoutes/>}>
  <Route index element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
</Route>

<Route element={<ProtectedRoutes/>}>
<Route path='/home' element={<Home/>}/>
<Route path='/Todo' element={<Todo/>}/>

</Route>


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
