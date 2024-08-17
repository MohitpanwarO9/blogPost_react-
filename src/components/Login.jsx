import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function Login() {

  const [user , setUser] = useState({
    email:'',
    password:''
  });

  const [redirect ,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);


  const handleOnSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch('http://localhost:5000/user/login',{
      method: 'POST',
      body : JSON.stringify(user),
      headers: {'Content-Type':'application/json'},
      credentials: 'include'
    })
    if(response.status === 200){
        const userdata = await response.json();
        setUserInfo(userdata);
        setRedirect(true);
    }else if(response.status === 404){
      alert("User Not found");
    }else{
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
      <input type='text' placeholder='Email' name="email" value={user.email} onChange={handlOnChange} required/>
      <input type='password' placeholder='Password' name='password' value={user.password} onChange={handlOnChange} required/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login