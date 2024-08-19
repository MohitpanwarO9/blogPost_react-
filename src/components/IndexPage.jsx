import React, { useEffect, useState } from 'react'
import Post from './Post'

function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const getPosts = async()=>{
      const response = await fetch('http://localhost:5000/post/getpost');
      const data = await response.json();
      if(response.status === 200){
        setPosts(data);
      }
    }
    
    getPosts();
  },[])
  return (
    <>
        {posts.length > 0 && posts.map(post=>(
          <Post {...post}/>
        ))}
    </>
  )
}

export default IndexPage