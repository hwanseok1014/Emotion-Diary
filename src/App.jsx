import './App.css';
import {Routes, Route, Link, data} from "react-router-dom";
import {createContext, useRef} from 'react';

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { useReducer } from 'react';
import Header from './components/Header';
import Button from './components/Button';


const MockData = [{
  id:1,
  createDate: new Date("2025-03-02").getTime(),
  emotionId: 1,
  content: "1번 일기 내용",
}, {
  id:2,
  createDate: new Date("2025-03-01").getTime(),
  emotionId: 2,
  content: "2번 일기 내용",
}, {
  id:3,
  createDate: new Date("2025-02-28").getTime(),
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

  const Today= new Date(new Date().getTime()).toISOString().slice(0,7)


  const onClick=()=>{
    return(<></>);
  }

  return (
  <>
        <DiarystateContext.Provider value={state}>
          <DiaryDispathcContex.Provider value={{onCreate,onUpdate,onDelete}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/new" element={<New/>}/>
              <Route path="/diary/:id" element={<Diary/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          </DiaryDispathcContex.Provider>   
        </DiarystateContext.Provider>
  </>
  );
}

export default App
