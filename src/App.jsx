import './App.css';
import {Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Editor from './pages/Editor';
import Notfound from './pages/Notfound';

import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
  <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
        <Route path="/edit/:id" element={<Editor/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
  
  </>

  );
}

export default App
