import  React from 'react'
import '../css/login.css'
import login_img from '../assets/login_img.avif'

const Login = () => {
  return (
        <div className='main-container'>
         <div className="container">
          <img src = {login_img} placeholder = "image"></img>
         </div>
        </div>
  )
}

export default Login;
