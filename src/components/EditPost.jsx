import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
];

function EditPost() {
  const { id } = useParams();

  const [postData, setPostData] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/post/getPost/${id}`);
        const data = await response.json();
        setPostData({
          title: data.title,
          summary: data.summary,
          content: data.content,
          image: "", // Reset image as it's handled by the file input
        });
        //console.log(data); // Log when data is fetched
      } catch (error) {
        console.error("Failed to fetch post data", error);
      }
    };

    fetchPost();
  },[id]); // Only run this effect when 'id' changes

 
  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', postData.title);
    data.set('summary', postData.summary);
    data.set('content', postData.content);
    if (postData.image) {
      data.set('image', postData.image);
    }

    const response = await fetch(`http://localhost:5000/post/edit/${id}`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });

    if (response.status === 200) {
      alert("Post Updated!!");
      setRedirect(true);
    } else {
      alert("Failed to Update!!");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangefile = (e) => {
    const file = e.target.files[0];
    setPostData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={postData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="summary"
        placeholder="Summary"
        value={postData.summary}
        onChange={handleChange}
      />
      <input name="image" type="file" onChange={handleChangefile} />
      <ReactQuill
        value={postData.content}
        onChange={(newValue) => {
          setPostData((prevData) => ({
            ...prevData,
            content: newValue,
          }));
        }}
        modules={modules}
        formats={formats}
      />
      <button style={{ marginTop: "5px" }}>
        Edit Post
      </button>
    </form>
  );
}

export default EditPost;
