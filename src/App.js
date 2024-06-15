import './App.css';
import Post from './components/Post';
import Header from './components/Header';
import {Route,Routes} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
