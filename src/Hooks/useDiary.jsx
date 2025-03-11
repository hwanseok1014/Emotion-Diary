import { useContext, useEffect, useState } from "react"
import { DiarystateContext } from "../App"
import { useNavigate } from "react-router-dom";

const useDiary= (id) =>{
    const state =useContext(DiarystateContext);
    const [curDiaryItem, setCurDiaryItem] =useState();
    const navigation=useNavigate();

    useEffect(() => {
        const currentDiaryItem = state.find(
            (item)=>String(item.id)=== String(id));
        if(!currentDiaryItem){
            window.alert('존재하지 않는 일기입니다.');
            navigation('/', {replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    }, [id,state])

    return curDiaryItem;
}

export default useDiary;