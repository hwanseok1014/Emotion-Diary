import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

import { useState,useContext} from "react";
import { DiarystateContext } from "../App";

const getMonthlyDate = (pivoDate, data) =>{

  const beginTime = new Date(pivoDate.getFullYear(), 
  pivoDate.getMonth(),
  1,
  0,
  0,
  0
).getTime();

  const endTime = new Date(pivoDate.getFullYear(),
  pivoDate.getMonth()+1,
  0,
  23,
  59,
  59
).getTime();

  return data.filter((item)=>beginTime<=item.createDate && item.createDate<=endTime);
}


const Home =( ) =>{
    const data =useContext(DiarystateContext);

    
    const [pivoDate, setPivoDate] =useState(new Date());
    const monthlyData = getMonthlyDate(pivoDate , data);

    const onIncreaseMonth = ()=>{
        setPivoDate(new Date(pivoDate.getFullYear(),pivoDate.getMonth()+1));
    };

    const onDecreaseMonth = ()=> {
        setPivoDate(new Date(pivoDate.getFullYear(),pivoDate.getMonth()-1));
    };

    return(
    <div>
        <Header title={`${pivoDate.getFullYear()}년 ${pivoDate.getMonth()+1}월`}
        leftChild={<Button text={'<'} 
        onClick={()=>onDecreaseMonth()}/>}
        rightChild={<Button text={'>'} 
        onClick={()=>onIncreaseMonth()}/>}
        />
        <DiaryList data={monthlyData}/>

    </div>
    )
};

export default Home;