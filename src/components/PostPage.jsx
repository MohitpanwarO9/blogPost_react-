import { formatISO9075 } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PostPage() {
    const {id} = useParams();
    const [postInfo , setPostInfo] = useState(null);
    useEffect(()=>{
        const getPostData = async ()=>{
            const res = await fetch(`http://localhost:5000/post/getpost/${id}`);
            const data = await res.json();
            setPostInfo(data);
        }
        getPostData();
    },[])

    if(!postInfo) return <>Post not available</>
  return (
    <div className='post-page'>    
        <h1>{postInfo.title}</h1>
        <time>{formatISO9075(new Date())}</time>
        <div className='author'>by @{postInfo.author.username}</div>
        <div className='image'>
            <img src = {`http://localhost:5000/${postInfo.coverphoto}`} alt=""/>
        </div>
        <h2>{postInfo.summary}</h2>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
  )
}

export default PostPage