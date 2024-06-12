import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href = "" className ="logo" >My Blog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img src="https://cupofjo.com/wp-content/uploads/2024/06/20240531_COJ_Article_020-scaled-fotor-20240611161335-768x523.jpg"/>
        </div>
        <div className="text">
          <h2>Title of the blog post</h2>
          <p className="info">
            <a className="author">Mohit</a>
            <time>2024-06-12</time>
          </p>
          <p className="summary">descreption of the blog post  descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   
          </p>
        </div>
      </div>  

      <div className="post">
        <div className="image">
          <img src="https://cupofjo.com/wp-content/uploads/2024/06/20240531_COJ_Article_020-scaled-fotor-20240611161335-768x523.jpg"/>
        </div>
        <div className="text">
          <h2>Title of the blog post</h2>
          <p className="info">
            <a className="author">Mohit</a>
            <time>2024-06-12</time>
          </p>
          <p className="summary">descreption of the blog post  descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   descreption of the blog post   
          </p>
        </div>
      </div>        
    </main>
  );
}

export default App;
