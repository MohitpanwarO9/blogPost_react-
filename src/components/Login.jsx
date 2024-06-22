import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function Login() {

  const [user , setUser] = useState({
    email:'',
    password:''
  });

  const [redirect ,setRedirect] = useState(false);

  const handleOnSubmit = async(e)=>{
    e.preventDefault();
    console.log(user);

    const respons = await axios.post("http://localhost:5000/user/login",user);
    console.log(respons);
    if(respons.status === 200)
    {
      alert("Login Successful");
      setRedirect(true);
    }
    else
    {
      alert("Wrong Credentials")
    }
  }

  const handlOnChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value
    });
  }

  if(redirect)
    {
      return <Navigate to={'/'}/>
    }

  return (
    <form onSubmit={handleOnSubmit} className='login'>
      <h2>Login</h2>
      <input type='text' placeholder='Email' name="email" value={user.email} onChange={handlOnChange}/>
      <input type='password' placeholder='Password' name='password' value={user.password} onChange={handlOnChange}/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login