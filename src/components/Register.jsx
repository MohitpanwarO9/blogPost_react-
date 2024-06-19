import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Register() {

  const [user, setUser] = useState({
    username : "",
    email : "",
    password : ""
  });

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/user/register',user);

        if(response.status === 200){
          console.log(response);
        }
        
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value
    })

    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit} className='register' >
      <h2>Register</h2>
      <input type='text' placeholder='Username' name='username' value ={user.username} onChange={handleChange}/>
      <input type='password' placeholder='Password' name='password' value ={user.password} onChange={handleChange}/>
      <input type='text' placeholder='Email' name='email' value = {user.email} onChange={handleChange}/>

      <button type='submit'>Register</button>
    </form>
  )
}

export default Register