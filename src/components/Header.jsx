import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../userContext'

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);

  useEffect(()=>{
    const checkUser = async()=>{
      const response = await fetch('http://localhost:5000/user/checkuser',{
        credentials : 'include'
      })
      if(response.status===200){
        const userInfo = await response.json();
        setUserInfo(userInfo);
      }
    }

    checkUser();
  },[])

  function logout(){
    fetch('http://localhost:5000/user/logout',{
      credentials: 'include',
      method : 'POST'
    })

    setUserInfo(null);
  }

  const username = userInfo?.username;

return (

    <header>
        <Link to = "/" className ="logo" >My Blog</Link>
        <nav>
          {username && (
            <>
              <Link to ="/create">Create new Post</Link>
              <Link onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
            <Link to ="/login">Login</Link>
            <Link to ="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
  )
}

export default Header