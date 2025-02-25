import './App.css';
import {Routes, Route, Link, data} from "react-router-dom";
import {createContext, useRef} from 'react';

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

const reducer=(state,action)=>{
  switch(action.type){
    case 'Create':
      return [action.data,...state];
    case 'Update':
      return state.map((diary)=>
        String(diary.id) === String(action.data.id)
        ? action.data 
        : diary
      );
    case 'Delete':
      return state.filter((diary)=>String(diary.id) !==String(action.data.id));
    default:
      return state;
 };
};

export const DiarystateContext =createContext();
export const DiaryDispathcContex=createContext();

function App() {
  const [state,dispatch] =useReducer(reducer,MockData);
  const idRef =useRef(3);

  const onCreate= (createDate,emtionId,content)=>{
    dispatch({
      type:'Create',
      data:{
        id: idRef.current++,
        createDate: createDate,
        emtionId: emtionId,
        content: content,
      },
    })
  };

  const onUpdate = (id,createDate, emotionId, content)=>{
    dispatch({
      type: 'Update',
      data: {
        id: id,
        createDate:createDate,
        emotionId:emotionId,
        content: content,
      },
    })
  };
  const onDelete=(id)=>{
    dispatch({
      type: 'Delete',
      data:{
        id: id,
      }
    },);
  }

  return (
  <>
      <button onClick={()=>onCreate(new Date().getTime(),1,'Hello')}>일기 추가 테스트</button>
      <button onClick={()=>onUpdate(1,new Date().getTime(),3,'수정된 일기입니다.')}>일기 수정 테스트</button>
      <button onClick={()=>onDelete(1)}>일기 삭제 테스트</button>
    
        <DiarystateContext.Provider value={state}>
          <DiaryDispathcContex.Provider value={{onCreate,onUpdate,onDelete}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
              <Route path="/edit/:id" element={<Editor/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          </DiaryDispathcContex.Provider>   
        </DiarystateContext.Provider>
  </>

  );
}

export default App
