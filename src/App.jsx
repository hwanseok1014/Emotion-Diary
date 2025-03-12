import './App.css';
import {Routes, Route, Link, data} from "react-router-dom";
import {createContext, useRef} from 'react';

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { useReducer } from 'react';


const reducer=(state,action)=>{
  let nextstate;
  switch(action.type){
    case 'Create':
      nextstate=[action.data,...state];
      break;
    case 'Update':
      nextstate=state.map((diary)=>
        String(diary.id) === String(action.data.id)
        ? action.data 
        : diary
      );
      break;
    case 'Delete':
      nextstate =state.filter((diary)=>String(diary.id) !==String(action.data.id));
      break;
    default:
      nextstate= state;
 };
 localStorage.setItem('diary', JSON.stringify(nextstate));
 return nextstate;
};

export const DiarystateContext =createContext();
export const DiaryDispathcContex=createContext();

function App() {
  const [state,dispatch] =useReducer(reducer,[]);
  const idRef =useRef(3);

  const onCreate= (createDate,emotionId,content)=>{
    dispatch({
      type:'Create',
      data:{
        id: idRef.current++,
        createDate: createDate,
        emotionId: emotionId,
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
