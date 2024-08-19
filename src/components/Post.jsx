import React, { useContext } from 'react'
import { Link } from "react-router-dom";

function Post({_id,title,summary,content,coverphoto,author}) {

  return (
    <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:5000/"+coverphoto}/>
          </Link>
        </div>
        <div className="text">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>2024-06-12</time>
          </p>
          <p className="summary">{summary}   
          </p>
        </div>
      </div>
  )
}

export default Post