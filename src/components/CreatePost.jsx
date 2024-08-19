import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

function CreatePost() {
    const [postData , setPostData] = useState({
        title:'',
        summary:'',
        content:'',
        image:''
    });
    const [redirect , setRedirect] =useState(false);

    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
    
        setPostData({
          ...postData,
          [name] : value
        });
      }
    
      async function createNewPost(ev){
        ev.preventDefault();
        const data = new FormData();
        data.set('title', postData.title);
        data.set('summary', postData.summary);
        data.set('content', postData.content);
        data.set('image', postData.image);
        
        const response =await fetch('http://localhost:5000/post/create',{
            method : 'POST',
            'Content-Type' : 'multipart/form-data',
            body : data,
            credentials : 'include',
        })

        if(response.status === 200){
          alert("Post Created!!");
          setRedirect(true);
        }
        else if(response.status === 400 || response.status === 500){
          alert("Failed to Create!!")
        }

      }

      const handleChangefile = (e)=>{
        const file = e.target.files[0];
        const name = e.target.name;
        
        setPostData({
          ...postData,
          [name] : file
        })
      };

      if(redirect)
      {
        return <Navigate to ={'/'}/>
      }

  return (
    <form onSubmit={createNewPost}>
        <input type='text'
            name="title" 
            placeholder='Title' 
            value={postData.title} 
            onChange={handleChange}/>
        <input type='summary'
            name="summary" 
            placeholder='Summary'
            value={postData.summary}
            onChange={handleChange}/>
        <input name = "image" 
            type='file'
            onChange={handleChangefile}/>
        <ReactQuill 
            value={postData.content}
            onChange={newValue=>{setPostData({
                ...postData,
                content : newValue
              });
            }
            } 
            modules={modules}/>
        <button style={{marginTop:'5px'}} formats={formats}>Create Post</button>
    </form>
  )
}

export default CreatePost