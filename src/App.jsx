import './App.css';
import {Routes, Route, Link} from "react-router-dom";

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

import Button from './components/Button';

function App() {
  return (
  <>
      <Button 
      text={'123'} 
      type={"DEFAULT"}
      onClick={()=>{
        console.log('123번 버튼 클릭!')
      }}/>
            <Button 
      text={'123'} 
      type={"POSITIVE"}
      onClick={()=>{
        console.log('123번 버튼 클릭!')
      }}/>
            <Button 
      text={'123'} 
      type={"NEGATIVE"}
      onClick={()=>{
        console.log('123번 버튼 클릭!')
      }}/>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary" element={<Diary/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
  
  </>

  );
}

export default App
