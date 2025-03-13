import './App.css';
import {Routes, Route, Link, data} from "react-router-dom";
import {act, createContext, useEffect, useRef, useState} from 'react';

import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { useReducer } from 'react';


const reducer=(state,action)=>{
  let nextstate;
  switch(action.type){
    case 'InitData':
      return action.data;
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
  const [isLoading, setIsLoading]=useState(true);
  const [state,dispatch] =useReducer(reducer,[]);
  const idRef =useRef(0);

  useEffect(()=>{
    const storedData =localStorage.getItem("diary");
    if(!storedData){
      setIsLoading(false)
      return;
    }
    const parseData = JSON.parse(storedData);

    if(!Array.isArray(parseData)){
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parseData.forEach((item)=>{
      if(Number(item.id)> maxId){
        maxId = Number(item.id)
      }
    })

    idRef.current = maxId +1;

    dispatch({
      type:'InitData',
      data: parseData,
    })
    setIsLoading(false);

  },[])

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

  if(isLoading){
    return <div>...로딩중</div>
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
