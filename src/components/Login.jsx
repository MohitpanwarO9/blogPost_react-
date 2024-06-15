import React from 'react'

function Login() {
  return (
    <form action='' className='login'>
      <h2>Login</h2>
      <input type='text' placeholder='Username'/>
      <input type='password' placeholder='Password'/>
      <button>Login</button>
    </form>
  )
}

export default Login