import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import {ToastContainer} from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';
import Register from './Register';
import Home from './Home';
import ForgetPassword from './ForgetPassword';
import UpdatePassword from './update-password';
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/forget' Component={ForgetPassword} />
          <Route path='/update-password' Component={UpdatePassword} />
        </Routes>
    </BrowserRouter>
  )
}

export default App