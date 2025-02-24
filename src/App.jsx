import './App.css';
import {Routes, Route, Link, data} from "react-router-dom";
import {useRef} from 'react';

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Editor from './pages/Editor';
import Notfound from './pages/Notfound';
import { useReducer } from 'react';


const MockData = [{
  id:1,
  createDate: new Date().getTime(),
  emotionId: 1,
  content: "1번 일기 내용",
}, {
  id:2,
  createDate: new Date().getTime(),
  emotionId: 2,
  content: "2번 일기 내용",
}]


function App() {
  const [data,dispatch] =useReducer(reducer,MockData);
  const idRef =useRef(3);


  return (
  <>
      <button onClick={()=>onCreate(new Date().getTime(),1,'Hello')}>일기 추가 테스트</button>
      <button onClick={()=>onUpdate(1,new Date().getTime(),3,'수정된 일기입니다.')}>일기 수정 테스트</button>
      <button onClick={()=>onDelete(1)}>일기 삭제 테스트</button>
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
