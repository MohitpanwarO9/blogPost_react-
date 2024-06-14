import './App.css';
import Post from './components/Post';
import Header from './components/Header';
import {Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
      <Routes>
        <Route index element={
          <main>
            <Header/>
            <Post/>
          </main>
        }/>
        
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>

      </Routes>
    
  );
}

export default App;
